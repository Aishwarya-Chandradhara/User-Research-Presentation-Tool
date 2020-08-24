import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const NewFooter = () => {
  return (
    <MDBFooter className="footer-color">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: URP Tool. All rights reserved
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default NewFooter;