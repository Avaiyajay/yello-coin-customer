import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Notifications = () => {
  return (
    <div className="dropdown bg-transparent">
      <Link
        className="btn focus-none"
        to="/"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <button
          type="button"
          className="position-relative border-none bg-transparent"
        >
          <FontAwesomeIcon
            icon={faBell}
            className="p-0 "
            size="2x"
            color="grey"
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3<span className="visually-hidden">unread messages</span>
          </span>
        </button>
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
  );
};

export default Notifications;
