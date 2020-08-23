import React, { Component } from "react";
import { MDBTypography, MDBContainer, MDBRow, MDBCol, MDBSmoothScroll } from "mdbreact";
import AddProjectsText from "../Components/AddProjectsText";
import NewFooter from "../Components/NewFooter";
import AddProjectsIllustration from "../Components/AddProjectsIllustration"
import FileUpload from "../Components/FileUpload"


class AddProjects extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
          <section className='col-md-12 background-4'>
          <MDBTypography
            tag='h3'
            variant='h3-responsive'
            className='text-left font_bold font_size_title'
            style={{ paddingTop: "8vh", marginLeft: "4vw", color: "#222222" }}
          >
            Add New Projects
          </MDBTypography>
        <div>
          <AddProjectsText />
          <div className='col-md-6'>
      
          <MDBContainer>
            <MDBRow className="center-align">
              <MDBCol md='6' className="center-align" style={{ marginTop: "20px" }}>
                <form 
                  onSubmit={this.submitForm}
                  action='https://formspree.io/mpzqowjw'
                  method='POST'
                >
                <AddProjectsIllustration />
                 <p
                    className='h5 text-center mb-4 font_bold'
                    style={{ color: "#222222" }}
                  >
                    Add a New Project
                  </p>
                  <label
                    htmlFor='defaultFormcompanyname'
                    style={{ color: "#222222" }}
                    className='font_medium'
                  >
                    Company Name
                  </label>
                  <input
                    type='text'
                    id='defaultFormcompanyname'
                    className='form-control'
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #222222",
                      color: "black"
                    }}
                    required
                  />
                  <br />
                  
                  <label
                    htmlFor='defaultFormMessage'
                    style={{ color: "#222222" }}
                    className='font_medium'
                  >
                    Message
                  </label>
                  <textarea
                    type='text'
                    name='message'
                    id='defaultFormMessage'
                    className='form-control'
                    rows='3'
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #222222",
                      color: "black"
                    }}
                    required
                  />
                  <br />

                  <FileUpload />
        <button
        type='button'
        style={{
          color: "#FFFFFF",
          width: "40%",
          backgroundColor: "#0066FF",
          marginLeft: "20vw",
          padding: "4px",
          borderRadius: "15px",
          border: "none"
        }}
      >
        <MDBSmoothScroll>Submit</MDBSmoothScroll>
      </button>

      <button 
        type='button'
        style={{
          color: "#000000",
          width: "40%",
          backgroundColor: "#FFFFFF",
          marginLeft: "4vw",
          padding: "4px",
          borderRadius: "15px",
          border: "2px solid #000000"
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