import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SignupPageIllustration from "..//Components/SignupPageIllustration";
import "../App.css";
import { auth } from "../firebase_";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password1 : "",
      password2 : "",
      alert : false,
      errorMsg : null
    };
  }

  handleChange = (event) =>{
    this.setState({errorMsg: null})
    if (event.target.id !== "email"){
      if(document.getElementById("password1").value !== document.getElementById("password2").value)
      {
        this.setState({alert : true})
      }
      else this.setState({alert : false})
    }
    this.setState({[event.target.id] : event.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await auth.createUserWithEmailAndPassword(this.state.email, this.state.password1)
    .then(() => this.props.history.push('/adminpage'))
    .catch((error) => {
     this.setState({errorMsg: error.message})
    });
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
              <p className="h4 text-center mb-4">Signup</p>
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
                  id="email"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
                <br />
                <label>Password</label>
                <div class="inner-addon left-addon">
                  <i class="fa fa-lock"></i>
                  <input type="password" id="password1" class="form-control" required onChange={this.handleChange} />
                </div>
              </div>
              <br />
              <label>Confirm Password</label>
              <div class="inner-addon left-addon">
                <i class="fa fa-lock"></i>
                <input type="password" id="password2" class="form-control" required onChange={this.handleChange} />
              </div>
              {this.state.errorMsg ? <p className="center-align red-text">{this.state.errorMsg}</p> : null}
              {this.state.alert ?
              <div>
              <p className="center-align red-text" >The passwords does not match</p>
              <div className="text-center mt-4">
                <button
                  class="btn Ripple-paren t primary-button"
                  style={{ background: "#0066FF", color: "white" }}
                  type="submit"
                  disabled
                >
                  Submit
                </button>
              </div>
              </div>
              : <div className="text-center mt-4">
                <button
                  class="btn Ripple-paren t primary-button"
                  style={{ background: "#0066FF", color: "white" }}
                  type="submit"
                >
                  Submit
                </button>
              </div>}
            </form>
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
