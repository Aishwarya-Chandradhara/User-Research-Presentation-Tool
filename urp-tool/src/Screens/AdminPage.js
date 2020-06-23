import React, { Component } from "react";
import Home from "../Sections/Home";
import AboutUs from "../Sections/AboutUs";
import Projects from "../Sections/Projects";
import ContactUs from "../Sections/ContactUs";
import Footer from "../Sections/Footer";
import Navbar from "../Components/Navbar"

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <AboutUs />
        <Projects />
        {/*<Footer />*/}
      </div>
    );
  }
}

export default AdminPage;