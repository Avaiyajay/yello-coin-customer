import React from "react";
import SearchBox from "../../../components/form/SearchBox";
import Select from "../../../components/form/Select";
import Date from "../../../components/form/Date";
// import "./EditDeleteLog.css";
import PorfolioHeaderCheckbox from "../../trade/porfolio-position/PorfolioHeaderCheckbox";
import PortfolioBtn from "../../trade/porfolio-position/PortfolioBtn";
import CustomButton from "../../../components/form/CustomButton";

const EditDeleteLog = () => {
  const options = ["first", "second", "third"];
  return (
    <div className="px-2">
      <div className="d-flex header align-items-center justify-content-between">
        <div className={``}>
          <div className="title">Edit/Delete Log</div>
        </div>

        <div className={`d-flex flex-column d-none d-sm-block`}>
          <div>
            <label className="mycheckbox">
              UPDATE
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="mt-4">
            <label className="mycheckbox">
              DELETE
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="position-relative portfolio-search">
          <div className="d-flex align-items-end">
            <div className="p-2">
              <div className="w-100 ml-1 input-title">FROM DATE</div>
              <Date />
            </div>
            <div className="p-2">
              <div className="w-100 ml-1 input-title">END DATE</div>
              <Date />
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
      <div>
        <div
          className={`d-flex align-items-center justify-content-evenly mb-3 d-block d-sm-none`}
        >
          <div>
            <label className="mycheckbox">
              UPDATE
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div>
            <label className="mycheckbox">
              DELETE
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="position-relative portfolio-small-search">
          <div className="d-flex align-items-end">
            <div className="p-2">
              <div className="w-100 ml-1 input-title">FROM DATE</div>
              <Date />
            </div>
            <div className="p-2">
              <div className="w-100 ml-1 input-title">END DATE</div>
              <Date />
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="container-fluid p-0 pe-5 d-flex justify-content-between align-items-end mt-4 flex-wrap">
        <div className="d-flex flex-wrap">
          <div className="pe-4">
            <div className="w-100 ml-1 input-title">SEGMENT</div>
            <Select placeholder="Select..." width="260" options={options} />
          </div>
          <div>
            <div className="w-100 ml-1 input-title">SELECT NAME</div>
            <Select placeholder="Select..." width="260" options={options} />
          </div>
        </div>
        <div className="d-flex mt-4 mt-xl-0">
          <CustomButton
            btnText="Find Logs"
            bgColor="#4065FF"
            margin="0px 20px 0px 0px"
          />
          <CustomButton
            btnText="Reset"
            bgColor="#40BAFF"
            margin="0px 0px 0px 0px"
          />
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row align-items-center my-4">
          <div className="col d-flex justify-content-center justify-content-lg-start align-items-center">
            <div className="align-items-center d-flex">
              <div className="p-2">SHOW</div>
              <div>
                <Select
                  placeholder="10"
                  height="35"
                  borderRadius="3"
                  width="80"
                  options={options}
                />
              </div>
              <div className="p-2">ENTRIES</div>
            </div>
          </div>
          <div className="col position-relative">
            <div className="d-flex justify-content-center align-items-center">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>

      {/* table */}
      <div className="my-5 table-overflow">
        <table className="table table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">
                <div>CLIENT</div>
              </th>
              <th scope="col">SYMBOL</th>
              <th scope="col">ORDER TYPE</th>
              <th scope="col">LOT</th>
              <th scope="col">QTY</th>
              <th scope="col">ORDER PRICE</th>
              <th scope="col">DEBITED BY</th>
              <th scope="col">USER TIP</th>
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
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="title">Showing 0 to 0 of 0 entries</div>
        <div>
          <nav aria-label="Page navigation example">
            <ul className="pagination p-0 mb-0">
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
    </div>
  );
};

export default EditDeleteLog;
