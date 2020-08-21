import React from "react";
const AboutUser = () => {
  return (
    <div className="col-md-12" >
      <div>
        <h1 style={{ color: "#222222" }} class="h1-responsive ">
          Alicia Schneider
        </h1>
      </div>
      <div style={{paddingTop: "50px"}}>
        <h2 style={{ color: "#222222" }} class="h2-responsive">
          About
        </h2>
      </div>
      <div style={{paddingTop: "10px"}}>
        <p style={{ color: "#222222", text: "justify" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e
        </p>
      </div>
    </div>
  );
};

export default AboutUser;
