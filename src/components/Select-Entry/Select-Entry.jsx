import React from "react";
import "./Select-Entry.css"

const SelectEntry = () => {
  return (
    <select
      className="form-select bg-orange color-white focus-none width-entry d-inline mx-2"
      aria-label="Default select example"
    >
      <option className="bg-light text-dark ps-3" value="10" defaultValue>
        10
      </option>
      <option className="bg-light text-dark ps-3" value="20">
        20
      </option>
      <option className="bg-light text-dark ps-3" value="30">
        30
      </option>
      <option className="bg-light text-dark ps-3" value="40">
        40
      </option>
    </select>
  );
};

export default SelectEntry;
