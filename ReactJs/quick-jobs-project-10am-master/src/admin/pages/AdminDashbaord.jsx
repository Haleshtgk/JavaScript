import React, { useEffect, useState } from 'react';
import { getAllJobs } from '../../logic/adminLogic';

function AdminDashboard() {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    setAllJobs(getAllJobs());
  }, []);

  return (
    <div className="container p-3 p-md-5">
      <div className="d-flex gap-3 justify-content-between align-items-center">
        <h1 className="fs-5">Admin Dashboard</h1>
        <a href="/create/job" className="btn btn-dark">Create Job</a>
      </div>
      <hr />

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>SI.NO</th>
            <th>Company</th>
            <th>Workplace</th>
            <th>Address</th>
            <th>Job Title</th>
            <th>Applicant Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Available Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            allJobs.length === 0 ? (
              <tr>
                <td colSpan={11} className="text-center">
                  <h1 className="m-0 fs-1"><i className="bi bi-ban text-secondary"></i></h1>
                  <p className="m-0 fs-5">No jobs found</p>
                </td>
              </tr>
            ) : (
              allJobs.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.companyName}</td>
                  <td>{item.workplace}</td>
                  <td>{item.address}</td>
                  <td>{item.jobTitle}</td>
                  <td>{item.applicantName}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                  <td>{item.availableDate}</td>
                  <td className="d-flex gap-2">
                    <a href={`/admin/view/job/${index}`} className="btn btn-dark btn-sm"><i className="bi bi-eye"></i></a>
                    <a href="/admin/edit/job" className="btn btn-dark btn-sm"><i className="bi bi-pencil"></i></a>
                    <button className="btn btn-danger btn-sm"><i className="bi bi-trash"></i></button>
                  </td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
