import React, { useState } from 'react';

function Jobcreate() {
  const [form, setForm] = useState({
    companyName: '',
    workplace: '',
    address: '',
    jobTitle: '',
    applicantName: '',
    phone: '',
    email: '',
    dob: '',
    employedBefore: 'No',
    employmentDetails: '',
    availableDate: '',
    weekends: 'No',
    relatedToEmployee: 'No',
    relatedName: '',
    criminalRecord: 'No',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(form); // or send to API/localStorage
  //   alert("Form submitted!");
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  //   const updatedJobs = [...existingJobs, form];
  //   localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    
  //   alert("Form submitted and saved!");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Safely read from localStorage
    let existingJobs = [];
  
    try {
      const storedJobs = localStorage.getItem("jobs");
      if (storedJobs) {
        existingJobs = JSON.parse(storedJobs);
      }
    } catch (err) {
      console.error("Error parsing localStorage data:", err);
    }
  
    // Add new job entry
    const updatedJobs = [...existingJobs, form];
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  
    alert("Form submitted and saved!");
  };
  
  

  return (
    <div className="container p-4">
      <h4 className="mb-3">Employer Information</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Company Name</label>
          <input type="text" className="form-control" name="companyName" value={form.companyName} onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>Workplace</label>
          <input type="text" className="form-control" name="workplace" value={form.workplace} onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>Address, India</label>
          <input type="text" className="form-control" name="address" value={form.address} onChange={handleChange} />
        </div>

        <div className="form-group mb-4">
          <label>Job Title</label>
          <input type="text" className="form-control" name="jobTitle" value={form.jobTitle} onChange={handleChange} />
        </div>

        <h4 className="mb-3">Applicant's Personal Information</h4>

        <div className="form-group mb-3">
          <label>Full Name</label>
          <input type="text" className="form-control" name="applicantName" value={form.applicantName} onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>Phone Number</label>
          <input type="text" className="form-control" name="phone" value={form.phone} onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>Email Address (Optional)</label>
          <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>Date of Birth</label>
          <input type="date" className="form-control" name="dob" value={form.dob} onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>Have you ever been employed here before?</label>
          <select className="form-select" name="employedBefore" value={form.employedBefore} onChange={handleChange}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {form.employedBefore === 'Yes' && (
          <div className="form-group mb-3">
            <label>If yes, give dates and positions</label>
            <input type="text" className="form-control" name="employmentDetails" value={form.employmentDetails} onChange={handleChange} />
          </div>
        )}

        <div className="form-group mb-3">
          <label>Date available for work</label>
          <input type="date" className="form-control" name="availableDate" value={form.availableDate} onChange={handleChange} />
        </div>

        <div className="form-group mb-3">
          <label>Are you available to work on weekends?</label>
          <select className="form-select" name="weekends" value={form.weekends} onChange={handleChange}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>Are you related to anyone in our company?</label>
          <select className="form-select" name="relatedToEmployee" value={form.relatedToEmployee} onChange={handleChange}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {form.relatedToEmployee === 'Yes' && (
          <div className="form-group mb-3">
            <label>If yes, please state name</label>
            <input type="text" className="form-control" name="relatedName" value={form.relatedName} onChange={handleChange} />
          </div>
        )}

        <div className="form-group mb-4">
          <label>Have you ever been convicted of a criminal offense?</label>
          <select className="form-select" name="criminalRecord" value={form.criminalRecord} onChange={handleChange}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <button type="submit" className="btn btn-dark px-4">Submit</button>
      </form>
    </div>
  );
}

export default Jobcreate;
