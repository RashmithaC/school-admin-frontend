import axios from 'axios';
import React, { useState, useEffect } from 'react';


const GetTeacherById = () => {

    //const [empList, setEmpList] = useState([]);
    const [sm, setsm] = useState({
        teacherId: 0,
        teacherName: "",
        teacherPassword: ""


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
        axios.get(`http://localhost:8083/school-admin/admin/getTeacherById/${sm.teacherId}`)
            .then((response) => {
                setsm(response.data);
            }).catch(error => {
                alert(" does not exist!");
            });
        evt.preventDefault();
    }


    return (
        <div className="container" >
            <title>Get Teacher By Id</title>
            <div class="card" style={{ width: "18rem" }} className="container">

                <div class="card-body">
                    <h3 >View Teacher by Id</h3>
                    <hr />
                    <form className="form form-group row container" onSubmit={submitsmId} >
                        <div>
                            <p>Teacher Id</p>
                            <input
                                type="number"
                                id="teacherId"
                                name="teacherId"
                                className="form-control mb-3"
                                value={sm.teacherId}
                                placeholder="Enter Id"
                                onChange={handlesmData}
                            />

                            <input
                                type="submit"
                                id="submit"
                                name="submit"
                                className="btn btn-primary mb-3"
                                value="View Teacher"

                            />
                        </div>
                    </form>
                    {/* <p> {emp.employee.employeeId} <br />{emp.employee.employeeName} <br />{emp.month}<br />{emp.year}<br />{emp.salary} </p> */}
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Teacher ID</th>
                                <th scope="col">Name</th>
                                {/* <th scope="col">Teacher Id</th>
                                <th scope="col">Teacher name</th> */}

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{sm.teacherId}</th>
                                <td>{sm.teacherName}</td>
                                {/* <td>{sm.teacherId.teacherId}</td>
                                <td>{sm.teacherId.teacherName}</td> */}

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

export default GetTeacherById;