import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "../Components/Navbar";
import HomeText from "../Components/HomeText"
import HomeIllustration from "../Components/HomeIllustration";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer fluid className='no-padding'>
          <section
            id='home'
            className='row col-md-12 col-xs-12 responsive-height background-1 no-margin justify-content'
          >
          <HomeText />
          <HomeIllustration />
          </section>
        </MDBContainer>
      </div>
    );
  }
}