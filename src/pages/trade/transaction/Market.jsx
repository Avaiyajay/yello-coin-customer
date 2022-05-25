import React from "react";

const Market = () => {
  return (
    <>
      <div className="d-flex mb-2">
        <div>
          <label htmlFor="">Units</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">$ Risk</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">% Risk</label>
          <input type="number" />
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-between mb-2">
        <div className="d-flex flex-column align-items-center">
          <div>
            <input type="checkbox" />
            <span>Take Profit</span>
          </div>
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>
        <div className="d-flex flex-column">
          <div>3</div>
          <div>Tkks</div>
          <div>Price</div>
          <div>5</div>
          <div>%</div>
        </div>
        <div className="d-flex flex-column">
          <div>
            <input type="checkbox" />
            <span>Take Profit</span>
          </div>
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
        </div>
      </div>

      <button className="w-100 rounded-1 p-2 my-3 bg-danger">Submit</button>
    </>
  );
};

export default Market;
