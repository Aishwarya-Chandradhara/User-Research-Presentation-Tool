import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBSmoothScroll } from "mdbreact";

class ContactUsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className='col-md-6'>
      
          <MDBContainer>
            <MDBRow>
              <MDBCol md='10' style={{ marginTop: "20px"  }}>
                <form
                  onSubmit={this.submitForm}
                  action='https://formspree.io/mpzqowjw'
                  method='POST'
                >
                  <p
                    className='h5 text-center mb-4 font_bold'
                    style={{ color: "#222222" }}
                  >
                    Fill out this form
                  </p>
                  <label
                    htmlFor='defaultFormContactNameEx'
                    style={{ color: "#222222" }}
                    className='font_medium'
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='defaultFormContactNameEx'
                    className='form-control'
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #222222",
                      color: "white"
                    }}
                    required
                  />
                  <br />
                  <label
                    htmlFor='defaultFormContactEmailEx'
                    style={{ color: "#222222" }}
                    className='font_medium'
                  >
                    Your Email
                  </label>
                  <input
                    name='email'
                    type='email'
                    id='defaultFormContactEmailEx'
                    className='form-control'
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #222222",
                      color: "white"
                    }}
                    required
                  />
                  <br />
                  <label
                    htmlFor='defaultFormContactSubjectEx'
                    cstyle={{ color: "#E37373" }}
                    style={{ color: "#222222" }}
                    className='font_medium'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    id='defaultFormContactSubjectEx'
                    className='form-control'
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #222222",
                      color: "white"
                    }}
                    required
                  />
                  <br />
                  <label
                    htmlFor='defaultFormContactMessageEx'
                    style={{ color: "#222222" }}
                    className='font_medium'
                  >
                    Message
                  </label>
                  <textarea
                    type='text'
                    name='message'
                    id='defaultFormContactMessageEx'
                    className='form-control'
                    rows='3'
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #222222",
                      color: "white"
                    }}
                    required
                  />
                  <br />
        <button
        type='button'
        style={{
          color: "#FFFFFF",
          backgroundColor: "#0066FF",
          marginLeft: "10vw",
          padding: "8px",
          borderRadius: "25px",
          border: "none"
        }}
      >
        <MDBSmoothScroll to='projects'>Submit Message</MDBSmoothScroll>
      </button>
                  
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      </div>
    );
  }
}

export default ContactUsForm;