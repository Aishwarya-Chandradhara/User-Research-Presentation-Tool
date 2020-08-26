import React from "react";

const AboutUsText = () => {
  return (
    <div className='col-md-6 '>
      <div style={{ marginTop: "20vh", marginLeft: "10vw"}}>
        <h1 style={{ color: "#222222" }} class='h1-responsive'>
          About Us
        </h1>
      </div>
      <div>
        <p style={{ color: "#222222" }}>
        With the growing need for designers to showcase their User Research and the 
        advance in technology, we believe that the development of an online application 
        to present researches is beneficial. We encourage clients and fellow colleagues 
        to understand the importance of user research. 
        <br />
        </p>
        <p style={{ color: "#222222" }}>
        We understand the need for attractive user research presentations and would like
        our clients to understand its importance too. 
        We dexter impressive ways to present solutions with great user experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUsText;