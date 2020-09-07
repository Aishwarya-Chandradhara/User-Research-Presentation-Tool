import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import PopUp2 from "../Components/PopUp2";
import ForgotPasswordIllustration from "../Components/ForgotPasswordIllustration"
import '../App.css'

class ForgotPassword extends Component {
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
          <MDBCol md="4" className="forgotpassword-card">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-left mb-4">
                Forgot Password?
              </p>
              <p className="h6 text-left mb-4">
              Enter your email address and submit to receive an email
              with instructions to reset your password.
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
                   class="btn Ripple-parent primary-button"
                  style={{ background: "#0066FF", color: "white" }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            {this.state.showPopup ? (
              <PopUp2 closePopup={this.closePopup} />
            ) : null}
          </MDBCol>
          <ForgotPasswordIllustration />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ForgotPassword;
