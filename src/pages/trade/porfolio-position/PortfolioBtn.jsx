import React from "react";
import "./PortfolioPosition.css";

const PortfolioBtn = ({ text, color }) => {
  return (
    <>
      <div className="portfolio-btn" style={{ backgroundColor: color }}>
        {text}
      </div>
    </>
  );
};

export default PortfolioBtn;
