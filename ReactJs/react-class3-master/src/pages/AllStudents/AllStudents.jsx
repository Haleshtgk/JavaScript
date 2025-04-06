import React from 'react';
import StudentCard from '../../components/StudentCard/StudentCard';
import students from '../../data/resultData';

function AllStudents() {
  return (
    <div className="container">
      <h2>All Students</h2>
      {students.map((student) => (
        <StudentCard key={student.rollNumber} student={student} />
      ))}
    </div>
  );
}

export default AllStudents;
