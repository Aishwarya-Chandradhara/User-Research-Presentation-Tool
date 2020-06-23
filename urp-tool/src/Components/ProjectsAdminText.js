import React from "react";
import { MDBSmoothScroll } from "mdbreact";

const ProjectsAdminText = () => {
  return (
    <div className='col-md-6'>
      <div style={{ marginTop: "20vh", marginLeft: "10vw" }}>
        <h1 style={{ color: "#222222" }} class='h1-responsive'>
          Projects
        </h1>
      </div>
      <div style={{ marginLeft: "10vw" }}>
        <p style={{ color: "#222222" }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e
        </p>
      </div>

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
        <MDBSmoothScroll to='projects'>Checkout our Projects</MDBSmoothScroll>
      </button>

     
      <button
        type='button'
        style={{
          color: "#FFFFFF",
          backgroundColor: "#0066FF",
          marginLeft: "30vw",
          padding: "8px",
          borderRadius: "25px",
          border: "none"
        }}
      >
        <MDBSmoothScroll to='projectsadmin'>Add more Projects</MDBSmoothScroll>
      </button>
    </div>
  );
};

export default ProjectsAdminText;