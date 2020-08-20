import React from "react";
import { MDBContainer } from "mdbreact";

const UserInfo = () => {
  return (
    <MDBContainer>
      <div className="col-md-12 text-center">
        <div style={{ marginTop: "2vh" }}>
        <p className="user-info text-left"><span>Age</span><span>24</span></p>
        <p className="user-info text-left"><span>Job Title</span><span>Web Designer</span></p>
        <p className="user-info text-left"><span>Gender</span><span>Female</span></p>
        <p className="user-info text-left"><span>Location</span><span>Heidelberg, Germany</span></p>
        </div>
      </div>
    </MDBContainer>
  );
};

export default UserInfo;
