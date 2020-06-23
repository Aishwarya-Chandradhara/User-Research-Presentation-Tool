import React from "react";
import { MDBAnimation } from "mdbreact";

const ContactUsIllustration = () => {
  return (
    <div className='col-md-6 col-xs-12 col-sm-12'>
    <MDBAnimation reveal type='bounceInLeft' duration='1s'>
      <img
        alt='Start-up'
        style={{
          width: "100%",
          height: "400px",
          marginTop: "20vh",
          marginLeft: "4vw"
        }}
        src={require("../Assets/Group 47.png")}
      />
      </MDBAnimation>
    </div>
  );
};

export default ContactUsIllustration;