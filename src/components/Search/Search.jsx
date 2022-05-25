import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
      <div className="input-group shadow-sm ">
        <span
          className="input-group-text focus-none bg-transparent border-right-none"
          id="basic-addon1"
        >
          <FontAwesomeIcon icon={faSearch} color="#fab417" className="hover-search"/>
        </span>
        <input
          type="text"
          className="form-control focus-none border-left-none"
          placeholder="Search..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
  );
};

export default Search;
