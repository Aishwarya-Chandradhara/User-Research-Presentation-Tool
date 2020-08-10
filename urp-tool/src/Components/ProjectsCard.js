import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBRow } from 'mdbreact';

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
            <MDBCol size="6" className="d-flex justify-content-around" style={{width: "22rem"}}>
              <MDBCard>
                <MDBCardImage
                  top
                  src={item.image}
                  overlay='white-slight'
                  hover
                  waves
                  alt='MDBCard image cap'
                />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                    {item.desc}
                  </MDBCardText>
                  <MDBBtn color="blue" href="#">User Research
          <MDBIcon icon='angle-right' className='ml-2' /> </MDBBtn>
                </MDBCardBody>
              </MDBCard>




            </MDBCol>
          );
        })}
      </MDBRow>
    )
  }
}
