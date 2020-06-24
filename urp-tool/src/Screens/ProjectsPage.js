import React, { Component } from "react";
import { MDBTypography } from "mdbreact";
import ProjectsPageText from "../Components/ProjectsPageText";
import Footer from "../Components/Footer";
import ProjectsPageIllustration from "../Components/ProjectsPageIllustration"
import ProjectsCard from "../Components/ProjectsCard"

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <section className='col-md-12 background-4'>
        <MDBTypography
          tag='h3'
          variant='h3-responsive'
          className='text-left font_bold font_size_title'
          style={{ paddingTop: "8vh", marginLeft: "4vw", color: "#222222" }}
        >
          Projects
        </MDBTypography>
      <div>
        <ProjectsPageText />
        <ProjectsPageIllustration />
        <ProjectsCard />
        <Footer />
      </div>
      </section>
    );
  }
}

export default ProjectsPage;