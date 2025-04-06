import React from 'react';
import './assessmenttable.css';
function AssessmentTable({ assessments }) {
  return (
    <table border={1} className="w-100">
      <thead>
        <tr>
          <th>Type</th>
          <th>Subject</th>
          <th>Score</th>
          <th>Max Score</th>
        </tr>
      </thead>
      <tbody>
        {assessments.map((assessment, index) => (
          <tr key={index}>
            <td>{assessment.type}</td>
            <td>{assessment.subject}</td>
            <td>{assessment.score}</td>
            <td>{assessment.maxScore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AssessmentTable;
