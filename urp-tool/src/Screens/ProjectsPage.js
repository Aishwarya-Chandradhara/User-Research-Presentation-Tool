import React, { Component } from "react";
import { MDBTypography, MDBBtn, MDBIcon, MDBNavLink } from "mdbreact";
import ProjectsPageText from "../Components/ProjectsPageText";
import NewFooter from "../Components/NewFooter"
import ProjectsPageIllustration from "../Components/ProjectsPageIllustration"
import ProjectsCard from "../Components/ProjectsCard"
import Bosch from "../Assets/Path 51.png"
import Puma from "../Assets/Path 52.png"
import Paypal from "../Assets/Path 53.png"
import Siemens from "../Assets/Path 54.png"
import CNN from "../Assets/Path 55.png"
import Skechers from "../Assets/Path 56.png"
import Starbucks from "../Assets/Path 57.png"
import Levis from "../Assets/Path 58.png"

class ProjectsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [{ image: Bosch, title: "project1", desc: "desc1" },
      { image: Puma, title: "project2", desc: "desc2" },
      { image: Paypal, title: "project3", desc: "desc3" },
      { image: Siemens, title: "project3", desc: "desc3", },
      { image: CNN, title: "project4", desc: "desc4" },
      { image: Skechers, title: "project5", desc: "desc5" },
      { image: Starbucks, title: "project6", desc: "desc6" },
      { image: Levis, title: "project7", desc: "desc7" },
      ]
    }
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
          {/* <ProjectsPageIllustration /> */}
          <ProjectsCard projects={this.state.projects} />
          <MDBBtn color="blue" href="#"> <MDBIcon icon='angle-left' className='ml-2' /> Back to Home
          <MDBNavLink
              style={{
                color: "#FFFFFF"
              }}
              exact to='/'
            >
            </MDBNavLink>
          </MDBBtn>
          <NewFooter />
        </div>
      </section>
    );
  }
}

export default ProjectsPage;