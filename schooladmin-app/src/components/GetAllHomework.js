import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllHomework = (props) => {

    const [studyList, setstudyList] = useState([]);
    const [study, setstudy] = useState({
        name: "",
        studyId: 0,
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }
    });
    const [onestudy, setOnestudy] = useState({
        name: "",
        studyId: 0,
        teacherId: {
            teacherId: 0,
            teacherName: "",
            teacherPassword: ""
        }


    });


    const handlespData = (evt) => {
        console.log("handlenpData", evt.target.name, evt.target.value);
        setstudy({
            ...study,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnespData = (evt) => {
        console.log("handleOnenpData", evt.target.name, evt.target.value);
        setOnestudy({
            ...study,
            [evt.target.name]: evt.target.value
        });
    }




    const viewHomework = (evt) => {
        axios.get('http://localhost:8083/school-admin/student/student/getHomework')
            .then((response) => {
                setstudyList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Materials is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Homework</title>
            <h1>View Homework</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All StudyMaterials"
                        onClick={viewHomework}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">HomeworkId </th>

                                <th scope="col">Name</th>
                                <th scope="col">TeacherId</th>
                               

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {studyList.map((p, k) => {
                                    console.log(p);
                                    return (

                                        <div k={k}>
                                            <th scope="row">{p.homeId}</th>

                                            {/* <td>{p.courseId}</td> */}
                                            <td>{p.name}</td>
                                            <td>{p.teacherId.teacherId}</td>
                                           
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
export default GetAllHomework;