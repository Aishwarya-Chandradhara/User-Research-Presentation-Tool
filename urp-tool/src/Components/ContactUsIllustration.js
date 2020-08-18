import React from "react";
import { MDBAnimation } from "mdbreact";

const ContactUsIllustration = () => {
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
        src={require("../Assets/ContactusIllustration.png")}
      />
      </MDBAnimation>
    </div>
  );
};

export default ContactUsIllustration;