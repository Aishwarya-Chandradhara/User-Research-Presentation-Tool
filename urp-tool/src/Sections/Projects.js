import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "../Components/Navbar";
import ProjectsText from "../Components/ProjectsText";
import ProjectsIllustration from "../Components/ProjectsIllustration";

class Projects extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    } 
  render() {
    return (
      <div>
      <Navbar />
        <MDBContainer fluid className='no-padding'>
          <section
            id='projects'
            className='row col-md-12 col-xs-12 responsive-height background-1 no-margin'
          >
            <ProjectsText />
            <ProjectsIllustration />
            
          </section>
        </MDBContainer>
      </div>
    );
  }
}

export default Projects;