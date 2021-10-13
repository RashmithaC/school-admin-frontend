import axios from 'axios';
import React, { useState, useEffect } from 'react';


const GetNoticeById = () => {

    //const [empList, setEmpList] = useState([]);
    const [ni, setni] = useState({

        noticeId: 0,
        name: "",
        date: "",
        notice: ""
    });



    const handleniData = (evt) => {


        console.log("handleniData", evt.target.name, evt.target.value);
        setni({
            ...ni,
            [evt.target.name]: evt.target.value,


        });

        evt.preventDefault();
    }


    const submitGetniById = (evt) => {
        console.log("submitGetniById");
        axios.get(`http://localhost:8083/school-admin/student/student/getNoticeById/${ni.noticeId}`)
            .then((response) => {
                setni(response.data);
            }).catch(error => {
                alert("NoticeID does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Get Notice By Id</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >Get Notice By ID</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitGetniById} >
                        <div>
                            <p>Notice Id</p>
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
                                id="NoticeId"
                                name="NoticeId"
                                className="form-control mb-3"
                                value={ni.complaintId}
                                placeholder="Enter Id"
                                onChange={handleniData}
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
                                <th scope="col">NoticeID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Notice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <th scope="row">{cm.studentId.studentId}</th> */}
                                <td>{ni.noticeId}</td>
                                <td>{ni.name}</td>
                                <td>{ni.date}</td>
                                <td>{ni.notice}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><br /><br /></p>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}

export default GetNoticeById;