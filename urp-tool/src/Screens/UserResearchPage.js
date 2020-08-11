import React, { Component } from "react";
import UserResearchPageText from "../Components/UserResearchPageText";
import NewFooter from "../Components/NewFooter"

class UserResearchPage extends Component {
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
          Projects
        </MDBTypography>
        <div>
            <UserResearchPageText />
            <NewFooter />
        </div>
        </section>
      );
    }
  }
  
  export default UserResearchPage;