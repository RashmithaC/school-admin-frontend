import axios from 'axios';
import React, { useState, useEffect } from 'react';


const GetComplaintById = () => {

    //const [empList, setEmpList] = useState([]);
    const [cm, setCm] = useState({

        complaintId: 0,
        note: '',
        date:'',
        studentId:{
            studentId:0,
            studentName:'',
            studentPassword:''
        }
    });

   

    const handleCmData = (evt) => {


        console.log("handleCmData", evt.target.name, evt.target.value);
        setCm({
            ...cm,
            [evt.target.name]: evt.target.value,
           

        });

        evt.preventDefault();
    }


    const submitGetCmById = (evt) => {
        console.log("submitGetCmById");
        axios.get(`http://localhost:8083/school-admin/student/student/getComplaintById/${cm.complaintId}`)
            .then((response) => {
                setCm(response.data);
            }).catch(error => {
                alert("ComplaintID does not exist!");
            });
        evt.preventDefault();
    }
    

    return (
        <div className="container" >
            <title>Get Complaint By Id</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            
            <div class="card-body">
            <h3 >Get Complaint By ID</h3>
            <hr/>
                <form className="form form-group row container" onSubmit={submitGetCmById} >
                    <div>
                        <p>Complaint Id</p>
                        {/* <input
                            type="number"
                            id="studentId"
                            name="studentId"
                            className="form-control mb-3"
                            value={cm.studentId.studentId}
                            placeholder="Enter Id"
                            onChange={handleCmData}
                        /> */}
                        <input
                            type="number"
                            id="complaintId"
                            name="complaintId"
                            className="form-control mb-3"
                            value={cm.complaintId}
                            placeholder="Enter Id"
                            onChange={handleCmData}
                        />
            
                        <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-primary mb-3"
                            value="Submit"
                        />
                    </div>
                </form>
                {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">StudentID</th>
                            <th scope="col">ComplaintId</th>
                            <th scope="col">Note</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <th scope="row">{cm.studentId.studentId}</th> */}
                            <td>{cm.studentId.studentId}</td>
                            <td>{cm.complaintId}</td>
                            <td>{cm.note}</td>
                            <td>{cm.date}</td>
                        </tr>
                    </tbody>
                </table>
                <p><br/><br/></p>
            </div>
            </div>
                <p><br/><br/></p>
        </div>
    );
}

export default GetComplaintById;