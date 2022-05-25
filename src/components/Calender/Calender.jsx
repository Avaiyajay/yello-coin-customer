import React from "react";
import "./Calender.css";

const Calender = () => {
  const handledemo = () => {
    console.log("first");
  };

  return (
    <>
      <input
        type="date"
        className="bg-orange color-white w-100 height-button border-none px-3 fs-5 cursor"
        onChange={handledemo}
      />
    </>
  );
};

export default Calender;
