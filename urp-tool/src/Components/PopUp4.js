import React, { Component } from "react";
import { MDBContainer, MDBModal, MDBModalBody } from "mdbreact";

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
                <i class="fa fa-times"></i>
              </span>
            </button>
            <div style={{ color: "white", textAlign: "center" }}>
              Added New User Research
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
