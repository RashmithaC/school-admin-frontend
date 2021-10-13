import axios from 'axios';
import React, { useState, useEffect } from 'react';


const GetHomeworkById = () => {

    //const [empList, setEmpList] = useState([]);
    const [sm, setsm] = useState({
        homeId: 0,
        name: "",
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }

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
        axios.get(`http://localhost:8083/school-admin/student/student/getHomeworkById/${sm.homeId}`)
            .then((response) => {
                setsm(response.data);
            }).catch(error => {
                alert(" does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>View HomeWork Details</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >View Homework</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitsmId} >
                        <div>
                            <p>Homework Id</p>
                            <input
                                type="number"
                                id="homeId"
                                name="homeId"
                                className="form-control mb-3"
                                value={sm.homeId}
                                placeholder="Enter Id"
                                onChange={handlesmData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="View SM Details"

                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">HomeworkID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Teacher Id</th>
                                {/* <th scope="col">Teacher name</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{sm.homeId}</th>
                                <td>{sm.name}</td>
                                <td>{sm.teacherId.teacherId}</td>
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

export default GetHomeworkById;