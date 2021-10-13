import axios from 'axios';
import React, { useState, useEffect } from 'react';


const GetCourseById = () => {

    //const [empList, setEmpList] = useState([]);
    const [sm, setsm] = useState({
        courseId: 0,
        name: "",
        numhrs: "",
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
        axios.get(`http://localhost:8083/school-admin/student/student/getCourseById/${sm.courseId}`)
            .then((response) => {
                setsm(response.data);
            }).catch(error => {
                alert(" does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>View Course Details</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >View Course</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitsmId} >
                        <div>
                            <p>Course Id</p>
                            <input
                                type="number"
                                id="courseId"
                                name="courseId"
                                className="form-control mb-3"
                                value={sm.courseId}
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
                                <th scope="col">CourseID</th>
                                <th scope="col">Name</th>
                                <th scope="col">No.of Hours</th>

                                <th scope="col">Teacher Id</th>
                                {/* <th scope="col">Teacher name</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{sm.courseId}</th>
                                <td>{sm.name}</td>
                                <td>{sm.numhrs}</td>

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

export default GetCourseById;