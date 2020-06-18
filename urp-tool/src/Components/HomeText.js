import React from "react";

const HomeText = () => {
  return (
    <div className='col-md-6'>
      <div style={{ marginTop: "20vh", marginLeft: "10vw" }}>
        <h1 style={{ color: "#222222" }} class='h1-responsive'>
          Title
        </h1>
        <h2 style={{ color: "#222222" }} class='h1-responsive'>
           Sub-Title
        </h2>
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
    </div>
  );
};

export default HomeText;