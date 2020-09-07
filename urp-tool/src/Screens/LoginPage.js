import React, { Component } from "react";
import LoginPageIllustration from "../Components/LoginPageIllustration";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../App.css";
import { auth } from "../firebase_";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.history.push("/adminpage"))
      .catch((error) => {
    this.setState({ errorMsg: error.message })
      });
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <MDBContainer>
        <p className="h1 text-center mb-4 title">
          User Research Presentation Tool
        </p>

        <MDBRow className="center-align">
          <MDBCol md="4" className="login-card">
            <form onSubmit={this.handleSubmit}>
              <p className="h4 text-center mb-4">Login</p>
              <div class="input-icons">
                <label>Email address</label>
                <div class="inner-addon left-addon">
                  <i class="fa fa-user"></i>
                  <input
                    type="text"
                    class="form-control"
                    required
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <label>Password</label>
                <div class="inner-addon left-addon">
                  <i class="fa fa-lock"></i>
                  <input
                    type="password"
                    class="form-control"
                    required
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <p className="forgot-password text-right">
                <a href="/forgotpassword">Forgot Password?</a>
              </p>
              {this.state.errorMsg ? <p className="center-align red-text">{this.state.errorMsg}</p> : null}
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
