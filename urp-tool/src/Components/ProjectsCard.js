import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const ProjectsCard = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="../Assets/Group icon.png" waves />
        <MDBCardBody>
          <MDBCardTitle>Project Description</MDBCardTitle>
          <MDBCardText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. 
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default ProjectsCard;