import React, { Component } from "react";
import { MDBTypography, MDBContainer} from "mdbreact";
import ContactUsForm from "../Components/ContactUsForm";
import ContactUsIllustration from "../Components/ContactUsIllustration";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section 
      id='contactus' 
      className='background-5'>
        <MDBContainer fluid>
            <MDBTypography
              tag='h1'
              variant='h1-responsive'
              className='text-center font_bold font_size_title'
              style={{ paddingTop: "8vh", color: "#222222" }}
            >
              Contact Us
            </MDBTypography>
            <div className='row col-md-12' style={{ margin: "0" }}>
            <ContactUsIllustration />
              <ContactUsForm />
            </div>
        </MDBContainer>
      </section>
    );
  }
}

export default ContactUs;