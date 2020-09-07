import React, { Component } from "react";
import {
  MDBTypography,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import AddProjectsText from "../Components/AddProjectsText";
import NewFooter from "../Components/NewFooter";
import FileUpload from "../Components/FileUpload";
import { db, storage } from "../firebase_";

class AddProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { desc: null, title: null };
  }
  componentWillUnmount (){
    document.getElementById("myForm").reset();
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  handleImage = (image) => {
    const uploadTask = storage.ref(`projectImage/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error)
      },
      () => {
        storage
        .ref("projectImage")
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
    console.log(this.state)
    db.collection("projects")
      .add(this.state)
      .then( setTimeout( () => {window.location.href = "/adduserresearch"} , 500))
      .catch((error) => console.log(error));
  };
  
  render() {
    return (
      <section className="background-4">
        <MDBTypography
          tag="h3"
          variant="h3-responsive"
          className="text-left font_bold font_size_title"
          style={{ paddingTop: "8vh", marginLeft: "4vw", color: "#222222" }}
        >
          Add New Projects
        </MDBTypography>
        <div className="col-md-12 project-main">
          <AddProjectsText />
          <div className="col-md-12" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
            <MDBCol className="col-md-6">
              <MDBRow className="center-align">
                <MDBCol
                  md="10"
                  className="center-align add-project-card"
                >
                  <form onSubmit={this.submitForm} id="myForm">
                    <p
                      className="h5 text-center mb-4 font_bold"
                      style={{ color: "#222222" }}
                    >
                      Add a New Project
                    </p>
                    <label
                      htmlFor="defaultFormcompanyname"
                      style={{ color: "#222222" }}
                      className="font_medium"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      id="title"
                      onChange={this.handleChange}
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
                      htmlFor="projectdesc"
                      style={{ color: "#222222" }}
                      className="font_medium"
                    >
                      Project Description
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      id="desc"
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
                    <br />
                    <label
                      htmlFor="defaultForm"
                      style={{ color: "#222222" }}
                      className="font_medium"
                    >
                      Upload Picture
                    </label>

                    <FileUpload handleImageInChild={this.handleImage} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "5vh",
                        marginBottom: "5vh",
                      }}
                    >
                    
                      <button
                        type="cancel"
                        style={{
                          width: "40%",
                          backgroundColor: "#E2E6E7",
                          padding: "4px",
                          borderRadius: "15px",
                          border: "black",
                        }}
                      >
                        <MDBNavLink
                          style={{
                            color: "#000",
                            borderRadius: "15px",
                          }}
                          exact
                          to="/adminpage"
                        >
                          Cancel
                        </MDBNavLink>
                      </button>

                      <button
                        type="submit"
                        style={{
                          color: "#FFFFFF",
                          width: "40%",
                          backgroundColor: "#0066FF",
                          padding: "4px",
                          borderRadius: "15px",
                          border: "none",
                        }}
                      >Submit
                      </button>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBCol>
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
            to="/adminpage"
          >
            <MDBIcon icon="angle-left" className="mr-2" />
            Back to Home
          </MDBNavLink>
        </button>
        </div>
        <NewFooter />
      </section>
    );
  }
}

export default AddProjects;
