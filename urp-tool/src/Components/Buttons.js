import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const Button = () => {
  return (
    <Fragment>
      <MDBBtn outline color="primary">Energetic</MDBBtn>
      <MDBBtn outline color="primary">Passionate</MDBBtn>
      <MDBBtn outline color="primary">Team Player</MDBBtn>
      <MDBBtn outline color="primary">Motivated</MDBBtn>
    </Fragment>
  );
}

export default Button;