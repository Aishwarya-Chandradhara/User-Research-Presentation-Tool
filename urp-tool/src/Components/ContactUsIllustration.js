import React from "react";

const ContactUsIllustration = () => {
  return (
    <div className='col-md-6 col-xs-12 col-sm-12'>
      <img
        alt='Thesis'
        style={{
          width: "auto",
          height: "400px",
          marginTop: "20vh",
          marginLeft: "4vw"
        }}
        src={require("../Assets/ContactusIllustration.png")}
      />
    </div>
  );
};

export default ContactUsIllustration;