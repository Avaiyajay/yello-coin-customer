import React from "react";
import SearchBox from "../../../components/form/SearchBox";
import "./BlockedScrips.css";

const BlockedScrips = () => {
  return (
    <div className="container-fluid dashboard-container">
      {/* Header portion */}
      <div className="d-flex header align-items-center justify-content-between">
        <div className="position-relative blocked-search">
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

      <div className="mt-5">
        <div className="title">Banned/blocked Scripts</div>
        <div className="mr-2 mt-1">
          <img
            src="/assets/images/blockedScriptimg.svg"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BlockedScrips;
