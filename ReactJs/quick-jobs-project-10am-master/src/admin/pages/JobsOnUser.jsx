import React, { useEffect, useState } from 'react';

function JobsOnUser() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Retrieve stored jobs from localStorage
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || []; 
    setJobs(storedJobs); // Update state with jobs from localStorage
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Available Jobs</h2>
      {
        jobs.length === 0 ? (
          <div className="text-center text-muted">
            <i className="bi bi-ban fs-1"></i>
            <p className="fs-5">No jobs found</p>
          </div>
        ) : (
          <div className="row g-4">
            {jobs.map((job, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title">{job.jobTitle}</h5>
                    <p className="card-text">
                      <strong>Location:</strong> {job.address}<br />
                      <strong>Phone:</strong> {job.phone}<br />
                      <strong>Email:</strong> {job.email}<br />
                      <strong>Available from:</strong> {job.availableDate}
                    </p>
                    <a href="#" className="btn btn-dark btn-sm mt-2">Apply Now</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}

export default JobsOnUser;
