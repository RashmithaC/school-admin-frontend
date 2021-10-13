import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllCourse = (props) => {

    const [courseList, setcourseList] = useState([]);
    const [course, setcourse] = useState({
        courseId: 0,
        name: "",
        numhrs: "",
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }

    });
    const [onecourse, setOnecourse] = useState({
        courseId: 0,
        name: "",
        numhrs: "",
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }
    });


    const handlecpData = (evt) => {
        console.log("handlecpData", evt.target.name, evt.target.value);
        setcourse({
            ...course,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnecpData = (evt) => {
        console.log("handleOnecpData", evt.target.name, evt.target.value);
        setOnecourse({
            ...course,
            [evt.target.name]: evt.target.value
        });
    }




    const viewcourse = (evt) => {
        axios.get('http://localhost:8083/school-admin/student/student/getAllCourse')
            .then((response) => {
                setcourseList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Employee List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Course</title>
            <h1>View Course</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Complaints"
                        onClick={viewcourse}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">courseId </th>

                                <th scope="col">teacherId</th>
                                <th scope="col">Course-name</th>
                                <th scope="col">Total No.of Hours</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {courseList.map((p, k) => {
                                    console.log(p);
                                    return (

                                        <div k={k}>
                                            <th scope="row">{p.courseId}</th>

                                            {/* <td>{p.courseId}</td> */}
                                            <td>{p.teacherId.teacherId}</td>
                                            <td>{p.name}</td>
                                            <td>{p.numhrs}</td>

                                        </div>

                                    )
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
}
export default GetAllCourse;