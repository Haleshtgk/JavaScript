import React from 'react';
import AssessmentTable from '../Assessment/AssessmentTable';
import MarksTable from '../marks/MarksTable';

function StudentCard({ student }) {
  return (
    <div className='card mb-4'>
      <div className="card-header">
        <h5>{student.name} ({student.rollNumber})</h5>
      </div>
      <div className="card-body">
        <p><b>Department:</b> {student.department}</p>
        <p><b>Year:</b> {student.year}</p>
        <p><b>CGPA:</b> {student.CGPA}</p>
        <p><b>Attendance:</b> {student.attendance}</p>
        <p><b>Grade:</b> {student.grade}</p>
        <p><b>Status:</b> {student.status}</p>
        
        <h6>Marks</h6>
        <MarksTable marks={student.marks} />

        <h6>Assessments</h6>
        <AssessmentTable assessments={student.assessments} />

  
      </div>
    </div>
  );
}

export default StudentCard;
