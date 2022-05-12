import React from "react";

const Table = ({ columns, rows }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((item) => (
            <th scope="col">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          return (
            <tr>
              {row.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
