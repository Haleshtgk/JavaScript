import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      {/* Welcome Banner */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Welcome to Our Job Portal</h1>
        <p className="lead text-muted">Connecting the best talent with the right opportunities.</p>
        <Link to="/jobs" className="btn btn-warning btn-lg mt-3">
          View All Jobs
        </Link>
      </div>

      {/* About Us Section */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg border-light">
            <div className="card-body">
              <h3 className="card-title text-info">About Us</h3>
              <p className="card-text text-dark">
                We are a platform that helps job seekers and employers connect effortlessly.
                Our goal is to provide a smooth and efficient job search experience. Whether you're looking for a job or hiring someone, we make it easier.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow-lg border-light">
            <div className="card-body">
              <h3 className="card-title text-info">How We Help</h3>
              <p className="card-text text-dark">
                We provide job listings, allow employers to post jobs, and give applicants the chance to apply for jobs easily.
                With a user-friendly interface, you'll find the perfect fit for your career or talent needs in no time!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="text-center mb-5 bg-light py-4 rounded">
        <h3 className="text-success mb-3">Contact Information</h3>
        <p>If you have any questions or need help, feel free to reach out!</p>
        <ul className="list-unstyled">
          <li>Email: <a href="mailto:support@jobportal.com" className="text-primary">support@jobportal.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="text-primary">+1 234 567 890</a></li>
          <li>Address: 1234 Job St, Talent City, Country</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="mb-4 text-dark">Start Your Career Today!</h3>
        <Link to="/jobs" className="btn btn-primary btn-lg px-5">
          Browse Jobs Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
