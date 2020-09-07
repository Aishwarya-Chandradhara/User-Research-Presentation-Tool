import React from "react";
import { MDBNavLink } from "mdbreact";

const ProjectsAdminText = () => {
  return (
    <div className="col-md-6">
      <div style={{ marginTop: "20vh", marginLeft: "10vw" }}>
        <h1 style={{ color: "#222222" }} class="h1-responsive">
          Projects
        </h1>
      </div>
      <div style={{ marginLeft: "10vw" }}>
        <p style={{ color: "#222222" }}>
          <p style={{ color: "#222222" }}>
            We engage ourselves with multiple projects for various companies,
            creating and designing interesting applications that suit their
            intersets by conducting user research to gather requirements. From
            Mobile to Online Applications all designed and developed based on
            user intersets.
          </p>
          <p style={{ color: "#222222" }}>
            Here are some of the companies we are involved with to create
            projects. You can also add new projects with companies.
          </p>
        </p>
      </div>

      <div>
        <button
          type="button"
          style={{
            color: "#FFFFFF",
            backgroundColor: "#0066FF",
            marginLeft: "10vw",
            padding: "8px",
            borderRadius: "25px",
            border: "none",
          }}
        >
          <MDBNavLink
            style={{
              color: "#FFFFFF",
            }}
            exact
            to="/projects"
          >
            Checkout our Projects
          </MDBNavLink>
        </button>

        <button
          type="button"
          style={{
            color: "#FFFFFF",
            backgroundColor: "#0066FF",
            marginLeft: "30vw",
            padding: "8px",
            borderRadius: "25px",
            border: "none",
          }}
        >
          <MDBNavLink
            style={{
              color: "#FFFFFF",
            }}
            exact
            to="/addprojects"
          >
            Add more Projects
          </MDBNavLink>
          {/* <MDBNavLink
            style={{
              color: "#FFFFFF",
            }}
            exact
            to="/adduserresearch"
          >
            Add more user research
          </MDBNavLink> */}
        </button>
      </div>
    </div>
  );
};

export default ProjectsAdminText;
