import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Home from "../Sections/Home";
import AboutUs from "../Sections/AboutUs";
import AdminNavbar from "../Components/AdminNavbar"
import ProjectsAdmin from "../Sections/ProjectsAdmin";
import AdminFooter from "../Components/AdminFooter";
import { auth } from "../firebase_";


class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect : false};
  }
   componentDidMount () {
   this.isLoggedIn()
  }

  isLoggedIn = async () => {
   await auth.onAuthStateChanged((user) => {
        console.log("test", user)
        if (user) {
          //  console.log(user)
        } else {
          this.setState({redirect : true})
        }
    });
  }
  render() {
    if(this.state.redirect){
      return <Redirect to="/login" />
    }
    return (
      <div>
        <AdminNavbar />
        <Home />
        <AboutUs />
        <ProjectsAdmin />
        <AdminFooter />
      </div>
    );
  }
}

export default AdminPage;