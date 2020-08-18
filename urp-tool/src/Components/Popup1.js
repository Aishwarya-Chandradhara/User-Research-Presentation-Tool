import React, { Component } from "react";
import {MDBContainer,MDBModal,MDBModalBody,} from "mdbreact";

class ModalPage extends Component {
  state = {
    modal: true,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
    this.props.closePopup();
  };

  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalBody style={{ background: "#0066FF" }}>
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={this.toggle}
            >
              <span
                aria-hidden="true"
                style={{ color: "white", type: "OpenSans" }}
              >
                x
              </span>
            </button>
            <div
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "xx-large",
              }}
            >
              Thank you{" "}
            </div>
            <br />
            <div style={{ color: "white", textAlign: "center" }}>
              You will receive an email with the login credentials to login to
              the application.{" "}
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
