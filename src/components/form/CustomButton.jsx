import React from "react";

const CustomButton = ({ btnText, margin, bgColor }) => {
  return (
    <div
      className="trades-btn d-flex justify-content-center align-items-center"
      style={{ margin: `${margin}`, backgroundColor: `${bgColor}` }}
    >
      <span className="btn-text">{btnText}</span>
    </div>
  );
};

export default CustomButton;
