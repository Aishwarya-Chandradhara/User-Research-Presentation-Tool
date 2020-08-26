import React, { Component } from "react";
import {
  MDBTypography,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBSmoothScroll,
  MDBRangeInput,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import FileUpload from "../Components/FileUpload";
import AddUserResearchText from "../Components/AddUserResearchText";
import NewFooter from "../Components/NewFooter";
import AddUserResearchIllustration from "../Components/AddUserResearchIllustration";

class AddProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSelectChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    }, ()=>{
      console.log("state select", this.state)
    })
  }

  handleSliderChangeDesign = (val) => {
    this.setState({
      sliderDesign: val
    }, ()=>{
      console.log("state select", this.state)
    })
  }
  handleSliderChangeDevelopment = (val) => {
    this.setState({
      sliderDev: val
    }, ()=>{
      console.log("state select", this.state)
    })
  }
  handleSliderChangeTesting = (val) => {
    this.setState({
      sliderTest: val
    }, ()=>{
      console.log("state select", this.state)
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    }, ()=>{
      console.log("state select", this.state)
    })
  }
  
  render() {
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
        <div>
          <AddUserResearchText />
          <div>
            <AddUserResearchIllustration />
            <MDBContainer>
              <MDBRow className="center-align">
                <MDBCol
                  className="col-md-10"
                  style={{ border: "1px solid blue", marginBottom: "20vh" }}
                >
                  <form
                    onSubmit={this.submitForm}
                  >
                    <p
                      className="h5 text-center mb-4 font_bold"
                      style={{ color: "#222222", paddingTop: "8vh" }}
                    >
                      Add New User Research
                    </p>
                    <div className="row col-md-12">
                      <div className="col-md-4">
                        <label
                          htmlFor="defaultFormName"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          onChange={this.handleChange}
                          id="defaultFormName"
                          className="form-control"
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="defaultFormName"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Gender
                        </label>
                        <br />
                        <select
                          name="gender"
                          id="gender"
                          className="custom-dropdown"
                          onChange={this.handleSelectChange}
                          value={this.state.selectedValue}
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="defaultFormName"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Age
                        </label>
                        <input
                          type="number"
                          id="defaultFormAGe"
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
                    </div>
                    <br />
                    <div className="row col-md-12">
                      <div className="col-md-4">
                        <label
                          htmlFor="defaultFormName"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Job Title
                        </label>
                        <br />
                        <select
                          name="jobTitle"
                          id="jobTitle"
                          className="custom-dropdown"
                          onChange={this.handleSelectChange}
                          value={this.state.selectedValue}
                        >
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="Web Designer">Web Designer</option>
                          <option value="Developer">Developer</option>
                        </select>
                      </div>
                      <br />
                      <div className="col-md-4">
                        <label
                          htmlFor="defaultFormLocation"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Location
                        </label>
                        <input
                          type="text"
                          id="defaultFormLocation"
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
                          htmlFor="defaultForm"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Upload Image
                        </label>
                        <FileUpload />
                      </div>
                    </div>
                    <br />

                    <div className="row col-md-12">
                      <div className="col-md-6">
                        <label
                          htmlFor="defaultFormAbout"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          About
                        </label>
                        <textarea
                          type="text"
                          name="about"
                          id="defaultFormAbout"
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
                          htmlFor="defaultFormGoals"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Goals
                        </label>
                        <textarea
                          type="text"
                          name="goals"
                          onChange={this.handleChange}
                          id="defaultFormGoals"
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
                          htmlFor="defaultFormNeeds"
                          style={{ color: "#222222" }}
                          className="font_medium"
                        >
                          Needs
                        </label>

                        <textarea
                          type="text"
                          name="needs"
                          id="defaultFormNeeds"
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
                          id="defaultFormChallenges"
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
                        htmlFor="defaultFormMessage"
                        style={{ color: "#222222" }}
                        className="font_medium"
                      >
                        Message
                      </label>
                      <textarea
                        type="text"
                        onChange={this.handleChange}
                        name="message"
                        id="defaultFormMessage"
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
                      <div className="col-md-6">
                        <h6>Skills</h6>
                        <label
                          htmlFor="defaultForm"
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
                            htmlFor="defaultForm"
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
                            htmlFor="defaultForm"
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
                      <div className="col-md-6">
                        <h6>Personality</h6>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Enthusiastic
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Go Getter
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Go Getter
                          </label>
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Sociable
                          </label>
                        </div>

                        <br />
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Team Player
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Attentive
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Organized
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Passionate
                          </label>
                        </div>
                        <br />

                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Dependable
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Motivated
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Creative
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Proactive
                          </label>
                        </div>
                        <br />

                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Maverick
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Elevated
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Friendly
                          </label>

                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="defaultChecked2"
                          />
                          <label
                            class="custom-control-label custom-skill"
                            for="defaultChecked2"
                          >
                            Thoughtful
                          </label>
                        </div>
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
                        <MDBSmoothScroll>Cancel</MDBSmoothScroll>
                      </button>

                      <button
                        type="button"
                        style={{
                          color: "#FFFFFF",
                          backgroundColor: "#0066FF",
                          padding: "4px",
                          width: "40%",
                          borderRadius: "15px",
                          border: "none",
                        }}
                      >
                        <MDBSmoothScroll>Submit</MDBSmoothScroll>
                      </button>
                    </div>
                  </form>
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
            <MDBIcon icon="angle-left" className="ml-2" />
            Back to Add Projects
          </MDBNavLink>
        </button>
        <NewFooter />
      </section>
    );
  }
}

export default AddProjects;
