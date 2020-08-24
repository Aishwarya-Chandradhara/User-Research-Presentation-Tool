import React from "react";
import { MDBProgress } from 'mdbreact';

const UserProgressBar = () => {
  return (
    <>
    <div className= "background1-class">
        <h2 style={{ color: "#222222" }} class="h2-responsive">
          Skills
        </h2>
    <p className="text-left">Design</p>  
      <MDBProgress classname="" material value={70} height="20px" wrapperStyle={{width: "200px", backgroundColor : "#0066ff !important"}}/>
      <p className="text-left">Development</p>  
      <MDBProgress classname="" material value={60} height="20px"  wrapperStyle={{width: "200px"}}/>
      <p className="text-left">Testing</p>
      <MDBProgress classname="" material value={50} height="20px"  wrapperStyle={{width: "200px"}} />
      </div>
    </>
    
  );
}

export default UserProgressBar;