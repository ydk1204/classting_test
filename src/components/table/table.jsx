import React from "react";

const Table = ({ tableHead, resultData }) => {
  return (
    <div className="flex justify-center w-full">
      <table>
        <thead>
          <tr>
            {tableHead.map((titles, index) => (
              <th key={index}>{titles}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {resultData &&
              resultData.map((reulstValues, index) => (
                <td key={index}>{reulstValues}</td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
