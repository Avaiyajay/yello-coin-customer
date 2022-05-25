import React from "react";
import "./Table-trading.css";
import Pagination from "../Pagination/Pagination";

const Table = () => {
  return (
    <>
      <div className="table-responsive ">
        <table className="table my-5 table-borderless">
          <thead>
            <tr className="table-border-none">
              <th scope="col" className="bg-light ">
                D
              </th>
              <th scope="col" className="bg-light ">
                TIME
              </th>
              <th scope="col" className="bg-light ">
                MARKET
              </th>
              <th scope="col" className="bg-light ">
                SCRIPT
              </th>
              <th scope="col" className="bg-light ">
                B/S
              </th>
              <th scope="col" className="bg-light ">
                ORDER TYPE
              </th>
              <th scope="col" className="bg-light ">
                LOT
              </th>
              <th scope="col" className="bg-light ">
                QTY
              </th>
              <th scope="col" className="bg-light ">
                ORDER PRICE
              </th>
              <th scope="col" className="bg-light ">
                STATUS
              </th>
              <th scope="col" className="bg-light ">
                O.TIME
              </th>
              <th scope="col" className="bg-light ">
                MODIFY
              </th>
              <th scope="col" className="bg-light ">
                CANCEL
              </th>
            </tr>
          </thead>
          <tbody className="bg-primary">
            <tr className="bg-primary">
              <td className="text-light bg-primary">A</td>
              <td className="text-light bg-primary">09:31:45</td>
              <td className="text-light bg-primary">NSEFUT</td>
              <td className="text-light bg-primary">BANKNIFTY31MAR2022</td>
              <td className="text-light bg-primary">BUY</td>
              <td className="text-light bg-primary">BF</td>
              <td className="text-light bg-primary">1.0</td>
              <td className="text-light bg-primary">25</td>
              <td className="text-light bg-primary">35,558.800(35,558.800)</td>
              <td className="text-light bg-primary">EXECUTED</td>
              <td className="text-light bg-primary">26-03-2022 09:31:45</td>
              <td className="text-light bg-primary">NA</td>
              <td className="text-light bg-primary">NA</td>
            </tr>
            <tr className="">
              <td className="text-light bg-primary">A</td>
              <td className="text-light bg-primary">09:31:45</td>
              <td className="text-light bg-primary">NSEFUT</td>
              <td className="text-light bg-primary">NIFTY31MAR2022</td>
              <td className="text-light bg-primary">BUY</td>
              <td className="text-light bg-primary">BF</td>
              <td className="text-light bg-primary">2.0</td>
              <td className="text-light bg-primary">100</td>
              <td className="text-light bg-primary">17,19.050(17,19.050)</td>
              <td className="text-light bg-primary">EXECUTED</td>
              <td className="text-light bg-primary">26-03-2022 09:31:45</td>
              <td className="text-light bg-primary">NA</td>
              <td className="text-light bg-primary">NA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default Table;
