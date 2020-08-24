import React, { Component } from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBSmoothScroll
} from "mdbreact";

class AdminNavbar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBContainer fluid className='no-padding'>
        <MDBNavbar
          style={{ backgroundColor: "#0066FF" }}
          dark
          expand='md'
          fixed='top'
        >
          <MDBNavbarBrand>
            <strong
              style={{ color: "#FFFFFF", marginLeft: "10vw" }}
              className='font_bold font_size_title'
            >
              User Research Presentation Tool
            </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <MDBCollapse
            id='navbarCollapse3'
            isOpen={this.state.collapseID}
            navbar
          >
            <MDBNavbarNav
              right
              style={{ marginRight: "2vw" }}
              className='font_medium'
            >
              <MDBNavItem style={{ color: "#FFFFFF" }}>
                <MDBNavLink
                  style={{ color: "#FFFFFF" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='home' style={{ color: "#FFFFFF" }}>
                    Home
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#FFFFFF" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='aboutus' style={{ color: "#FFFFFF" }}>
                    About Us
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#FFFFFF" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='projects' style={{ color: "#FFFFFF" }}>
                    Projects
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink
                  style={{ color: "#FFFFFF" }}
                  className='waves-effect waves-light'
                  to='#!'
                >
                  <MDBSmoothScroll to='aboutus' style={{ color: "#FFFFFF" }}>
                    Logout
                  </MDBSmoothScroll>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

export default AdminNavbar;