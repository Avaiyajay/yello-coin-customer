import React, { useState } from "react";
import "./Navbar.css";
import tradeLogo from "./STOCK COIN LOGO-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faAngleDown,
  faEye,
  faDollarSign,
  faUser,
  faBook,
  faAddressBook,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState();

  const menuOpen = (currentSelectedItem) => {
    setSelectedTab(currentSelectedItem);
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column flex-lg-row justify-content-center">
        <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column fix">
          <Link to="/trade/trades-dashboard">
            <img
              src={tradeLogo}
              alt="Trade Logo"
              className="my-2 img-fluid"
              width="175"
              height=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border border-dark ${
                      selectedTab === "/dashboard"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar "
                    } focus-none mt-3 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/dashboard");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faArrowTrendUp}
                            color={
                              selectedTab === "/dashboard" ? "white" : "black"
                            }
                            className=""
                          />
                        </div>
                        <div className="col-8">Dashboard</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                              selectedTab === "/dashboard" ? "white" : "black"
                            }
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>

                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/dashboard" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/dashboard"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trades
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border border-dark ${
                      selectedTab === "/trades"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar "
                    } focus-none mt-3 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/trades");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0 ">
                          <FontAwesomeIcon
                            icon={faEye}
                            color={
                              selectedTab === "/trades" ? "white" : "black"
                            }
                            className=""
                          />
                        </div>
                        <div className="col-8">Trading</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                              selectedTab === "/trades" ? "white" : "black"
                            }
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/trades" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trades/watchlist"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Watchlist
                      </li>
                    </Link>
                    <Link
                      to="/trades/trading"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trades
                      </li>
                    </Link>
                    <Link
                      to="/trade/portfolio_position"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Portfolio/Position
                      </li>
                    </Link>
                    <Link
                      to="/trade/blocked_scripts"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Banned/Blocked Scripts
                      </li>
                    </Link>
                    <Link
                      to="/trades/transaction"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Transaction
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border border-dark ${
                      selectedTab === "/forex"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar "
                    } focus-none mt-3 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/forex");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            color={selectedTab === "/forex" ? "white" : "black"}
                            className=""
                          />
                        </div>
                        <div className="col-8">Forex/Comex</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={selectedTab === "/forex" ? "white" : "black"}
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/forex" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/watchlist-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Watchlist
                      </li>
                    </Link>
                    <Link
                      to="/trade/trades-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trades
                      </li>
                    </Link>
                    <Link
                      to="/trade/portfolio-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Portfolio/Position
                      </li>
                    </Link>
                    <Link
                      to="/trade/margin-forex"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Margin Management
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown ">
                  <button
                    className={`btn  height-navbar-button border border-dark ${
                      selectedTab === "/log"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar "
                    } focus-none mt-3 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/log");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faBook}
                            color={selectedTab === "/log" ? "white" : "black"}
                            className=""
                          />
                        </div>
                        <div className="col-8">Log</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={selectedTab === "/log" ? "white" : "black"}
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/log" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/trade-edit"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Trade Edit/ Delete Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/user-edit"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        User Edit Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/auto"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Auto Square Up Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/cross"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Cross Trade Log
                      </li>
                    </Link>
                    <Link
                      to="/trade/rejection"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Rejection Log
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <li>
                <div className=" ">
                  <button
                    className={`btn  height-navbar-button border border-dark ${
                      selectedTab === "/report"
                        ? "radius-navbar-remove bg-orange color-white border border-light"
                        : "radius-navbar "
                    } focus-none mt-3 p-0`}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      } else {
                        menuOpen("/report");
                      }
                    }}
                  >
                    <div className="container width-navbar-drop">
                      <div className="row">
                        <div className="col-2 p-0">
                          <FontAwesomeIcon
                            icon={faAddressBook}
                            color={
                              selectedTab === "/report" ? "white" : "black"
                            }
                            className=""
                          />
                        </div>
                        <div className="col-8">Report</div>
                        <div className="col-2">
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            color={
                              selectedTab === "/report" ? "white" : "black"
                            }
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                  <ul
                    className={`dropdown-menu dpdn-class ${
                      selectedTab !== "/report" ? "d-none" : "d-block"
                    } width-navbar-drop border-none bg-transparent m-0 p-0`}
                    aria-labelledby="dropdownMenuButton1"
                    onClick={() => {
                      if (selectedTab !== "") {
                        setSelectedTab("");
                      }
                    }}
                  >
                    <Link
                      to="/trade/trade-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-star">
                        Track Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/ledge-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Ledge Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/deposit-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Deposit Report
                      </li>
                    </Link>
                    <Link
                      to="/trade/trial"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start">
                        Trial Balances
                      </li>
                    </Link>
                    <Link
                      to="/trade/client-report"
                      className="text-start no-dec text-dark"
                    >
                      <li className="list-group-item no-dec text-start border-list-2">
                        Client Cr/Dr Report
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
              <Footer />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
