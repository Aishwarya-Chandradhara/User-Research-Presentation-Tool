import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBSmoothScroll } from "mdbreact";

const AdminFooter = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow className='text-center text-md-left mt-3 pb-3'>
                    <MDBCol md='3' lg='3' xl='3' className='mx-auto mt-3'>
                        <h6
                            style={{ color: "#FFFFFF" }}
                            className='mb-4 font-weight-bold font_bold font_size_title'
                        >
                            <MDBSmoothScroll to='home'>User Research Presentation Tool</MDBSmoothScroll>
                        </h6>
                    </MDBCol>
                    <hr className='w-100 clearfix d-md-none' />
                    <MDBCol md='2' lg='2' xl='2' className='mx-auto mt-3'>
                        <h6
                            style={{ color: "#FFFFFF" }}
                            className='mb-4 font-weight-bold'
                        >
                            <MDBSmoothScroll to='home'>Home</MDBSmoothScroll>
                        </h6>
                    </MDBCol>

                    <hr className='w-100 clearfix d-md-none' />
                    <MDBCol md='3' lg='2' xl='2' className='mx-auto mt-3'>
                        <h6
                            style={{ color: "#FFFFFF" }}
                            className='mb-4 font-weight-bold'
                        >
                            <MDBSmoothScroll to='aboutus'>About Us</MDBSmoothScroll>
                        </h6>
                    </MDBCol>

                    <hr className='w-100 clearfix d-md-none' />
                    <MDBCol md='4' lg='2' xl='2' className='mx-auto mt-3'>
                        <h6
                            style={{ color: "#FFFFFF" }}
                            className='mb-4 font-weight-bold'
                        >
                            <MDBSmoothScroll to='projectsadmin'>Projects</MDBSmoothScroll>
                        </h6>
                    </MDBCol>

                    <hr className='w-100 clearfix d-md-none' />
                    <MDBCol md='5' lg='2' xl='2' className='mx-auto mt-3'>
                        <h6
                            style={{ color: "#FFFFFF" }}
                            className='mb-4 font-weight-bold'
                        >
                            Logged in as Admin
              </h6>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: URP Tool. All rights reserved
        </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default AdminFooter;