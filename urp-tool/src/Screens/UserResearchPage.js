import React, { Component } from "react";
import UserResearchPageText from "../Components/UserResearchPageText";
import NewFooter from "../Components/NewFooter";
import { MDBTypography, MDBNavLink, MDBIcon } from "mdbreact";
import UserProfile from "../Sections/UserProfile";

class UserResearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <div>
          <UserResearchPageText />
          <UserProfile />

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
              <MDBIcon icon="angle-left" className="ml-2" />
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
