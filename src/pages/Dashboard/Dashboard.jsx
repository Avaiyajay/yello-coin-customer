import React from "react";
import Table from "../../components/table/Table";
import "./Dashboard.css";

const Dashboard = () => {
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
        <div className="title">Dashboard</div>
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
      {/* tables */}
      <div className="container-fluid p-0 mt-5">
        <div className="row overflow-x">
          <div className="col">
            <div className="title mb-4">Executed Order</div>
            <Table columns={executedColumns} rows={executedRows} />
          </div>
          <div className="col">
            <div className="title mb-4">Pending order</div>
            <Table columns={pendingOrderColumns} rows={pendingOrderRows} />
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 mt-5 mb-5">
        <div className="row overflow-x">
          <div className="col">
            <div className="title mb-3">Rejection Log</div>

            <Table columns={rejectionColumns} rows={rejectionRows} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
