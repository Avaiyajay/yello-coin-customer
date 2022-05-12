import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CustomButton from "../../../components/form/CustomButton";
import Date from "../../../components/form/Date";
import SearchBox from "../../../components/form/SearchBox";
import Select from "../../../components/form/Select";

const Trades = () => {
  const options = ["first", "second", "third"];
  return (
    <div className="container-fluid dashboard-container">
      {/* Header portion */}
      <div className="d-flex header align-items-center justify-content-between">
        <div className="d-flex flex-column">
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

        <div className="row row-cols-md-3 justify-content-between trade-header">
          <div className="col d-flex justify-content-center">
            <div>
              <div className="w-100 ml-1 input-title">TRADE AFTER</div>
              <Date />
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div>
              <div className="w-100 ml-1 input-title">TRADE BEFORE</div>
              <Date />
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div>
              <div className="w-100 ml-1 input-title">SELECT MARKET</div>
              <Select placeholder="Select..." options={options} />
            </div>
          </div>
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

      <div className="row row-cols-lg-3 justify-content-between small-screen-trade-header">
        <div className="col d-flex justify-content-center mt-2">
          <div>
            <div className="w-100 ml-1 input-title">TRADE AFTER</div>
            <Date />
          </div>
        </div>
        <div className="col d-flex justify-content-center mt-2">
          <div>
            <div className="w-100 ml-1 input-title">TRADE BEFORE</div>
            <Date />
          </div>
        </div>
        <div className="col d-flex justify-content-center mt-2">
          <div>
            <div className="w-100 ml-1 input-title">SELECT MARKET</div>
            <Select placeholder="Select..." options={options} />
          </div>
        </div>
      </div>
      {/* content */}

      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center flex-wrap">
          <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">SELECT SCRIPT</div>
              <Select placeholder="Select..." options={options} />
            </div>
          </div>
          <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">SELECT BROCKER</div>
              <Select placeholder="Select..." options={options} />
            </div>
          </div>
          <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">SELECT MASTER</div>
              <Select placeholder="Select..." options={options} />
            </div>
          </div>
          <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">SELECT CLIENT</div>
              <Select placeholder="Select..." options={options} />
            </div>
          </div>
          <div className="p-1">
            <div>
              <div className="w-100 ml-1 input-title">ORDER TYPE</div>
              <Select placeholder="Select Order Type" options={options} />
            </div>
          </div>
        </div>
      </div>

      {/* find order and clear filter buttons */}
      <div className="container-fluid d-flex justify-content-end mt-4">
        <CustomButton
          btnText="FIND ORDER"
          bgColor="#4065FF"
          margin="0px 20px 0px 0px"
        />
        <CustomButton
          btnText="CLEAR FILTER"
          bgColor="#40BAFF"
          margin="0px 0px 0px 0px"
        />
      </div>

      <div className="container-fluid mt-4">
        <div className="row align-items-center">
          <div className="col d-flex justify-content-center justify-content-lg-start align-items-center">
            <div className="align-items-center d-flex">
              <div className="p-2">SHOW</div>
              <div>
                <Select placeholder="10" width="80" options={options} />
              </div>
              <div className="p-2">ENTRIES</div>
            </div>
          </div>
          <div className="col position-relative mt-3">
            <div className="d-flex justify-content-center align-items-center">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="my-4 table-overflow">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">D</th>
              <th scope="col">TIME</th>
              <th scope="col">CLIENT</th>
              <th scope="col">MARKET</th>
              <th scope="col">SCRIPT</th>
              <th scope="col">B/S</th>
              <th scope="col">ORDER TYPE</th>
              <th scope="col">LOT</th>
              <th scope="col">QTY</th>
              <th scope="col">ORDER PRICE</th>
              <th scope="col">STATUS</th>
              <th scope="col">O. TIME</th>
              <th scope="col">MODIFY</th>
              <th scope="col">CANCEL</th>
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
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Trades;
