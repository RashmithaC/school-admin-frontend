import axios from 'axios';
import React, { useState, useEffect } from 'react';


const GetNoticeById = () => {

    //const [empList, setEmpList] = useState([]);
    const [sm, setsm] = useState({
        noticeId: 0,
        name: "",
        date: "",
        notice: ""
    });



    const handlesmData = (evt) => {


        console.log("handlesmData", evt.target.name, evt.target.value);
        setsm({
            ...sm,
            [evt.target.name]: evt.target.value,


        });

        evt.preventDefault();
    }


    const submitsmId = (evt) => {
        console.log("submitGetsmById");
        axios.get(`http://localhost:8083/school-admin/student/student/getNoticeById/${sm.noticeId}`)
            .then((response) => {
                setsm(response.data);
            }).catch(error => {
                alert(" does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>View Notice Details</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >View Notice</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitsmId} >
                        <div>
                            <p>Notice Id</p>
                            <input
                                type="number"
                                id="noticeId"
                                name="noticeId"
                                className="form-control mb-3"
                                value={sm.noticeId}
                                placeholder="Enter Id"
                                onChange={handlesmData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="View Notice"

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
                                {/* <th scope="col">Teacher name</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{sm.noticeId}</th>
                                <td>{sm.name}</td>
                                <td>{sm.date}</td>

                                <td>{sm.notice}</td>
                                {/* <td>{sm.teacherId.teacherName}</td> */}

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