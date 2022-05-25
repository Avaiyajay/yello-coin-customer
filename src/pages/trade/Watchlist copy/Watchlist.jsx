import React from "react";
import "./Watchlist.css";
import Table from "../../../components/Trading-Tables/Table-watchlist-trading";
import Search from "../../../components/Search/Search";
import Notifications from "../../../components/Notifications/Notifications";
import UserLogo from "../../../components/UserLogo/UserLogo";
import Calender from "../../../components/Calender/Calender";
import Fade from "react-reveal/Fade";

const Watchlist = () => {
  return (
    <>
      <Fade top right>
        <div className="container-fluid">
          <div className="row my-3">
            <div className="col-3 text-start p-0 m-0 fs-small">
              <span>
                SNX:58.533.67 <span>-</span> 590.02
              </span>
              <p>
                NFT:17.468.90 <span>-</span> 143.60
              </p>
            </div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-6 col-xl-6">
              <Search />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-1 col-xl-1 text-center">
              <Notifications />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
              <UserLogo />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2">
              <p className="m-2">SEGMENT</p>
              <select
                className="form-select bg-orange color-white height-button focus-none myClass"
                aria-label="Default select example"
              >
                <option className="text-dark ps-3" value="1" defaultValue>
                  NSEFUT
                </option>
                <option className="text-dark ps-3" value="2">
                  One
                </option>
                <option className="text-dark ps-3" value="3">
                  Two
                </option>
                <option className="text-dark ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <p className="m-2">SCRIPT</p>
              <select
                className="form-select bg-orange color-white height-button focus-none myClass"
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  NIFTY
                </option>
                <option className="bg-light text-dark ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <p className="m-2">EXPIRY</p>
              <Calender />
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
              <p className="m-2">CE/PE</p>
              <select
                className="form-select bg-orange color-white height-button focus-none myClass"
                aria-label="Default select example"
              >
                <option className="bg-light text-dark ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2">
              <p className="m-2">STRIKE</p>
              <select
                className="form-select bg-orange color-white height-button  focus-none myClass"
                aria-label="Default select example"
              >
                <option
                  className="bg-light text-dark ps-3"
                  value="1"
                  defaultValue
                >
                  Select...
                </option>
                <option className="bg-light text-dark ps-3" value="2">
                  One
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Two
                </option>
                <option className="bg-light text-dark ps-3" value="3">
                  Three
                </option>
              </select>
            </div>
          </div>
        </div>
        <Table />
      </Fade>
    </>
  );
};

export default Watchlist;
