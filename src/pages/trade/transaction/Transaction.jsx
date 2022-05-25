import React from "react";
import Market from "./Market";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div className="content border mt-5">
      <div className="d-flex justify-content-between">
        <div className="bg-danger flex-grow-1 p-3">
          <div>Buy</div>
          <div>139.00</div>
        </div>
        <div className="bg-secondary flex-grow-1 d-flex justify-content-end p-3">
          <div>
            <div>Sell</div>
            <div>139.00</div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-evenly text-center">
        <div className="flex-grow-1 py-3">Market</div>
        {/* <div className="flex-grow-1 py-3">Limit</div>
        <div className="flex-grow-1 py-3">Stop</div>
        <div className="flex-grow-1 py-3">Stop Limit</div> */}
      </div>

      <div className="my-3">
        <Market />
      </div>
    </div>
  );
};

export default Transaction;
