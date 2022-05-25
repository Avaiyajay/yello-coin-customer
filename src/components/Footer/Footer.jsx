import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="my-5">
        <p className="text-center mt-2 mb-0">User's information</p>
        <button type="button" className="btn text-danger fs-5 w-100">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className=""
          />
          Logout
        </button>
      </div>
    </>
  );
};

export default Footer;
