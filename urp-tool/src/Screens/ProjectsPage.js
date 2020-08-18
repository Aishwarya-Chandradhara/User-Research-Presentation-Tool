import React, { Component } from "react";
import { MDBTypography, MDBIcon, MDBNavLink } from "mdbreact";
import ProjectsPageText from "../Components/ProjectsPageText";
import NewFooter from "../Components/NewFooter"
import ProjectsCard from "../Components/ProjectsCard"
import Bosch from "../Assets/Bosch.png"
import Puma from "../Assets/Puma.png"
import Paypal from "../Assets/Paypal.png"
import Siemens from "../Assets/Siemens.png"
import CNN from "../Assets/CNN.png"
import Skechers from "../Assets/Skechers.png"
import Starbucks from "../Assets/Starbucks.png"
import Levis from "../Assets/Levis.png"

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
          <ProjectsCard projects={this.state.projects} />
          <button
        type='button'
        style={{
          color: "#FFFFFF",
          backgroundColor: "#0066FF",
          marginLeft: "10vw",
          padding: "8px",
          borderRadius: "25px",
          border: "none"
        }}
      > 
        <MDBNavLink
              style={{
                color: "#FFFFFF"
              }}
              exact
              to='/'
            > <MDBIcon icon='angle-left' className='ml-2' />
                  Back to Home
            </MDBNavLink>
      </button>
          <NewFooter />
        </div>
      </section>
    );
  }
}

export default ProjectsPage;