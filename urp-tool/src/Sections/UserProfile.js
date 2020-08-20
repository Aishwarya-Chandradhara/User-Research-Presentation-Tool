import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import UserProfileComment from "../Components/UserProfileComment";
import Buttons from "../Components/Buttons"
import UserImage from "../Components/UserImage"
import UserInfo from "../Components/UserInfo"
import AboutUser from "../Components/AboutUser"
import GoalsUser from "../Components/GoalsUser"
import NeedsUser from "../Components/NeedsUser"
import ChallengesUser from "../Components/ChallengesUser";
import UserProgressBar from "../Components/UserProgressBar"

class UserProfile extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    } 
  render() {
    return (
      <div>
        <MDBContainer fluid className='no-padding'>
          <section 
            id='userresearch'
            className='row responsive-height background-1 no-margin'
          >

          <div className="col-md-4 col-xs-12">
            <UserImage />
            <UserProfileComment />
            <UserInfo />
            <Buttons />
          </div>

          <div className="col-md-8 col-xs-12">
          <AboutUser />
          <div className="row col-md-12 col-xs-12">
              <div className="col-md-6 col-xs-12">
                <GoalsUser />s
              </div>

              <div className="col-md-6 col-xs-12">
                <NeedsUser />
              </div>
          </div>
           
          <div className="row col-md-12 col-xs-12">
              <div className="col-md-6 col-xs-12">
                <ChallengesUser />
              </div>

              <div className="col-md-4 col-xs-12">
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