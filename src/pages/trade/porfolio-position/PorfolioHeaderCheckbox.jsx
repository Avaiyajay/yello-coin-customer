import React from "react";
import SearchBox from "../../../components/form/SearchBox";
import "./PortfolioPosition.css";

const PorfolioHeaderCheckbox = ({ classname }) => {
  return (
    <>
      <div className={`d-flex flex-column ${classname}`}>
        <div>
          <label className="mycheckbox">
            PENDING ORDERS
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="mt-4">
          <label className="mycheckbox">
            EXECUTED ORDERS
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>

      <div className={`d-flex flex-column ${classname}`}>
        <div>
          <label className="mycheckbox">
            CLIENT WISE
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="mt-4">
          <label className="mycheckbox">
            SCRIPT WISE
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>

      {/* <div className="position-relative portfolio-search">
        <SearchBox />
      </div> */}
    </>
  );
};

export default PorfolioHeaderCheckbox;
