import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllComplaint = (props) => {

    const [complaintList, setComplaintList] = useState([]);
    const [complaint, setComplaint] = useState({
        complaintId: 0,
            note: '',
            date:'',
            studentId:{
                studentId:0,
                studentName:'',
                studentPassword:''
            }

    });
    const [onecomplaint, setOneComplaint] = useState({
        complaintId: 0,
            note: '',
            date:'',
            studentId:{
                studentId:0,
                studentName:'',
                studentPassword:''
            }
    });


    const handlecpData = (evt) => {
        console.log("handlecpData", evt.target.name, evt.target.value);
        setComplaint({
            ...complaint,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnecpData = (evt) => {
        console.log("handleOnecpData", evt.target.name, evt.target.value);
        setOneComplaint({
            ...complaint,
            [evt.target.name]: evt.target.value
        });
    }




    const viewComplaint = (evt) => {
        axios.get('http://localhost:8083/school-admin/student/student/getAllComplaint')
            .then((response) => {
                setComplaintList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Employee List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Complaints</title>
            <h1>View Complaints</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Complaints"
                        onClick={viewComplaint}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">studentId </th>
                                
                                <th scope="col">complaintId</th>
                                <th scope="col">note</th>
                                <th scope="col">Date</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {complaintList.map((p, k) => {
                                    console.log(p);
                                    return (

                                        <div k={k}>

                                            <td>{p.studentId.studentId}</td>
                                            <td>{p.complaintId}</td>
                                            <td>{p.note}</td>
                                            <td>{p.date}</td>
                                            
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
export default GetAllComplaint;