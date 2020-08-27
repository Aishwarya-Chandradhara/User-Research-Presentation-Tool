import React from "react";

const SpinnerPage = () => {
  return (
    <>
      <div className="spinner-border" role="status" style={{height: "100px", width: "100px", marginLeft: "40%", color:"#0066ff"}}>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default SpinnerPage;