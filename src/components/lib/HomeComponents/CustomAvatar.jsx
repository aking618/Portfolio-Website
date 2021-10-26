import React from "react";

const CustomAvatar = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "2px solid #fff",
      }}
    />
  );
};

export default CustomAvatar;
