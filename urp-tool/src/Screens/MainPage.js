import React, { Component } from "react";
import Home from "../Sections/Home";
import AboutUs from "../Sections/AboutUs";
import Projects from "../Sections/Projects";
import ContactUs from "../Sections/ContactUs";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"

class MainPage extends Component {
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
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default MainPage;