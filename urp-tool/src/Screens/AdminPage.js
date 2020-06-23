import React, { Component } from "react";
import Home from "../Sections/Home";
import AboutUs from "../Sections/AboutUs";
import AdminNavbar from "../Components/AdminNavbar"
import ProjectsAdmin from "../Sections/ProjectsAdmin";
import AdminFooter from "../Components/AdminFooter";

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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