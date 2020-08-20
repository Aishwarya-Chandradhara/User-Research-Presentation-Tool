import React from "react";

const UserImage = () => {
  return (
    <div >
        <img
          alt='Thesis'
          style={{
            width: "auto",
            height: "200px",
            marginTop: "20vh",
    
            
          }}
          src={require("../Assets/user1.png")}
        />
    </div>
  );
};

export default UserImage;