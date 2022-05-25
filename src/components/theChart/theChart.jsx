import React from "react";
import { Chart } from "react-charts";
import "./theChart.css";

const ChartComp = () => {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <Chart
              style={{
                height: "300px",
              }}
              data={data}
              axes={axes}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartComp;
