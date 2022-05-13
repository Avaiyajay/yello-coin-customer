import React from "react";
import "./Form.css";

const Select = ({ placeholder, options, width, borderRadius, height }) => {
  return (
    <div
      className="date_width"
      style={{
        width: `${width}px`,
        borderRadius: `${borderRadius}px`,
        height: `${height}px`,
      }}
    >
      <select
        name=""
        className="select-input"
        style={{ width: `${width / 1.2}px` }}
        id=""
      >
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option value="">{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
