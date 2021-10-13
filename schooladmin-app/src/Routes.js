import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import AddComplaint from './components/student/AddComplaint';
import Login from './components/Login';
import AddAdmin from './components/admin/AddAdmin';
import AdminLogin from './components/admin/AdminLogin';
import PageNotFound from './components/PageNotFound';
// import GetStudyMaterial from './components/student/GetStudyMaterialById';
import GetAllComplaint from './components/student/GetAllComplaint';
// import AddCourse from './components/admin/AddCourse';
import GetAllCourse from './components/student/GetAllCourse';
import UpdateHomeWork from './components/student/UpdateHomework';
import DeleteComplaint from './components/student/DeleteComplaint';
import GetComplaintById from './components/student/GetComplaintById';
import UpdateComplaint from './components/student/UpdateComplaint';
import GetAllNotice from './components/student/GetAllNotice';
import GetStudyMaterialById from './components/student/GetStudyMaterialById';
import GetNoticeById from './components/student/GetNoticeById';
import GetAllStudyMaterial from './components/student/GetAllStudyMaterials';
import GetHomeworkById from './components/student/GetHomeworkById';
import GetCourseById from './components/student/GetCourseById';
import GetAllHomework  from './components/student/GetAllHomework';
import GetAdminById from './components/admin/GetAdminById';
import GetStudentById from './components/admin/GetStudentById';
import GetTeacherById from './components/admin/GetTeacherById';
import Home from './components/Home';


const Routes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Header />
                    <div>
                        <Switch>
                            <Route exact path="/"> <Home /> </Route>
                            <Route path="/home"> <Home /> </Route>
                            <Route path="/getComplaintId"><GetComplaintById/></Route>
                            <Route path="/updateComplaint"><UpdateComplaint/></Route>
                            <Route path="/deleteComplaint"><DeleteComplaint/></Route>
                            {/* <Route path ="/studyMaterials"><GetStudyMaterial/></Route> */}
                            <Route path="/getAllComplaints"><GetAllComplaint/></Route>
                            <Route path="/updateHomework"><UpdateHomeWork/></Route>
                            <Route path="/getAllCourse"><GetAllCourse/></Route>
                            <Route path="/getAllNotice"><GetAllNotice/></Route>
                            <Route path="/getAllStudyMaterials"><GetAllStudyMaterial/></Route>
                            <Route path="/getStudyMaterialById"><GetStudyMaterialById/></Route>
                            <Route path="/getNoticeById"><GetNoticeById/></Route>
                            <Route path="/gethomeworkById"><GetHomeworkById/></Route>
                            <Route path="/login"> <Login /> </Route>
                            <Route path="/addAdmin"><AddAdmin/></Route>
                            <Route path="/adminLogin"><AdminLogin /></Route>
                            {/* <Route path="/addCourse"><AddCourse /></Route> */}
                            <Route path="/getCourseById"><GetCourseById/></Route>
                            <Route path="/addComplaint"><AddComplaint/></Route>
                            <Route path="/getAllHomework"><GetAllHomework/></Route>
                            <Route path="/getAdminById"><GetAdminById/></Route>
                            <Route path="/getStudentById"><GetStudentById/></Route>
                            <Route path="/getTeacherById"><GetTeacherById/></Route>
                            <Route path="/*"> <PageNotFound /> </Route>
                        </Switch>
                    </div>
                  
                </div>
            </Router>
        </div>
    );
}
export default Routes;