import axios from 'axios';
import React, { useState, useEffect } from 'react';



const GetAllNotice = (props) => {

    const [noticeList, setnoticeList] = useState([]);
    const [notice, setnotice] = useState({
        date: "",
        name: "",
        notice: "",
        noticeId: 0
        

    });
    const [onenotice, setOnenotice] = useState({
        date: "",
        name: "",
        notice: "",
        noticeId: 0
        

    });


    const handlenpData = (evt) => {
        console.log("handlenpData", evt.target.name, evt.target.value);
        setnotice({
            ...notice,
            [evt.target.name]: evt.target.value
        });
    }

    const handleOnenpData = (evt) => {
        console.log("handleOnenpData", evt.target.name, evt.target.value);
        setOnenotice({
            ...notice,
            [evt.target.name]: evt.target.value
        });
    }




    const viewnotice = (evt) => {
        axios.get('http://localhost:8083/school-admin/student/student/getAllNotice')
            .then((response) => {
                setnoticeList(response.data);
            }).catch(error => {
                console.log(error.message)
                alert("Employee List is empty");
            });
        evt.preventDefault();
    }

    return (
        <div className="container" >
            <title>Get All Notice</title>
            <h1>View Notice</h1>

            <div>
                <div>
                    <input
                        type="submit"
                        id="submit"
                        name="submit"
                        className="btn btn-primary mb-3"
                        value="Get All Notice"
                        onClick={viewnotice}
                    />
                </div>
                <div className="Container text-left">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Date </th>

                                <th scope="col">Name</th>
                                <th scope="col">Notices</th>
                                <th scope="col">NoticeId</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {noticeList.map((p, k) => {
                                    console.log(p);
                                    return (

                                        <div k={k}>
                                            <th scope="row">{p.date}</th>

                                            {/* <td>{p.courseId}</td> */}
                                            <td>{p.name}</td>
                                            <td>{p.notice}</td>
                                            <td>{p.noticeId}</td>

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
export default GetAllNotice;