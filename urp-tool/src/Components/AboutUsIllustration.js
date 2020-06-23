import React from "react";
import { MDBAnimation } from "mdbreact";

const AboutUsIllustration = () => {
  return (
    <div className='col-md-6 col-xs-12 col-sm-12'>
      <MDBAnimation reveal type='bounceInLeft' duration='1s'>
        <img
          alt='Thesis'
          style={{
            width: "100%",
            height: "400px",
            marginTop: "20vh",
            marginLeft: "4vw"
          }}
          src={require("../Assets/Group 44.png")}
        />
      </MDBAnimation>
    </div>
  );
};

export default AboutUsIllustration;