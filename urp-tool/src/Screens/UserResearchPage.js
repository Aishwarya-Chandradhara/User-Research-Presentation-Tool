import React, { Component } from "react";
import UserResearchPageText from "../Components/UserResearchPageText";
import NewFooter from "../Components/NewFooter";
import { MDBTypography, MDBNavLink, MDBIcon } from "mdbreact";
import UserProfile from "../Sections/UserProfile";
import { db, auth } from "../firebase_";
import homeicon from "../Assets/Home.svg";
import { Redirect } from "react-router-dom";

class UserResearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.setState({ redirect: true });
  };

  componentDidMount (){
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
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
    console.log("reseachstate", this.state.researches)
    if (this.state.redirect) {
      if (this.state.loggedIn) {
        return <Redirect to="/adminpage" />;
      } else return <Redirect to="/" />;
    }
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
          <div className="background-class">
            <div className="sticky">
              <img onClick={() => this.handleClick()} src={homeicon} />
            </div>
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
        </div>
      </section>
      
    );
  }
  }


export default UserResearchPage;
