import React, { Component } from "react";
import UserResearchPageText from "../Components/UserResearchPageText";
import NewFooter from "../Components/NewFooter";
import { MDBTypography, MDBNavLink, MDBIcon } from "mdbreact";
import UserProfile from "../Sections/UserProfile";
import {db } from "../firebase"

class UserResearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount (){
    db.collection("userprofile")
      .get()
      .then((snapshot) => {
        var pro = [];
        snapshot.forEach((doc) => {
          let data = doc.data();
          pro.push(data);
        });
      this.setState({ researches: pro, loaded: true });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <section>
        <MDBTypography
          tag="h3"
          variant="h3-responsive"
          className="text-left font_bold font_size_title"
          style={{ paddingTop: "8vh", marginLeft: "4vw", color: "#222222" }}
        >
          User Research
        </MDBTypography>
        <div className= "background1-class">
          <UserResearchPageText  />
          {this.state.loaded ? <UserProfile project={this.props.match.params.name} researches={this.state.researches}/> : null}

          <button
            type="button"
            style={{
              color: "#FFFFFF",
              backgroundColor: "#0066FF",
              marginLeft: "10vw",
              padding: "8px",
              borderRadius: "25px",
              border: "none",
            }}
          >
            <MDBNavLink
              style={{
                color: "#FFFFFF",
              }}
              exact
              to="/projects" >
              {" "}
              <MDBIcon icon="angle-left" className="mr-2" />
              Back to Projects
            </MDBNavLink>
          </button>
          <NewFooter />
        </div>
      </section>
    );
  }
}

export default UserResearchPage;
