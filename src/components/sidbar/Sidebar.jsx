import React from "react";
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
import { Link } from "react-router-dom";

const Sidebar = () => {
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
            <ul className="navbar-nav w-100 d-flex flex-md-column text-center text-md-end">
              <li>
                <div className="container-fluid my-2">
                  <Link to="/" className="text-decoration-none">
                    <div className="row height-button bg-orange navbar-border-radius">
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faArrowTrendUp}
                          color="white"
                          className="ps-2"
                        />
                      </div>
                      <div className="col-8 color-white my-3 text-center">
                        Dashboard
                      </div>
                      <div className="col-2 my-3 dropdown">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                        <div className="dropdown-content ">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/trades-dashboard"
                                className="text-start no-dec text-dark"
                              >
                                Trades
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/executed"
                                className="text-start no-dec text-dark"
                              >
                                Executed Options
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/running"
                                className="text-start no-dec text-dark"
                              >
                                Running Orders
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/summary"
                                className="text-start no-dec text-dark"
                              >
                                Summary Reports
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/m2m"
                                className="text-start no-dec text-dark"
                              >
                                M2M Alerts
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/user-dashboard"
                                className="text-start no-dec text-dark"
                              >
                                User
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/trade-entry"
                                className="text-start no-dec text-dark"
                              >
                                Trade Entry
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
                  <Link to="/trade" className="text-decoration-none">
                    <div className="row height-button bg-orange navbar-border-radius">
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faEye}
                          color="white"
                          className="ps-2"
                        />
                      </div>
                      <div className="col-8 color-white my-3 text-center">
                        Trading
                      </div>
                      <div className="col-2 my-3 dropdown border-none">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                        <div className="dropdown-content">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/watchlist-trading"
                                className="text-start no-dec text-dark"
                              >
                                Watchlist
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/trades-trading"
                                className="text-start no-dec text-dark"
                              >
                                Trades
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/portfolio-trading"
                                className="text-start no-dec text-dark"
                              >
                                Portfolio/Position
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/banned-trading"
                                className="text-start no-dec text-dark"
                              >
                                Banned/Blocked Scripts
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/margin-trading"
                                className="text-start no-dec text-dark"
                              >
                                Margin Management
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
                  <Link to="/forex" className="text-decoration-none">
                    <div className="row height-button bg-orange navbar-border-radius">
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faDollarSign}
                          color="white"
                          className="ps-2"
                        />
                      </div>
                      <div className="col-8 color-white my-3 text-center">
                        Forex
                      </div>
                      <div className="col-2 my-3 dropdown">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                        <div className="dropdown-content ">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/watchlist-forex"
                                className="text-start no-dec text-dark"
                              >
                                Watchlist
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/trades-forex"
                                className="text-start no-dec text-dark"
                              >
                                Trades
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/portfolio-forex"
                                className="text-start no-dec text-dark"
                              >
                                Portfolio/Position
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/margin-forex"
                                className="text-start no-dec text-dark"
                              >
                                Margin Management
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
                  <Link to="/report" className="text-decoration-none">
                    <div className="row height-button bg-orange navbar-border-radius">
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faAddressBook}
                          color="white"
                          className="ps-2"
                        />
                      </div>
                      <div className="col-8 color-white my-3 text-center">
                        Report
                      </div>
                      <div className="col-2 my-3 dropdown">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                        <div className="dropdown-content ">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/trade-report"
                                className="text-start no-dec text-dark"
                              >
                                Track Report
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/ledge-report"
                                className="text-start no-dec text-dark"
                              >
                                Ledge Report
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/deposit-report"
                                className="text-start no-dec text-dark"
                              >
                                Deposit Report
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/trial"
                                className="text-start no-dec text-dark"
                              >
                                Trial Balances
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/client-report"
                                className="text-start no-dec text-dark"
                              >
                                Client Cr/Dr Report
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
                  <Link to="/log" className="text-decoration-none">
                    <div className="row height-button bg-orange navbar-border-radius">
                      <div className="col-2 text-start my-3">
                        <FontAwesomeIcon
                          icon={faBook}
                          color="white"
                          className="ps-2"
                        />
                      </div>
                      <div className="col-8 color-white my-3 text-center">
                        Log
                      </div>
                      <div className="col-2 my-3 dropdown">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          color="white"
                          className=""
                        />
                        <div className="dropdown-content ">
                          <ul className="list-group bg-light navbar-border-radius-2">
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/trade-edit"
                                className="text-start no-dec text-dark"
                              >
                                Trade Edit/ Delete Log
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/user-edit"
                                className="text-start no-dec text-dark"
                              >
                                User Edit Log
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/auto"
                                className="text-start no-dec text-dark"
                              >
                                Auto Square Up Log
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/cross"
                                className="text-start no-dec text-dark"
                              >
                                Cross Trade Log
                              </Link>
                            </li>
                            <li className="list-group-item no-dec text-start">
                              <Link
                                to="/trade/rejection"
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
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
