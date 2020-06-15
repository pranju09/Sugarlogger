import React from 'react';

export default function List({ filteredData }) {
  return (
    <div>
      <table className="patients-list">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Referrel</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {filteredData && filteredData.length ? (
            filteredData.map((patient, ind) => (
              <tr key={ind}>
                <td>{patient.date}</td>
                <td>{patient.name}</td>
                <td>{patient.mobile}</td>
                <td>{patient.referral}</td>
                <td>{patient.branch}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No Data Found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
