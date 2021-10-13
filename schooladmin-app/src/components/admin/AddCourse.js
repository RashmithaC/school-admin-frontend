import axios from 'axios';
import React, { useState, useEffect } from 'react';
const AddCourse = () => {
    const [course, setCourse] = useState({
        courseId: '',
        name: '',
        numhrs: '',
        teacher:{
            teacherId:0,
            teacherName:'',
            teacherPassword:''
            
        }
    });

    const handleCourseDetails = (evt) => {
        console.log("handleCourseDetails", evt.target.name, evt.target.value);
        setCourse({
            ...course,
            [evt.target.name]: evt.target.value,


        });
        evt.preventDefault();
    }
    const submitCourseDetails = (evt) => {
        console.log(course);
        axios.post('http://localhost:8083/addCourse', course)
            .then((response) => {
                console.log(response);
                setCourse(response.data);
                alert('Course successfully added!!')
            }).catch(error => {
                console.log(error.message);
                alert('Course not added')
            });
        evt.preventDefault();

    }
    return (
        <div className="container">
            <title>AddCourse</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3> Add Courses</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitCourseDetails}>
                        <div>
                            <p>Course Id</p>
                            <input
                                type="number"
                                id="courseId"
                                name="courseId"
                                className="form-control mb-3"
                                value={course.courseId}
                                placeholder="Enter Id"
                                onChange={handleCourseDetails()}
                            />
                            <p>Course Name</p>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control mb-3"
                                value={course.name}
                                placeholder="Enter Course Name"
                                onchange={handleCourseDetails()}
                            />
                            <p>Hours</p>
                            <input
                                type="number"
                                id="numhrs"
                                name="numhrs"
                                className="form-control mb-3"
                                value={course.numhrs}
                                placeholder="Enter no.of hours"
                                onchange={handleCourseDetails()}
                            />
                            <p>Teacher</p>
                            <input
                                type="text"
                                id="teacher"
                                name="teacher"
                                className="form-control mb-3"
                                value={course.teacher.teacherId}
                                placeholder="Enter teacherId"
                                onchange={handleCourseDetails()}
                            />
                            <input
                                type="text"
                                id="teacher"
                                name="teacher"
                                className="form-control mb-3"
                                value={course.teacher.teacherName}
                                placeholder="Enter teacher name"
                                onchange={handleCourseDetails()}
                            />
                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="Add Admin"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <p><br /><br /></p>
        </div>
    );
}
export default AddCourse;