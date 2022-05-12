import React from "react";
import "./Form.css";

const Date = ({ width }) => {
  return (
    <div className="date_width" style={{ width: `${width}px` }}>
      <input
        type="date"
        className="date-input"
        style={{ width: `${width / 1.2}px` }}
      />
    </div>
  );
};

export default Date;
