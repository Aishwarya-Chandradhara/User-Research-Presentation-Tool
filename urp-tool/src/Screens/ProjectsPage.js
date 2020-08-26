import React, { Component } from "react";
import { MDBTypography, MDBIcon, MDBNavLink,MDBSpinner  } from "mdbreact";
import ProjectsPageText from "../Components/ProjectsPageText";
import NewFooter from "../Components/NewFooter"
import ProjectsCard from "../Components/ProjectsCard"
import Spinner from "../Components/Spinner"
import {db } from "../firebase"

class ProjectsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    console.log("mounted");
    db.collection("projects")
      .get()
      .then((snapshot) => {
        var pro = [];
        snapshot.forEach((doc) => {
          let data = doc.data();
          pro.push(data);
        });
        this.setState({ projects: pro, loaded: true });
      })
      .catch((error) => console.log(error));
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
          {this.state.loaded
          ? <ProjectsCard projects={this.state.projects} />
          : <Spinner />}
          <br/>
          {/* <ProjectsCard projects={this.state.projects} /> */}
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