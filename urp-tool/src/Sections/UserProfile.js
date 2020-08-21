import React, { Component } from "react";
import { MDBContainer, MDBBadge } from "mdbreact";
import UserProfileComment from "../Components/UserProfileComment";
import UserImage from "../Components/UserImage";
import UserInfo from "../Components/UserInfo";
import AboutUser from "../Components/AboutUser";
import GoalsUser from "../Components/GoalsUser";
import NeedsUser from "../Components/NeedsUser";
import ChallengesUser from "../Components/ChallengesUser";
import UserProgressBar from "../Components/UserProgressBar";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MDBContainer fluid className="no-padding" style={{display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          marginBottom: "20vh"}}>
          <section
            id="userresearch"
            className="row responsive-height background-1 no-margin"
          >
            <div
              className="col-md-4 col-xs-12, background-color= blue"
              style={{ border: "2px solid #0066FF" }}
            >
              <UserImage />
              <UserProfileComment />
              <UserInfo />
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
              style={{ border: "2px solid #0066FF", paddingTop: "64px", paddingLeft: "50px" , paddingRight: "50px", paddingBottom: "40px" }}
            >
              <AboutUser />
              <div className="row col-md-12 col-xs-12" style={{paddingTop: "50px"}}>
                <div className="col-md-6 col-xs-12 no-padding">
                  <GoalsUser />
                </div>

                <div className="col-md-6 col-xs-12 no-padding">
                  <NeedsUser />
                </div>
              </div>

              <div className="row col-md-12 col-xs-12" style={{paddingTop: "50px"}}>
                <div className="col-md-6 col-xs-12">
                  <ChallengesUser />
                </div>

                <div className="col-md-6 col-xs-12">
                  <UserProgressBar />
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
