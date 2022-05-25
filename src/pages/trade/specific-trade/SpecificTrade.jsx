import React from "react";

import Fade from "react-reveal/Fade";
import { Link, useParams } from "react-router-dom";
import "./SpecificTrade.css";

const SpecificTrade = () => {
  const { trade_identifier } = useParams();
  return (
    <Fade top right>
      <div className="container-fluid">
        <div className="row mb-5 mt-3">
          <div className="col-3 fw-bold text-start p-0">
            <Link to="/trades/watchlist">
              <button
                type="button"
                className="btn btn-secondary text-center btn-lg fs-6 focus-none"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-5 graph d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12">{trade_identifier} Graph</div>
        </div>
      </div>
    </Fade>
  );
};

export default SpecificTrade;
