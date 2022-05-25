import React from "react";

const Tablemargintrading = () => {
  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">NSEFUT</th>
            <th scope="col">MCXFUT</th>
            <th scope="col">NSEOPT</th>
            <th scope="col">GLOBAL</th>
            <th scope="col">NSEEQT</th>
            <th scope="col">TOTAL</th>
          </tr>
        </thead>
        <tbody className="bg-light">
          <tr>
            <td>ASD(158266)(M)</td>
            <td>10,000,000/10,000,000</td>
            <td>100/100</td>
            <td>1,000/1,000</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>10,001,100/10,001,100</td>
          </tr>
          <tr>
            <td>MESSI(461002)(U)</td>
            <td>10,000,000/10,000,000</td>
            <td>100/100</td>
            <td>1,000/1,000</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>10,001,100/10,001,100</td>
          </tr>
          <tr>
            <td>REKHA(777720)(M)</td>
            <td>10,000,000/10,000,000</td>
            <td>100/100</td>
            <td>1,000/1,000</td>
            <td>0/0</td>
            <td>0/0</td>
            <td>10,001,100/10,001,100</td>
          </tr>
        </tbody>
        <tfoot className="table-dark">
          <tr>
            <th scope="col" className="fw-normal">
              total
            </th>
            <th scope="col" className="fw-normal">
              10,100,000/1,000,000,000
            </th>
            <th scope="col" className="fw-normal">
              100/1,000,000,000
            </th>
            <th scope="col" className="fw-normal">
              101,000/1,000,000
            </th>
            <th scope="col" className="fw-normal">
              0/1,000,000,000
            </th>
            <th scope="col" className="fw-normal">
              0/1,000,000,000
            </th>
            <th scope="col" className="fw-normal">
              10,201,100/3,101,000,000
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Tablemargintrading;
