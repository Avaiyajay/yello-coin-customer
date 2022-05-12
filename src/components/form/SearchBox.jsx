import React from "react";
import "./Form.css";

const SearchBox = () => {
  return (
    <form action="" className="search-box">
      <div className="search-wrapper">
        <img
          src="/assets/images/searchicon.svg"
          className="search-icon"
          alt=""
        />
        <input
          type="text"
          name=""
          className="position-absolute text-input"
          placeholder="Search anything"
          id=""
        />
      </div>
      <button type="submit" className="d-none"></button>
    </form>
  );
};

export default SearchBox;
