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
        <p style={{ color: "#222222" }}>
        We engage ourselves with multiple projects for various companies, creating 
        and designing interesting applications that suit their intersets by conducting 
        user research to gather requirements. From Mobile to Online Applications all 
        designed and developed based on user intersets. 
        </p>
        <p style={{ color: "#222222" }}>
        Take a look at some of the companies we were involved with to create projects.<br/>
        You can also add new projects with companies.
        </p>
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