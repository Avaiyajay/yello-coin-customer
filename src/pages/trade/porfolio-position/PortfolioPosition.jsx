import React from "react";
import SearchBox from "../../../components/form/SearchBox";
import Select from "../../../components/form/Select";
import PorfolioHeaderCheckbox from "./PorfolioHeaderCheckbox";
import Date from "../../../components/form/Date";
import "./PortfolioPosition.css";
import PortfolioBtn from "./PortfolioBtn";

const PortfolioPosition = () => {
  const options = ["first", "second", "third"];
  return (
    <div className="px-2">
      <div className="d-flex header align-items-center justify-content-between main-header">
        <PorfolioHeaderCheckbox classname="portfolio-checkboxes" />
        <div className="position-relative portfolio-search">
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

      <div>
        <div className="d-flex justify-content-around  my-2">
          <PorfolioHeaderCheckbox classname="portfolio-small-checkboxes" />
        </div>
        <div className="position-relative portfolio-small-search">
          <SearchBox />
        </div>
      </div>

      {/* content */}
      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <div className="p-2">
            <div>
              <div className="w-100 input-title">SELECT MARKET</div>
              <Select placeholder="Select MARKET" options={options} />
            </div>
          </div>
          <div className="p-2">
            <div>
              <div className="w-100 input-title">SELECT SCRIPT</div>
              <Select placeholder="Select SCRIPT" options={options} />
            </div>
          </div>
          <div className="p-2">
            <div>
              <div className="w-100 input-title">SELECT MASTER</div>
              <Select placeholder="Select MASTER" options={options} />
            </div>
          </div>
          <div className="p-2">
            <div>
              <div className="w-100 input-title">SELECT CLIENT</div>
              <Select placeholder="Select CLIENT" options={options} />
            </div>
          </div>
          <div className="p-2">
            <div>
              <div className="w-100 input-title">SELECT BROCKER</div>
              <Select placeholder="SELECT BROCKER" options={options} />
            </div>
          </div>
        </div>
      </div>
      {/* buttons content */}
      <div className="container-fluid mt-2 p-0">
        <div className="d-flex justify-content-evenly align-items-center flex-wrap">
          <div className="p-2">
            <div>
              <div className="w-100 ml-1 input-title">EXPIRY DATE</div>
              <Date width="300" />
            </div>
          </div>
          <div className="p-2">
            <div>
              <div className="w-100 ml-1 input-title invisible ">
                EXPIRY DATE
              </div>
              <PortfolioBtn text="GET POSITION" color="#4065FF" />
            </div>
          </div>
          <div className="p-2">
            <div className="w-100 ml-1 input-title invisible ">
              ROLL OVER ALL
            </div>
            <PortfolioBtn text="GET POSITION" color="#40BAFF" />
          </div>
          <div className="p-2">
            <div className="w-100 ml-1 input-title invisible ">
              CLOSE POSTION
            </div>
            <PortfolioBtn text="GET POSITION" color="#BE2526" />
          </div>
          <div className="p-2">
            <div className="w-100 ml-1 input-title invisible ">
              CLEAR FILTER
            </div>
            <PortfolioBtn text="GET POSITION" color="#702313" />
          </div>
        </div>
      </div>

      {/* table */}

      <div className="mt-5">
        <div className="table-heading ml-5">
          <div>TOTAL MTM</div>
          <div>SELF MTM</div>
        </div>
      </div>

      <div className="my-4 table-overflow">
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">MARKET</th>
              <th scope="col">CLIENT</th>
              <th scope="col">SCRIPT</th>
              <th scope="col">T. BUY Q.</th>
              <th scope="col">BUY A. P.</th>
              <th scope="col">T. SELL Q.</th>
              <th scope="col">SELL A. P.</th>
              <th scope="col">NET Q.</th>
              <th scope="col">A/B P.</th>
              <th scope="col">MTM</th>
              <th scope="col">AUTO CLOSE</th>
              <th scope="col">CLOSE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioPosition;
