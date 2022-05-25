import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import DemoImg from "./client.png";

const Detail_Table = () => {
  return (
    <>
      <div className="my-5 table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-muted">
                <div className="form-check">
                  <input
                    className="form-check-input focus-none"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    for="flexCheckDefault"
                  ></label>
                </div>
              </th>
              <th scope="col" className="text-muted">
                NAME
              </th>
              <th scope="col" className="text-muted">
                POSITION
              </th>
              <th scope="col" className="text-muted">
                COUNTRY
              </th>
              <th scope="col" className="text-muted">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row ">
                <div className="form-check ">
                  <input
                    className="form-check-input focus-none mt-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <td className="d-flex">
                <div>
                  <img src={DemoImg} alt="demo" width="50" height="50" />
                </div>
                <div className="ms-2">
                  <p className="m-0 p-0 ">Neil Sims</p>
                  <p className="m-0 p-0 fw-light">neil.sims@flowbite.com</p>
                </div>
              </td>
              <td className="align-middle">Front-end Developer</td>
              <td className="align-middle">United States</td>
              <td className="align-middle">
                <FontAwesomeIcon icon={faCircle} color="green" /> Active
              </td>
              <td className="align-middle">
                <button type="button" className="btn focus-none btn-secondary">
                  <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
                  Edit User
                </button>
              </td>
              <td className="align-middle">
                <button type="button" className="btn focus-none btn-danger ">
                  <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                  Delete User
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row ">
                <div className="form-check ">
                  <input
                    className="form-check-input focus-none mt-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <td className="d-flex">
                <div>
                  <img src={DemoImg} alt="demo" width="50" height="50" />
                </div>
                <div className="ms-2">
                  <p className="m-0 p-0 ">Neil Sims</p>
                  <p className="m-0 p-0 fw-light">neil.sims@flowbite.com</p>
                </div>
              </td>
              <td className="align-middle">Front-end Developer</td>
              <td className="align-middle">United States</td>
              <td className="align-middle">
                <FontAwesomeIcon icon={faCircle} color="green" /> Active
              </td>
              <td className="align-middle">
                <button type="button" className="btn focus-none btn-secondary">
                  <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
                  Edit User
                </button>
              </td>
              <td className="align-middle">
                <button type="button" className="btn focus-none btn-danger ">
                  <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                  Delete User
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row ">
                <div className="form-check ">
                  <input
                    className="form-check-input focus-none mt-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <td className="d-flex">
                <div>
                  <img src={DemoImg} alt="demo" width="50" height="50" />
                </div>
                <div className="ms-2">
                  <p className="m-0 p-0 ">Neil Sims</p>
                  <p className="m-0 p-0 fw-light">neil.sims@flowbite.com</p>
                </div>
              </td>
              <td className="align-middle">Front-end Developer</td>
              <td className="align-middle">United States</td>
              <td className="align-middle">
                <FontAwesomeIcon icon={faCircle} color="green" /> Active
              </td>
              <td className="align-middle">
                <button type="button" className="btn focus-none btn-secondary">
                  <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
                  Edit User
                </button>
              </td>
              <td className="align-middle">
                <button type="button" className="btn focus-none btn-danger ">
                  <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                  Delete User
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row ">
                <div className="form-check ">
                  <input
                    className="form-check-input focus-none mt-3"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <td className="d-flex">
                <div>
                  <img src={DemoImg} alt="demo" width="50" height="50" />
                </div>
                <div className="ms-2">
                  <p className="m-0 p-0 ">Neil Sims</p>
                  <p className="m-0 p-0 fw-light">neil.sims@flowbite.com</p>
                </div>
              </td>
              <td className="align-middle">Front-end Developer</td>
              <td className="align-middle">United States</td>
              <td className="align-middle">
                <FontAwesomeIcon icon={faCircle} color="green" /> Active
              </td>
              <td className="align-middle">
                <button type="button" className="btn focus-none btn-secondary">
                  <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
                  Edit User
                </button>
              </td>
              <td className="align-middle">
                <button type="button" className="btn focus-none btn-danger ">
                  <FontAwesomeIcon icon={faTrashCan} className="me-2" />
                  Delete User
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Detail_Table;
