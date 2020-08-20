import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBRow,MDBNavLink } from 'mdbreact';
import '../App.css'


export default class ProjectsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
      <MDBRow>
        {this.props.projects && this.props.projects.map((item) => {
          { console.log("item", item) }
          return (
            <MDBCol >
              <MDBCard className="project_card">
                <MDBCardImage
                  top
                  src={item.image}
                  overlay='white-slight'
                  hover
                  waves
                  alt='MDBCard image cap'
                />
                <MDBCardBody className="card-top-border">
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                    {item.desc}
                  </MDBCardText>
                  <MDBBtn color="blue" href="#">User Research
          <MDBIcon icon='angle-right' className='ml-2' /> 
          <MDBNavLink
              style={{
                color: "#FFFFFF"
              }}
              exact
              to='/userresearch'
            >

            </MDBNavLink>
          </MDBBtn>
                </MDBCardBody>
              </MDBCard>




            </MDBCol>
          );
        })}
      </MDBRow>
    )
  }
}
