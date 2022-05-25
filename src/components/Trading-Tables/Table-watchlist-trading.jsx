import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Table-trading.css";

const Table = () => {
  return (
    <>
      <div className="table-responsive ">
        <table className="table my-5 table-borderless">
          <thead>
            <tr className="table-border-none">
              <th scope="col" className="bg-light ">
                NSEFUT SYM
              </th>
              <th scope="col" className="bg-light ">
                BIO RATE
              </th>
              <th scope="col" className="bg-light ">
                ASK RATE
              </th>
              <th scope="col" className="bg-light ">
                LTP
              </th>
              <th scope="col" className="bg-light ">
                CHANGE%
              </th>
              <th scope="col" className="bg-light ">
                NET CHANGE
              </th>
              <th scope="col" className="bg-light ">
                HIGH
              </th>
              <th scope="col" className="bg-light ">
                LOW
              </th>
              <th scope="col" className="bg-light ">
                OPEN
              </th>
              <th scope="col" className="bg-light ">
                CLOSE
              </th>
              <th scope="col" className="bg-light ">
                REMOVE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-danger color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-danger color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretDown} color="red" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-danger color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-danger color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretDown} color="red" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="td-border ">NIFTY 31MAR2022</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border  bg-primary color-white">17,518.00</td>
              <td className="td-border ">0.96</td>
              <td className="td-border ">
                <FontAwesomeIcon icon={faCaretUp} color="green" /> 148.95
              </td>
              <td className="td-border ">17,533.50</td>
              <td className="td-border ">17,436.05</td>
              <td className="td-border ">17,501.05</td>
              <td className="td-border ">17,368.05</td>
              <td className="td-border ">
                <button
                  type="button"
                  className="btn  mx-3 my-0 py-0 the-button"
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    color="red"
                    size="1x"
                    className="cross-size"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>      
    </>
  );
};

export default Table;
