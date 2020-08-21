
import React from "react";
import { MDBAnimation } from "mdbreact";

const ProjectsIllustration = () => {
  return (
    <div className='col-md-6 col-xs-12 col-sm-12'>
      <MDBAnimation reveal type='bounceInLeft' duration='1s'>
        <img
          alt='Thesis'
          style={{
            width: "auto",
            height: "400px",
            marginTop: "20vh",
            marginLeft: "4vw"
          }}
          src={require("../Assets/ProjectsIllustration.png")}
        />
      </MDBAnimation>
    </div>
  );
};

export default ProjectsIllustration;