import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components";
import routes from "../routes";

const AppContent = () => {
  return (
    <Routes>
      {routes.map((route, idx) => {
        return (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={
                // <PrivateRoute>
                <route.element />
                // </PrivateRoute>
              }
            />
          )
        );
      })}
    </Routes>
  );
};

export default AppContent;
