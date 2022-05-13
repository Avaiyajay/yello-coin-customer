import React from "react";
import CustomButton from "../../../components/form/CustomButton";
import Date from "../../../components/form/Date";
import Table from "../../../components/table/Table";
// import "./DepositReport.css";

const DepositReport = () => {
  // executed orders data
  const executedColumns = [
    "TIME",
    "CLIENT",
    "SCRIPT",
    "LOT",
    "QTY",
    "TYPE",
    "RATE",
  ];

  const executedRows = [
    ["11:00", "Mark", "Otto", "@mdo", "@mdo", "@mdo", "@mdo"],
    ["11:00", "Mark", "Otto", "@mdo", "@mdo", "@mdo", "@mdo"],
    ["11:00", "Mark", "Otto", "@mdo", "@mdo", "@mdo", "@mdo"],
  ];

  // pending order data
  const pendingOrderColumns = [
    "O-TIME",
    "O-TIME",
    "CLIENT",
    "SCRIPT",
    "TYPE",
    "LOT",
    "QTY",
    "RATE",
  ];

  const pendingOrderRows = [
    ["11:00", "Mark", "Otto", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
    ["11:00", "Mark", "Otto", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
    ["11:00", "Mark", "Otto", "@mdo", "@mdo", "@mdo", "@mdo", "@mdo"],
  ];

  // rejection data
  const rejectionColumns = [
    "D",
    "A",
    "O-TIME",
    "O-TIME",
    "CLIENT",
    "SCRIPT",
    "TYPE",
    "LOT",
    "QTY",
    "RATE",
    "REASON",
  ];

  const rejectionRows = [
    [
      "11:00",
      "Mark",
      "Otto",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
    ],
    [
      "11:00",
      "Mark",
      "Otto",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
    ],
    [
      "11:00",
      "Mark",
      "Otto",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
      "@mdo",
    ],
  ];
  return (
    <div className="container-fluid dashboard-container">
      <div className="d-flex header align-items-center justify-content-between">
        <div className="title">Deposit Report</div>
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
            <span className="title username">Timothy</span>
            <img src="/assets/images/dropdown.svg" alt="" />
          </div>
        </div>
      </div>

      {/* content */}

      <div className="container-fluid p-0 d-flex justify-content-between align-items-end mt-4 flex-wrap">
        <div className="d-flex">
          <div className="pr-3 pt-3 pb-0">
            <div className="w-100 ml-1 input-title">FROM DATE</div>
            <Date width="300" />
          </div>
          <div className="p-3 pb-0">
            <div className="w-100 ml-1 input-title">END DATE</div>
            <Date width="300" />
          </div>
        </div>
        <div className="d-flex mt-4 mt-xl-0">
          <CustomButton
            btnText="PROCESS"
            bgColor="#4065FF"
            margin="0px 20px 0px 0px"
          />
          <CustomButton
            btnText="CLEAR"
            bgColor="#40BAFF"
            margin="0px 0px 0px 0px"
          />
        </div>
      </div>

      {/* tables */}

      <div className="my-5 table-overflow">
        <table className="table table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Credit</th>
              <th scope="col">Debit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>KP11</td>
              <td>John</td>
              <td>100,00</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositReport;
