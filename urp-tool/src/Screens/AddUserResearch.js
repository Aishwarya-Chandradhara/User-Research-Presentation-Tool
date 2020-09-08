import React, { Component } from "react";
import {
  MDBTypography,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRangeInput,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import FileUpload from "../Components/FileUpload";
import PopUp4 from "../Components/PopUp4";
import AddUserResearchText from "../Components/AddUserResearchText";
import NewFooter from "../Components/NewFooter";
import { Redirect } from "react-router-dom";
import {db, auth, storage} from "../firebase_";
import homeicon from "../Assets/Home.svg";

class AddProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      skills : []
    };
  }

  handleClick = () => {
    this.setState({ redirect: true });
  };
  closePopup = () => {
    this.setState({ showPopup: false });
    window.location.reload()
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };

  componentDidMount() { 
    this.isLoggedIn()
  }
 
   isLoggedIn = async () => {
    await auth.onAuthStateChanged((user) => {
         console.log("test", user)
         if (user) {
           this.setState({isLoggedIn: true})
           db.collection("projects")
          .get()
          .then((snapshot) => {
            var pro = [];
            snapshot.forEach((doc) => {
              let data = doc.data();
              pro.push(data.title);
            });
            this.setState({ projects: pro, loaded: true });
          })
          .catch((error) => console.log(error));
         } else {
           this.setState({redirect : true})
         }
     });
   }
  handleSliderChangeDesign = (val) => {
    this.setState({
      sliderDesign: val
    })
  }
  handleSliderChangeDevelopment = (val) => {
    this.setState({
      sliderDev: val
    })
  }
  
  handleSliderChangeTesting = (val) => {
    this.setState({
      sliderTest: val
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleCheckBox = (event) =>{
    let skill = event.target.id;
    let arr = this.state.skills;
    if(!arr.includes(event.target.id)){
      arr.push(event.target.id);
    }
    else{
      arr = arr.filter(item => item !== skill)
    }
    this.setState({skills: arr})
  }
  handleImage = (image) => {
    const uploadTask = storage.ref(`userImage/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error)
      },
      () => {
        storage
        .ref("userImage")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          this.setState({image: url})
        })
      }
    )
  }
  submitForm = (event) => {
    event.preventDefault();
    db.collection("userprofile")
    .add(this.state)
    .then(this.setState({showPopup : true}))
    .catch((error) => alert(error));
    console.log(this.state)
  };


  render() {
    if (this.state.redirect) {
      if (this.state.loggedIn) {
        return <Redirect to="/adminpage" />;
      } else return <Redirect to="/" />;
    }
    return (
      <section className="background-4">
        <MDBTypography
          tag="h3"
          variant="h3-responsive"
          className="text-left font_bold font_size_title"
          style={{ paddingTop: "8vh", marginLeft: "4vw", color: "#222222" }}
        >
          Add New User Researches
        </MDBTypography>
        <div className= "col-md-12 adduserresearch-main">
          <AddUserResearchText />
          <div>
          <div className="sticky">
              <img onClick={() => this.handleClick()} src={homeicon} />
            </div>
            <MDBContainer>
              <MDBRow className="center-align">
                <MDBCol
                  className="center-align add-project-card col-md-9"
                  style={{ border: "1px solid blue", marginBottom: "20vh" }}
                  
                >
                  <form onSubmit={this.submitForm}
                  >
                    <p
                      className="h5 text-center mb-4 font_bold"
                      style={{ color: "#222222", paddingTop: "8vh" }}
                    >
                      Add New User Research
                    </p>
                    <div className="row col-md-12">
                      <div className="col-md-3">
                        <label
                          htmlFor="name"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          onChange={this.handleChange}
                          className="form-control"
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                      <div className="col-md-3">
                        <label
                          htmlFor="gender"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Gender
                        </label>
                        <br />
                        <select
                          name="gender"
                          id="gender"
                          required
                          className="custom-dropdown"
                          onChange={this.handleChange}
                          value={this.state.selectedValue}
                        >
                          <option value="" selected disabled hidden>Select a value</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <br/>
                      <div className="col-md-3">
                        <label
                          htmlFor="jobtitle"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Job Title
                        </label>
                        <br />
                        <select
                          name="jobtitle"
                          id="jobtitle"
                          required
                          onChange={this.handleChange}
                          className="custom-dropdown"
                          onChange={this.handleChange}
                          value={this.state.selectedValue}
                        >
                          <option value="" selected disabled hidden>Select a value</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="Web Designer">Web Designer</option>
                          <option value="Developer">Developer</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <label
                          htmlFor="jobtitle"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Projects
                        </label>
                        <br />
                        <select
                          name="project"
                          id="project"
                          onChange={this.handleChange}
                          className="custom-dropdown"
                          onChange={this.handleChange}
                          value={this.state.selectedValue}
                        >
                          <option value="" selected disabled hidden>Select a value</option>
                          {this.state.loaded
                          ? this.state.projects.map((project) => {
                          return (
                            (
                              <option value={project}>
                                {project}
                              </option>
                            )
                          );
                        })
                          : null}
                        </select>
                        </div>
                            
                    </div>
                    <br />
                    <div className="row col-md-12">
                    <div className="col-md-4">
                        <label
                          htmlFor="age"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Age
                        </label>
                        <input
                          type="number"
                          name="age"
                          id="age"
                          onChange={this.handleChange}
                          className="form-control"
                          onChange={this.handleChange}
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                      <br />
                      <div className="col-md-4">
                        <label
                          htmlFor="location"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          id="location"
                          onChange={this.handleChange}
                          className="form-control"
                          onChange={this.handleChange}
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                      <br />
                      <div className="col-md-4">
                        <label
                          htmlFor="uploadimage"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Upload Image
                        </label>
                        <FileUpload handleImageInChild={this.handleImage} />
                      </div>
                    </div>
                    <br />

                    <div className="row col-md-12">
                      <div className="col-md-6">
                        <label
                          htmlFor="about"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          About
                        </label>
                        <textarea
                          type="text"
                          name="about"
                          id="about"
                          onChange={this.handleChange}
                          className="form-control"
                          rows="3"
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                      <br />
                      <div className="col-md-6">
                        <label
                          htmlFor="goals"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Goals
                        </label>
                        <textarea
                          type="text"
                          name="goals"
                          id="goals"
                          onChange={this.handleChange}
                          className="form-control"
                          rows="3"
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row col-md-12">
                      <div className="col-md-6">
                        <label
                          htmlFor="needs"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Needs
                        </label>

                        <textarea
                          type="text"
                          name="needs"
                          id="needs"
                          onChange={this.handleChange}
                          className="form-control"
                          rows="3"
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                      <br />
                      <div className="col-md-6">
                        <label
                          htmlFor="defaultFormChallenges"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Challenges
                        </label>
                        <textarea
                          type="text"
                          name="challenges"
                          id="challenges"
                          onChange={this.handleChange}
                          className="form-control"
                          rows="3"
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                    </div>
                    <br />

                    <div className="col-md-6">
                      <label
                        htmlFor="message"
                        style={{ color: "#222222" }}
                        className="font_medium"
                      >
                        Message
                      </label>
                      <textarea
                        type="text"
                        onChange={this.handleChange}
                        name="message"
                        id="message"
                        onChange={this.handleChange}
                        className="form-control"
                        rows="3"
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #222222",
                          color: "black",
                        }}
                        required
                      />
                    </div>
                    <br />
                    <div className="row col-md-12">
                      <div className="col-md-5">
                        <h6>Skills</h6>
                        <label
                          htmlFor="design"
                          style={{ color: "#222222", marginTop: "20px" }}
                          className="font_medium"
                        >
                          Design
                        </label>
                        <MDBRangeInput
                          id="design"
                          min={0}
                          max={100}
                          value={0}
                          step={33.33}
                          getValue={this.handleSliderChangeDesign}
                        />
                        <div className="my-5">
                          <label
                            htmlFor="development"
                            style={{ color: "#222222" }}
                            className="font_medium"
                          >
                            Development
                          </label>
                          <MDBRangeInput
                            id="development"
                            min={0}
                            max={100}
                            value={0}
                            step={33.33}
                          getValue={this.handleSliderChangeDevelopment}
                          />
                        </div>
                        <div className="my-5">
                          <label
                            htmlFor="testing"
                            style={{ color: "#222222" }}
                            className="font_medium"
                          >
                            Testing
                          </label>
                          <MDBRangeInput
                            id="testing"
                            min={0}
                            max={100}
                            value={0}
                            step={33.33}
                          getValue={this.handleSliderChangeTesting}
                          />
                        </div>
                      </div>
                      <div className="row col-md-7" >
                        <h6>Personality</h6>
                        <div className="row col-md-12" style={{display: "flex", flexWrap: "wrap", marginBottom: "25px", paddingRight: "0px"}}>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Enthusiastic"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Enthusiastic"
                            >
                              Enthusiastic
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Go Getter"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Go Getter"
                            >
                              Go Getter
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Affable"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Affable"
                            >
                              Affable
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Sociable"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Sociable"
                            >
                              Sociable
                            </label>
                          </div>
                        </div>
                        <div className="row col-md-12" style={{display: "flex", flexWrap: "wrap", marginBottom: "25px", paddingRight: "0px"}}>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Maverick"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Maverick"
                            >
                              Maverick
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%"}}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Elevated"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Elevated"
                            >
                              Elevated
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Friendly"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Friendly"
                            >
                              Friendly
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex:" 1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Thoughtful"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Thoughtful"
                            >
                              Thoughtful
                            </label>
                          </div>
                        </div>
                        <div className="row col-md-12" style={{display: "flex", flexWrap: "wrap", marginBottom: "25px",  paddingRight: "0px"}}>
                          <div class="custom-control custom-checkbox" style={{flex:" 1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="TeamPlayer"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="TeamPlayer"
                            >
                              Team Player
                            </label>
                          </div>
                          <div class=" custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Attentive"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Attentive"
                            >
                              Attentive
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Organized"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Organized"
                            >
                              Organized
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Passionate"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Passionate"
                            >
                              Passionate
                            </label>
                          </div>
                        </div>
                        <div className="row col-md-12" style={{display: "flex", flexWrap: "wrap", marginBottom: "25px",  paddingRight: "0px"}}>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Dependable"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Dependable"
                            >
                              Dependable
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Motivated"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Motivated"
                            >
                              Motivated
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Creative"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Creative"
                            >
                              Creative
                            </label>
                          </div>
                          <div class="custom-control custom-checkbox" style={{flex: "1 0 21%" }}>
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="Proactive"
                              onChange={this.handleCheckBox}
                            />
                            <label
                              class="custom-control-label custom-skill"
                              for="Proactive"
                            >
                              Proactive
                            </label>
                          </div>
                        </div>
                        <br />
                      </div>    
                    </div>
                    <div
                      className="row col-md-6"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "5vh",
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          color: "#000000",
                          backgroundColor: "#FFFFFF",
                          padding: "4px",
                          width: "40%",
                          borderRadius: "15px",
                          border: "2px solid #000000",
                        }}
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        style={{
                          color: "#FFFFFF",
                          backgroundColor: "#0066FF",
                          padding: "4px",
                          width: "40%",
                          borderRadius: "15px",
                          border: "none",
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  {this.state.showPopup ? (
                <PopUp4 closePopup={this.closePopup} />
              ) : null}
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
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
            to="/addprojects"
          >
            {" "}
            <MDBIcon icon="angle-left" className="mr-2" />
            Back to Add Projects
          </MDBNavLink>
        </button>
        <NewFooter />
      </section>
    );
  }
}

export default AddProjects;
