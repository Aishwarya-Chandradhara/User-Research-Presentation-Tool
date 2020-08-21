import React from "react";

const UserImage = () => {
  return (
    <div style={{
      marginTop: "20vh",
      marginBottom: "10vh"

    }}>
        <img
          alt='Thesis'
          style={{
            width: "auto",
            height: "200px",
            display: "block",
            margin: "auto"
            
          }}
          src={require("../Assets/user1.png")}
        />
    </div>
  );
};

export default UserImage;