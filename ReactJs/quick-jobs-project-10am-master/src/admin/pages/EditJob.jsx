import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById, updateJob } from '../../logic/adminLogic'; // Assuming logic for getting job and updating it

function EditJob() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({
    companyName: '',
    workplace: '',
    address: '',
    jobTitle: '',
    applicantName: '',
    phone: '',
    email: '',
    dob: '',
    availableDate: '',
  });

  useEffect(() => {
    const fetchedJob = getJobById(index); // Fetching the job details by index
    setJob(fetchedJob);
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateJob(index, job); // Update job details
    navigate('/admin'); // Redirect back to the admin dashboard after updating
  };

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  return (
    <div className="container p-3 p-md-5">
      <h1>Edit Job Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={job.companyName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Workplace</label>
          <input
            type="text"
            name="workplace"
            value={job.workplace}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={job.address}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={job.jobTitle}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Applicant Name</label>
          <input
            type="text"
            name="applicantName"
            value={job.applicantName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={job.phone}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={job.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={job.dob}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Available Date</label>
          <input
            type="date"
            name="availableDate"
            value={job.availableDate}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Job</button>
      </form>
    </div>
  );
}

export default EditJob;
