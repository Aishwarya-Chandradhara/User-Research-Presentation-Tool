import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBNavLink } from "mdbreact";
import Popup1 from "../Components/Popup1";
import SignupPageIllustration from "..//Components/SignupPageIllustration"
import '../App.css'

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };
  render() {
    return (
      <MDBContainer>
            <p className="h2 text-center mb-4 title">
                User Research Presentation Tool
              </p>
        <MDBRow className="center-align">
          <MDBCol md="4" className="signup-card">
            <form onSubmit={this.handleSubmit}>
              <p className="h6 text-center mb-4">
               Signup
              </p>
              <label htmlFor="defaultFormLoginEmailEx" className="black-text">
                Email Address
              </label>
              <div class="inner-addon left-addon">
                    <i class="fa fa-envelope"></i>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              </div>
              <br />
              <div className="text-center mt-4">
              <button
                  class="btn Ripple-paren t primary-button"
                  style={{ background: "#0066FF", color: "white" }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            {this.state.showPopup ? (
              <Popup1 closePopup={this.closePopup} />
            ) : null}

            <p className="forgot-password text-align right">
               Already registered <a href="/login">log in?</a>
                </p>
          </MDBCol>
          <SignupPageIllustration />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SignupPage;
