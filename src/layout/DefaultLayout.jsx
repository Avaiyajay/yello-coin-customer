import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AppContent from "./AppContent";

const DefaultLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 border-end border-warning">
          <Navbar />
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
