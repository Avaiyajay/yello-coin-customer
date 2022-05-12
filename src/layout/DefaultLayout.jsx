import React from "react";
import { Sidebar } from "../components/index";
import AppContent from "./AppContent";
import "./DefaultLayout.css";

const DefaultLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 restrict-width">
          <Sidebar />
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 increase-width">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
