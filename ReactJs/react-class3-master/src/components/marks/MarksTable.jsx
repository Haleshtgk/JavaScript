import React from 'react';
import './markstable.css';
function MarksTable({ marks }) {
  return (
    <table border={1} className="w-100">
      <thead>
        <tr>
          <th>Subject</th>
          <th>Midterm</th>
          <th>Final</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(marks).map((subject, index) => (
          <tr key={index}>
            <td>{subject}</td>
            <td>{marks[subject].midterm}</td>
            <td>{marks[subject].final}</td>
            <td>{marks[subject].total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MarksTable;
