import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';

const ProjectsCard = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
      <MDBCardImage
            top
          src={require("../Assets/Group 59.png")}
    
            overlay='white-slight'
            hover
            waves
            alt='MDBCard image cap'
          />
        <MDBCardBody>
          <MDBCardTitle>Project Description</MDBCardTitle>
          <MDBCardText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. 
          </MDBCardText>
          <MDBBtn color="blue" href="#">User Research
          <MDBIcon icon='angle-right' className='ml-2' /> </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default ProjectsCard;