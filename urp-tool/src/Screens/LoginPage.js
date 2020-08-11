import React, { Component } from "react";
import LoginPageIllustration from "../Components/LoginPageIllustration"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const LoginPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form>
                        <p className="h4 text-center mb-4">User Research Presentation Tool</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="black-text">
                            User Name or Email Address
            </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="black-text">
                            Password
            </label>
                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                        <div className="text-center mt-4">
                            <MDBBtn color="#0066FF" type="submit">Login</MDBBtn>

                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default LoginPage;