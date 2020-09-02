import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import AdminNavbar from "../Components/AdminNavbar";
import ProjectsAdminText from "../Components/ProjectsAdminText";
import ProjectsIllustration from "../Components/ProjectsIllustration";

class ProjectsAdmin extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    } 
  render() {
    return (
      <div>
      <AdminNavbar />
        <MDBContainer fluid className='no-padding'>
          <section
            id='projectsadmin'
          >
            <ProjectsAdminText />
            <ProjectsIllustration />
            </section>
        </MDBContainer>
      </div>
    );
  }
}

export default ProjectsAdmin;