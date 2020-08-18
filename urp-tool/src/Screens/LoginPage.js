import React, { Component } from "react";
import LoginPageIllustration from "../Components/LoginPageIllustration";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../App.css'

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <MDBContainer>
            <p className="h2 text-center mb-4 title">
                User Research Presentation Tool
              </p>
              
        <MDBRow className="center-align">
          <MDBCol md="4" className="login-card">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-center mb-4">
              Login
              </p>
              <div class = "input-icons">
                <label>Username or Email address</label>
                <div class="inner-addon left-addon">
                    <i class="fa fa-user"></i>
                    <input type="text" class="form-control" />
                </div>
                <br />
                <label>Password</label>
                <div class="inner-addon left-addon">
                    <i class="fa fa-lock"></i>
                    <input type="password" class="form-control" />
                </div>
              </div>
            <p className="forgot-password text-right">
              <a href="/forgotpassword">Forgot Password?</a>
            </p>
             
                <button
                  class="btn Ripple-paren t primary-button"
                  style={{ background: "#0066FF", color: "white" }}
                  type="submit"
                >
                  Login
                </button>
              
            </form>
            <p className="forgot-password text-right">
                     <a href="/signup">Register as a new user</a>
                    </p>
          </MDBCol>
          <LoginPageIllustration />
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginPage;
