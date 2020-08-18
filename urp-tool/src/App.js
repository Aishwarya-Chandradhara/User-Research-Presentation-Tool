import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from "./Screens/MainPage";
import ProjectsPage from "./Screens/ProjectsPage";
import LoginPage from "./Screens/LoginPage";
import Signup from "./Screens/Signup";
import ForgotPassword from "./Screens/ForgotPassword";

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
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;