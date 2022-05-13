import React, { useEffect, useState } from "react";
import "./Sidebar.css";
// import tradeLogo from "./logo.svg";
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
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";

const Sidebar = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    routes.map((item) => {
      if (item.path === location.pathname) {
        setSelectedTab(item.name);
      }
    });
  }, [location]);

  return (
    <>
      <div className="container-fluid d-flex flex-column flex-lg-row">
        <nav className="navbar navbar-expand-md navbar-light d-flex flex-md-column">
          <Link to="/">
            <img
              src="/assets/images/logo.svg"
              alt="Trade Logo"
              width="130"
              height="80"
              className="my-2 mx-5"
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
            <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end mt-5">
              <li>
                <div className="container-fluid my-2">
                  <Link to="/" className="text-decoration-none">
                    <div
                      className={`row height-button  ${
                        selectedTab.toUpperCase() === "DASHBOARD"
                          ? "bg-orange"
                          : "bg-white"
                      }  navbar-border-radius`}
                    >
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faArrowTrendUp}
                          color={
                            selectedTab.toUpperCase() === "DASHBOARD"
                              ? "white"
                              : "black"
                          }
                          className="ps-2"
                        />
                      </div>
                      <div
                        className={`col-8 ${
                          selectedTab.toUpperCase() === "DASHBOARD"
                            ? "color-white"
                            : "color-black"
                        }  my-3 text-center`}
                      >
                        Dashboard
                      </div>
                      {/* <div className="col-2 my-3 dropdown">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color={
                            selectedTab.toUpperCase() === "DASHBOARD"
                              ? "white"
                              : "black"
                          }
                          className=""
                        />
                        <div className="dropdown-content "></div>
                      </div> */}
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <Link to="/trade/trades" className="text-decoration-none">
                    <div
                      className={`row height-button  ${
                        selectedTab.toUpperCase() === "TRADE"
                          ? "bg-orange"
                          : "bg-white"
                      }  navbar-border-radius`}
                    >
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faEye}
                          color={
                            selectedTab.toUpperCase() === "TRADE"
                              ? "white"
                              : "black"
                          }
                          className="ps-2"
                        />
                      </div>
                      <div
                        className={`col-8 ${
                          selectedTab.toUpperCase() === "TRADE"
                            ? "color-white"
                            : "color-black"
                        }  my-3 text-center`}
                      >
                        Trading
                      </div>
                      <div className="col-2 my-3 dropdown border-none">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color={
                            selectedTab.toUpperCase() === "TRADE"
                              ? "white"
                              : "black"
                          }
                          className=""
                        />
                        <div className="dropdown-content">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/watchlist"
                                className="text-start no-dec text-dark"
                              >
                                Watchlist
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/trades"
                                className="text-start no-dec text-dark"
                              >
                                Trades
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/portfolio_position"
                                className="text-start no-dec text-dark"
                              >
                                Portfolio/Position
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/blocked_scripts"
                                className="text-start no-dec text-dark"
                              >
                                Banned/Blocked Scripts
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <Link to="/forex/trades" className="text-decoration-none">
                    <div
                      className={`row height-button  ${
                        selectedTab.toUpperCase() === "FOREX"
                          ? "bg-orange"
                          : "bg-white"
                      }  navbar-border-radius`}
                    >
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faDollarSign}
                          color={
                            selectedTab.toUpperCase() === "FOREX"
                              ? "white"
                              : "black"
                          }
                          className="ps-2"
                        />
                      </div>
                      <div
                        className={`col-8 ${
                          selectedTab.toUpperCase() === "FOREX"
                            ? "color-white"
                            : "color-black"
                        }  my-3 text-center`}
                      >
                        Forex
                      </div>
                      <div className="col-2 my-3 dropdown">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color={
                            selectedTab.toUpperCase() === "FOREX"
                              ? "white"
                              : "black"
                          }
                          className=""
                        />
                        <div className="dropdown-content ">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/forex/watchlist"
                                className="text-start no-dec text-dark"
                              >
                                Watchlist
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/forex/trades"
                                className="text-start no-dec text-dark"
                              >
                                Trades
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/forex/portfolio_position"
                                className="text-start no-dec text-dark"
                              >
                                Portfolio/Position
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <Link
                    to="/report/ledgeReport"
                    className="text-decoration-none"
                  >
                    <div
                      className={`row height-button  ${
                        selectedTab.toUpperCase() === "REPORT"
                          ? "bg-orange"
                          : "bg-white"
                      }  navbar-border-radius`}
                    >
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faAddressBook}
                          color={
                            selectedTab.toUpperCase() === "REPORT"
                              ? "white"
                              : "black"
                          }
                          className="ps-2"
                        />
                      </div>
                      <div
                        className={`col-8 ${
                          selectedTab.toUpperCase() === "REPORT"
                            ? "color-white"
                            : "color-black"
                        }  my-3 text-center`}
                      >
                        Report
                      </div>
                      <div className="col-2 my-3 dropdown">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color={
                            selectedTab.toUpperCase() === "REPORT"
                              ? "white"
                              : "black"
                          }
                          className=""
                        />
                        <div className="dropdown-content ">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/report/ledgeReport"
                                className="text-start no-dec text-dark"
                              >
                                Ledge Report
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/report/depositReport"
                                className="text-start no-dec text-dark"
                              >
                                Deposit Report
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
              <li>
                <div className="container-fluid my-2">
                  <Link
                    to="/log/editDeleteLog"
                    className="text-decoration-none"
                  >
                    <div
                      className={`row height-button  ${
                        selectedTab.toUpperCase() === "LOG"
                          ? "bg-orange"
                          : "bg-white"
                      }  navbar-border-radius`}
                    >
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faBook}
                          color={
                            selectedTab.toUpperCase() === "LOG"
                              ? "white"
                              : "black"
                          }
                          className="ps-2"
                        />
                      </div>
                      <div
                        className={`col-8 ${
                          selectedTab.toUpperCase() === "LOG"
                            ? "color-white"
                            : "color-black"
                        }  my-3 text-center`}
                      >
                        Log
                      </div>
                      <div className="col-2 my-3 dropdown">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color={
                            selectedTab.toUpperCase() === "LOG"
                              ? "white"
                              : "black"
                          }
                          className=""
                        />
                        <div className="dropdown-content ">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/log/editDeleteLog"
                                className="text-start no-dec text-dark"
                              >
                                Trade Edit/ Delete Log
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/log/rejectionLog"
                                className="text-start no-dec text-dark"
                              >
                                Rejection Log
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
              <li className="logout-wrapper">
                <div className="d-flex justify-content-center mt-3 ">
                  <img src="/assets/images/logout.svg" alt="" />
                  <span className="logout-text">Logout</span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="d-flex justify-content-center mt-3 logout">
          <img src="/assets/images/logout.svg" alt="" />
          <span className="logout-text">Logout</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
