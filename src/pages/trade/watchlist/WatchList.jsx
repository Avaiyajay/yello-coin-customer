import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WatchList.css";
import SearchBox from "../../../components/form/SearchBox";

const WatchList = () => {
  return (
    <div className="container-fluid dashboard-container">
      {/* Header portion */}
      <div className="d-flex header align-items-center justify-content-between">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center mb-2">
              <div className="title snx-nft reduce-font-size">
                SNX : 58,533.67
              </div>
              <img src="/assets/images/upArrow.svg" alt="" />
              <span className="title reduce-font-size">590.02</span>
            </div>
            <div className="d-flex">
              <div className="title snx-nft reduce-font-size">
                NFT : 17,468.90
              </div>
              <img src="/assets/images/upArrow.svg" alt="" />
              <span className="title reduce-font-size">143.60</span>
            </div>
          </div>
        </div>

        <div className="position-relative watchlist-search">
          <SearchBox />
        </div>
        {/* bell and username and profilepic */}
        <div className="d-flex">
          <div className="ball-wrapper cursor-pointer">
            <img src="/assets/images/bell.svg" alt="" />
            <img src="/assets/images/reddot.svg" className="reddot" alt="" />
          </div>
          <img
            src="/assets/images/profilepic.svg"
            className="profile-image cursor-pointer"
            alt=""
          />

          <div className="cursor-pointer">
            <span className="title username reduce-font-size">Timothy</span>
            <img src="/assets/images/dropdown.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="position-relative watchlist-smallscreen-search">
        <SearchBox />
      </div>

      {/* content */}
      <div className="container-fluid mt-5 p-0 m-0">
        <div className="row align-items-center row-cols-2 row-cols-sm-4 row-cols-md-3 row-cols-lg-6">
          <div className="p-0 col-padding col mt-3">
            <span className="input-title">SEGMENT</span>
            <div className="first-box position-relative">
              <span className="inside-text">NSEFUT</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                color="white"
                className="icon-position"
              />
            </div>
          </div>
          <div className="p-0 col-padding col mt-3">
            <span className="input-title">SCRIPT</span>
            <div className="first-box position-relative">
              <span className="inside-text">NIFTY</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                color="white"
                className="icon-position"
              />
            </div>
          </div>
          <div className="p-0 col-padding col mt-3">
            <span className="input-title">EXPIRY</span>
            <div className="first-box position-relative">
              <span className="date">31-03-2022</span>
              <FontAwesomeIcon
                icon={faAngleDown}
                color="white"
                className="icon-position"
              />
            </div>
          </div>
          <div className="p-0 col-padding col mt-3">
            <span className="input-title">CE/PE</span>
            <div className="first-box position-relative">
              <FontAwesomeIcon
                icon={faAngleDown}
                color="white"
                className="icon-position"
              />
            </div>
          </div>
          <div className="p-0 col-padding col mt-3">
            <span className="input-title invisible">STRIKE</span>
            <div className="plus-box">
              <img src="/assets/images/plusicon.svg" alt="" />
            </div>
          </div>
          <div className="p-0 col-padding col mt-3">
            <span className="input-title">STRIKE</span>
            <div className="first-box position-relative">
              <span className="inside-text">Select....</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
