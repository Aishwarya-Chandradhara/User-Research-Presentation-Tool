import React, { Component } from "react";
import {
  MDBTypography,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBSmoothScroll,
  MDBRangeInput,
} from "mdbreact";
import FileUpload from "../Components/FileUpload";
import AddUserResearchText from "../Components/AddUserResearchText";
import NewFooter from "../Components/NewFooter";
import AddUserResearchIllustration from "../Components/AddUserResearchIllustration";

class AddProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
                <MDBCol className="col-md-10" style={{border: "1px solid blue",  marginBottom: "20vh"}}>
                  <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/mpzqowjw"
                    method="POST"
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
                          style={{
                            backgroundColor: "#FFFFFF",
                            border: "1px solid #222222",
                            color: "black",
                          }}
                          required
                        />
                      </div>
                    </div>
                    <br/>
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
                    <br/>

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
                          >Enthusiastic</label>
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
        <NewFooter />
      </section>
    );
  }
}

export default AddProjects;
