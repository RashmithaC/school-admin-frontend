import axios from 'axios';
import React, { useState, useEffect } from 'react';



const UpdateComplaint = () => {


    const [uc, setuc] = useState({

        complaintId: 0,
        note: '',
        date:'',
        studentId:{
            studentId:0,
            studentName:'',
            studentPassword:''

        }
    });

    const handleucData = level => (event) => {

        if (!level) {
            console.log("handleucData", event.target.name, event.target.value);
            setuc({
                ...uc,
                [event.target.name]: event.target.value,

            });
        }
        else{
            setuc(
                {
                    ...uc,
                    [level]: {
                        ...uc[level],
                        [event.target.name]: event.target.value,
                    }
                }
            )
        }

        event.preventDefault();
    }



    const submitUpdateuc = (event) => {

        console.log(uc);
        axios.put('http://localhost:8082/school-admin/student/student/updateComplaint/${uc.complaintId}', uc)
            .then((response) => {
                console.log(response);
                setuc(response.data);
                alert('Complaint update Successfully.')
            }).catch(error => {
                console.log(error.message);
                alert('Complaint not Updated')
            });
        event.preventDefault();
    }


    return (
        <div className="container" >
            <title>Update Complaint</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Update Complaint</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitUpdateuc} >
                        <div>
                            <p>Student ID</p>
                            <input
                                type="number"
                                id="studentId"
                                name="studentId"
                                className="form-control mb-3"
                                value={uc.studentId.studentId}
                                placeholder="Enter Student Id"
                                onChange={handleucData('studentId')}
                            />
                            <p>Complaint ID</p>
                            <input
                                type="number"
                                id="complaintId"
                                name="complaintId"
                                className="form-control mb-3"
                                value={uc.complaintId}
                                placeholder="Enter Complaint Id"
                                onChange={handleucData()}
                            />
                            <p>Complaint</p>
                            <input
                                type="text"
                                id="note"
                                name="note"
                                className="form-control mb-3"
                                value={uc.note}
                                placeholder="Enter Complaints"
                                onChange={handleucData()}
                            />
                            <p>Date</p>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control mb-3"
                                value={uc.date}
                                placeholder="date"
                                onChange={handleucData()}
                            />


                            <p><br></br></p>
                            <input
                            type ="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Update Complaint"
                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                    <div className="Container text-left">
                        <table class="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Student ID</th>
                                   {/*  <th scope="col">Teacher Name</th> */}
                                    <th scope="col">Complaint Id</th>
                                    <th scope="col">Complaint</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>


                                    {/* <th scope="row">{hw.teacherId.teacherId}</th> */}
                                    {/* <td>{homework.teacherId.teacherName}</td> */}
                                    <td>{uc.studentId.studentId}</td>
                                    <td>{uc.complaintId}</td>
                                    <td>{uc.note}</td>
                                    <td>{uc.date}</td>



                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default UpdateComplaint;