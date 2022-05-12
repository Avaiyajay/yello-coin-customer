import React from "react";
import SearchBox from "../../../components/form/SearchBox";
import Select from "../../../components/form/Select";
import "./WatchList.css";

const WatchList = () => {
  const options = ["first", "second", "third"];

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
      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-evenly align-items-end flex-wrap">
          <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">SEGMENT</div>
              <Select placeholder="Select..." width="300" options={options} />
            </div>
          </div>
          <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">SCRIPT</div>
              <Select placeholder="Select..." width="300" options={options} />
            </div>
          </div>
          <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">EXPIRY</div>
              <Select placeholder="Select..." width="300" options={options} />
            </div>
          </div>
          {/* <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">SELECT CLIENT</div>
              <Select placeholder="Select..." options={options} />
            </div>
          </div> */}
          <div className="p-1">
            {/* <span className="w-100 ml-1 input-title">STRIKE</span> */}
            <div className="add-box">
              <div className="text-white">+ADD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
