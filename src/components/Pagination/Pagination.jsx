import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <>
      <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight">
          <div className="container float-end w-100">
            <nav aria-label="Page navigation example float-end">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link text-dark border-none mx-1" to="/">
                    Previous
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link text-dark border rounded border-dark"
                    to="/"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link text-dark border-none mx-1" to="/">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
