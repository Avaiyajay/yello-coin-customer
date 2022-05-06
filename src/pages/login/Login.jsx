import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container-fluid vh-100 p-0 d-flex flex-column">
      <div className="row row-cols-3 m-0">
        <div className="col">
          <img
            src="/assets/images/login-top-left.svg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col"></div>
        <div className="col">
          <img
            src="/assets/images/login-top-right.svg"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div className="row row-cols-3 m-0 flex-grow-1">
        <div className="col p-0">
          <div className="left-bar float-start bar"></div>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <div className="logo">
            <img
              src="/assets/images/logo.svg"
              className="img-fluid login-logo"
              alt=""
            />
          </div>
          <div className="mt-5">
            <form action="">
              <div className="position-relative d-flex align-items-center">
                <div className="text-field border border-secondary"></div>
                <img
                  src="/assets/images/useridicon.svg"
                  className="icon"
                  alt=""
                />
                <input
                  type="text"
                  className="icon placeholder"
                  placeholder="Enter User ID"
                />
              </div>
              <div className="position-relative d-flex align-items-center mt-4">
                <div className="text-field border border-secondary"></div>
                <img src="/assets/images/lock.svg" className="icon" alt="" />
                <input
                  type="password"
                  className="icon placeholder"
                  placeholder="Enter Password"
                />
              </div>
              <div className="d-flex justify-content-center mt-5">
                <button className="submit-btn" type="submit">
                  <span className="signin-text">sign in</span>
                </button>
              </div>
            </form>
          </div>
          <div className="md:align-self-start mt-5">
            <p className="info mt-3">No real money involved.</p>
            <p className="extra-info">
              This is a Virtual Trading Application which has all the features
              to trade.
            </p>
          </div>
        </div>
        <div className="col p-0">
          <div className="right-bar float-end bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
