import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const UserLogo = () => {
  return (
    <div className="d-flex justify-content-strat">
      <FontAwesomeIcon icon={faCircleUser} size="2x" className="mt-1" />
      <div className="dropdown ms-1 bg-transparent">
        <Link
          className="btn fw-bold focus-none"
          to="/"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Timothy
          <span className="ps-2">
            <FontAwesomeIcon icon={faAngleDown} className="fw-bold" />
          </span>
        </Link>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <Link className="dropdown-item" to="/">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Another action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Something else here
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserLogo;
