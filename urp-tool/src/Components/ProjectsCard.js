import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';

  export default class ProjectsCard extends Component{
    constructor(props) {
      super(props);
      this.state = {

      }}
   render()
  { 

  return (
  
    <MDBCol>
    {this.props.projects && this.props.projects.map((item)=> {
      {console.log("item", item)}
      return(
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
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText>
           {item.descf}
          </MDBCardText>
          <MDBBtn color="blue" href="#">User Research
          <MDBIcon icon='angle-right' className='ml-2' /> </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      );

    })}
      
    </MDBCol>
  )
}
  }
