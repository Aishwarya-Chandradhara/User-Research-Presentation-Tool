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
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
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
      <section className="col-md-12 background-4">
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
            <MDBContainer>
              <MDBRow className="center-align">
                <MDBCol className="center-align" style={{ marginTop: "20px" }}>
                  <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/mpzqowjw"
                    method="POST"
                  >
                    <AddUserResearchIllustration />
                    <p
                      className="h5 text-center mb-4 font_bold"
                      style={{ color: "#222222" }}
                    >
                      Add New User Research
                    </p>
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
                    <br />

                    <label
                      htmlFor="defaultFormName"
                      style={{ color: "#222222" }}
                      className="font_medium"
                    >
                      Gender
                    </label>
                    <br />
                    {/* <MDBDropdown>
                      <MDBDropdownToggle
                        caret
                        color="white"
                      >Gender</MDBDropdownToggle>
                      <MDBDropdownMenu basic>
                        <MDBDropdownItem>Male</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Female</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Other</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown> */}
                    <select
                      name="gender"
                      id="gender"
                      className="custom-dropdown"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                    <br />
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
                    <br />

                    <label
                      htmlFor="defaultFormName"
                      style={{ color: "#222222" }}
                      className="font_medium"
                    >
                      Job Title
                    </label>
                    <br />
                    {/* <MDBDropdown >
                      <MDBDropdownToggle
                        caret
                        color="primary"
                      ></MDBDropdownToggle>
                      <MDBDropdownMenu basic>
                        <MDBDropdownItem>UI/UX Designer</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Web Designer</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Front End Developer</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown> */}
                    <select
                      name="jobTitle"
                      id="jobTitle"
                      className="custom-dropdown"
                    >
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Web Designer">Web Designer</option>
                      <option value="Others">Others</option>
                    </select>
                    <br />
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
                    <br />

                    <FileUpload />
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
                    <br />

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
                    <br />
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
                    <br />
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
                    <br />
                    <label
                      htmlFor="defaultFormMessage"
                      style={{ color: "#222222" }}
                      className="font_medium"
                    >
                      Skills
                    </label>
                    <div>
                    <label
                      htmlFor="defaultFormMessage"
                      style={{ color: "#222222", marginTop : "20px" }}
                      className="font_medium"
                    >
                      Design
                    </label>
                      <MDBRangeInput id="design" min={0} max={100} value={0} step={33.33}/>
                    </div>
                    <div className="my-5">
                    <label
                      htmlFor="defaultFormMessage"
                      style={{ color: "#222222" }}
                      className="font_medium"
                    >
                      Development
                    </label>
                      <MDBRangeInput id="development" min={0} max={100} value={0} step={33.33}/>
                    </div>
                    <div className="my-5">
                    <label
                      htmlFor="defaultFormMessage"
                      style={{ color: "#222222" }}
                      className="font_medium"
                    >
                      Testing
                    </label>
                      <MDBRangeInput id="testing" min={0} max={100} value={0} step={33.33}/>
                    </div>

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
                    <br />

                    {/* <MDBFileupload /> */}
                    <button
                      type="button"
                      style={{
                        color: "#FFFFFF",
                        width: "40%",
                        backgroundColor: "#0066FF",
                        marginLeft: "20vw",
                        padding: "4px",
                        borderRadius: "15px",
                        border: "none",
                      }}
                    >
                      <MDBSmoothScroll>Submit</MDBSmoothScroll>
                    </button>

                    <button
                      type="button"
                      style={{
                        color: "#000000",
                        width: "40%",
                        backgroundColor: "#FFFFFF",
                        marginLeft: "4vw",
                        padding: "4px",
                        borderRadius: "15px",
                        border: "2px solid #000000",
                      }}
                    >
                      <MDBSmoothScroll>Cancel</MDBSmoothScroll>
                    </button>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
          <NewFooter />
        </div>
      </section>
    );
  }
}

export default AddProjects;
