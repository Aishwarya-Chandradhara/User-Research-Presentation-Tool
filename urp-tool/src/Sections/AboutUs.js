import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Navbar from "../Components/Navbar";
import AboutUsText from "../Components/AboutUsText"
import AboutUsIllustration from "../Components/AboutUsIllustration";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer fluid className='no-padding'>
          <section
            id='aboutus'
            className='row col-md-12 col-xs-12 responsive-height background-1 no-margin justify-content-end'
          >
          
          <AboutUsIllustration />
          <AboutUsText />
          </section>
        </MDBContainer>
      </div>
      
    );
  }
}