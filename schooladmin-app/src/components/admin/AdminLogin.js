import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';






const AdminLogin = () => {

    const history = useHistory();


    const [oneEmp, setOneEmp] = useState({
        adminId: 0,
       // employeeName: '',
        adminPassword: ''
    });

    const handleOneEmpData = (evt) => {
        console.log("handleOneEmpData", evt.target.name, evt.target.value);
        setOneEmp({
            ...oneEmp,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = (evt) => {

        axios.post('http://localhost:8083/AdminLogin',oneEmp)
            .then(async(response) => {
               await history.push('/AdminHome');
            }).catch(error => {
                console.log(error.message)
                alert("Admin Id does not exist!");
            });
        evt.preventDefault();
    }

    


    return (
        <div className="container">
            <title>Admin Login</title>
            <div class="card" style={{ width: "18rem" }}  className="container">
            <div class="card-body">
            <form>
                <h3>Admin Login</h3>

                <div className="form-group">
                    <label>Admin Id</label>
                    <input type="number"
                            id="adminId"
                            name="adminId"
                            className="form-control mb-3"
                            value={oneEmp.adminId}
                            onChange={handleOneEmpData}
                            placeholder="Enter Id" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                            id="adminPassword"
                            name="adminPassword"
                            className="form-control mb-3"
                            value={oneEmp.adminPassword}
                            onChange={handleOneEmpData}
                            placeholder="Enter Password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={onSubmit}>Submit</button>


            </form>
            </div>
            </div>
        </div>
    );
}

export default AdminLogin;