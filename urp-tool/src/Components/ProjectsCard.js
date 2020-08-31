import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon, MDBRow,MDBNavLink } from 'mdbreact';
import '../App.css';
import BackgroundImage from "../Assets/ProjectsPageBackground.png"

export default class ProjectsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {

    return (
     
      <MDBRow style={{margin: "auto 10%"}}>
       <div className="background-class">
        {/* <img src={BackgroundImage} style={{    position: "absolute", left: "0", width: "auto"}}/> */}
       </div>
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
                  <MDBNavLink
                      style={{color: "#FFFFFF"}}
                      exact
                      to={'/userresearch/'+[item.title]}
                    >
                    <button className="btn-project">User Research
                    <i class="fas fa-angle-right ml-2"></i>
                    </button>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
              </MDBRow>
    )
  }
}
