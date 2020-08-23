import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from "./Screens/MainPage";
import ProjectsPage from "./Screens/ProjectsPage";
import LoginPage from "./Screens/LoginPage";
import Signup from "./Screens/Signup";
import UserResearchPage from "./Screens/UserResearchPage"
import ForgotPassword from "./Screens/ForgotPassword";
import AdminPage from "./Screens/AdminPage";
import AddProjects from "./Screens/AddProjects";
import AddUserResearch from "./Screens/AddUserResearch"

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={Signup} />
        <Route path='/forgotpassword' component={ForgotPassword} />
        <Route path='/userresearch' component={UserResearchPage} />
        <Route path='/adminpage' component={AdminPage} />
        <Route path='/addprojects' component={AddProjects} />
        <Route path='/adduserresearch' component={AddUserResearch} />

      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;