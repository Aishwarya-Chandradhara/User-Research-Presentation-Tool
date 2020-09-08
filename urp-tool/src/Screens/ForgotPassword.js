import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { Redirect } from "react-router-dom";
import PopUp2 from "../Components/PopUp2";
import ForgotPasswordIllustration from "../Components/ForgotPasswordIllustration"
import '../App.css'
import { auth } from "../firebase_";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }

  closePopup = () => {
    this.setState({ showPopup: false, redirect: true });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    auth.sendPasswordResetEmail(this.state.email)
    .then(() => {
    this.setState({ showPopup: true })
    }).catch((error) => {
    this.setState({ errorMsg: error.message })
    });
  };
  handleChange = (event) => {
    this.setState({[event.target.id] : event.target.value})
  }
  render() {
    if(this.state.redirect){
      return <Redirect to="/login" />
    }
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
                id="email"
                className="form-control"
                onChange={this.handleChange}
                required
              />
              </div>
              <p className="forgot-password text-right">
              <a href="/login">Return to Login</a>
              </p>
              {this.state.errorMsg ? <p className="center-align red-text">{this.state.errorMsg}</p> : null}
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
