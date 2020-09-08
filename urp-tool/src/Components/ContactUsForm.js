import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBSmoothScroll } from "mdbreact";
import PopUp3 from "../Components/PopUp3";

class ContactUsForm extends Component {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      showPopup: false,
    };
  }

  closePopup = () => {
    this.setState({ showPopup: false });
  };
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS", showPopup: true });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div className="col-md-6">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="10" style={{ marginTop: "20px" }}>
              <form method="POST" action="https://formspree.io/xpzyvjrg" onSubmit={this.submitForm}>
                <p
                  className="h5 text-center mb-4 font_bold"
                  style={{ color: "#222222" }}
                >
                  Fill out this form
                </p>
                <label
                  htmlFor="defaultFormContactNameEx"
                  style={{ color: "#222222" }}
                  className="font_medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="defaultFormContactNameEx"
                  className="form-control"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #222222",
                    color: "#222222",
                  }}
                  required
                />
                <br />
                <label
                  htmlFor="defaultFormContactEmailEx"
                  style={{ color: "#222222" }}
                  className="font_medium"
                >
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="defaultFormContactEmailEx"
                  className="form-control"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #222222",
                    color: "#222222",
                  }}
                  required
                />
                <br />
                <label
                  htmlFor="defaultFormContactSubjectEx"
                  cstyle={{ color: "#E37373" }}
                  style={{ color: "#222222" }}
                  className="font_medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="defaultFormContactSubjectEx"
                  className="form-control"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #222222",
                    color: "#222222",
                  }}
                  required
                />
                <br />
                <label
                  htmlFor="defaultFormContactMessageEx"
                  style={{ color: "#222222" }}
                  className="font_medium"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="3"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #222222",
                    color: "#222222",
                  }}
                  required
                />
                <br />
                <button
                  type="submit"
                  style={{
                    color: "#FFFFFF",
                    backgroundColor: "#0066FF",
                    marginLeft: "10vw",
                    padding: "10px",
                    borderRadius: "25px",
                    border: "none",
                  }}
                >
                  Submit Message
                </button>
              </form>

              {this.state.showPopup ? (
                <PopUp3 closePopup={this.closePopup} />
              ) : null}

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ContactUsForm;
