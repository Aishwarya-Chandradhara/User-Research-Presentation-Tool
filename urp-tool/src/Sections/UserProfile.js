import React, { Component } from "react";
import { MDBContainer, MDBBadge } from "mdbreact";
import { MDBProgress } from "mdbreact";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MDBContainer
          fluid
          className="no-padding"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            marginBottom: "20vh",
          }}
        >
          <section
            id="userresearch"
            className="row responsive-height background-1 no-margin"
          >
            <div
              className="col-md-4 col-xs-12, background-color= blue"
              style={{ border: "2px solid #0066FF" }}
            >
              <div
                style={{
                  marginTop: "20vh",
                  marginBottom: "10vh",
                }}
              >
                <img
                  alt="Thesis"
                  style={{
                    width: "auto",
                    height: "200px",
                    display: "block",
                    margin: "auto",
                  }}
                  src={require("../Assets/user1.png")}
                />
              </div>
              <div className="col-md-12 text-center">
                <div style={{ marginTop: "2vh" }}>
                  <p style={{ color: "#FFFFFF" }}>
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat"
                  </p>
                </div>
              </div>
              <MDBContainer>
                <div className="col-md-12 text-center">
                  <div style={{ marginTop: "2vh", color: "white" }}>
                    <p className="user-info text-left">
                      <span>Age</span>
                      <span>24</span>
                    </p>
                    <p className="user-info text-left">
                      <span>Job Title</span>
                      <span>Web Designer</span>
                    </p>
                    <p className="user-info text-left">
                      <span>Gender</span>
                      <span>Female</span>
                    </p>
                    <p className="user-info text-left">
                      <span>Location</span>
                      <span>Heidelberg, Germany</span>
                    </p>
                  </div>
                </div>
              </MDBContainer>
              <div className="badges-user">
                <MDBBadge
                  color="white"
                  className="black-text"
                  style={{ padding: "5px", width: "30%" }}
                >
                  Motivated
                </MDBBadge>
                <MDBBadge
                  color="white"
                  className="black-text"
                  style={{ padding: "5px", width: "30%" }}
                >
                  Passionate
                </MDBBadge>
              </div>
              <div className="badges-user">
                <MDBBadge
                  color="white"
                  className="black-text"
                  style={{ padding: "5px", width: "30%" }}
                >
                  Go Getter
                </MDBBadge>
                <MDBBadge
                  color="white"
                  className="black-text"
                  style={{ padding: "5px", width: "30%" }}
                >
                  Energetic
                </MDBBadge>
              </div>
            </div>

            <div
              className="col-md-8 col-xs-12"
              style={{
                border: "2px solid #0066FF",
                paddingTop: "64px",
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingBottom: "40px",
              }}
            >
              <div className="col-md-12">
                <div>
                  <h1 style={{ color: "#222222" }} class="h1-responsive ">
                    Alicia Schneider
                  </h1>
                </div>
                <div style={{ paddingTop: "50px" }}>
                  <h2 style={{ color: "#222222" }} class="h2-responsive">
                    About
                  </h2>
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <p style={{ color: "#222222", text: "justify" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore e
                  </p>
                </div>
              </div>
              <div
                className="row col-md-12 col-xs-12"
                style={{ paddingTop: "50px" }}
              >
                <div className="col-md-6 col-xs-12 no-padding">
                  <div>
                    <div>
                      <h2 style={{ color: "#222222" }} class="h2-responsive">
                        Goals
                      </h2>
                    </div>
                    <div>
                      <p style={{ color: "#222222", text: "justify" }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-12 no-padding">
                  <div>
                    <div>
                      <h2 style={{ color: "#222222" }} class="h2-responsive">
                        Needs
                      </h2>
                    </div>
                    <div>
                      <p style={{ color: "#222222", text: "justify" }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="row col-md-12 col-xs-12"
                style={{ paddingTop: "50px" }}
              >
                <div className="col-md-6 col-xs-12">
                  <div>
                    <div>
                      <h2 style={{ color: "#222222" }} class="h2-responsive">
                        Challenges
                      </h2>
                    </div>
                    <div>
                      <p style={{ color: "#222222", text: "justify" }}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xs-12">
                  <>
                    <div>
                      <h2 style={{ color: "#222222" }} class="h2-responsive">
                        Skills
                      </h2>
                      <p className="text-left">Design</p>
                      <MDBProgress
                        classname=""
                        material
                        value={70}
                        height="20px"
                        wrapperStyle={{
                          width: "200px",
                          backgroundColor: "#0066ff !important",
                        }}
                      />
                      <p className="text-left">Development</p>
                      <MDBProgress
                        classname=""
                        material
                        value={60}
                        height="20px"
                        wrapperStyle={{ width: "200px" }}
                      />
                      <p className="text-left">Testing</p>
                      <MDBProgress
                        classname=""
                        material
                        value={50}
                        height="20px"
                        wrapperStyle={{ width: "200px" }}
                      />
                    </div>
                  </>
                </div>
              </div>
            </div>
          </section>
        </MDBContainer>
      </div>
    );
  }
}

export default UserProfile;
