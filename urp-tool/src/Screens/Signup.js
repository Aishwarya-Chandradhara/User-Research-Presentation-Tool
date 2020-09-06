import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import PopUp1 from "../Components/PopUp1";
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
            <p className="h1 text-center mb-4 title">
                User Research Presentation Tool
              </p>
        <MDBRow className="center-align">
          <MDBCol md="4" className="signup-card">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-center mb-4">
               Signup
              </p>
              <p className="h6 text-left mb-4">
              Enter your email address and set a password.
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
              <br />
              <label>Password</label>
                <div class="inner-addon left-addon">
                    <input type="password" class="form-control" />
                </div>
              </div>
              <br />
              <label>Confirm Password</label>
                <div class="inner-addon left-addon">
                    <input type="password" class="form-control" />
                </div>
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
              <PopUp1 closePopup={this.closePopup} />
            ) : null}

            <p className="forgot-password text-align right">
               Already registered? <a href="/login">Login</a>
                </p>
          </MDBCol>
          <SignupPageIllustration />
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default SignupPage;
