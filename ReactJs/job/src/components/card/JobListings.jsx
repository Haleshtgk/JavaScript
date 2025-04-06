import React from "react";
import "./JobListings.css"; 

const jobData = [
  {
    id: 1,
    title: "Software Development Engineer 1 (SDE-1)",
    company: "Flipkart",
    location: "Bengaluru",
    experience: "0-2 years",
    description:
      "Flipkart is hiring SDE-1 engineers to develop scalable and efficient systems, solve complex problems, and contribute to core tech innovations.",
    skills: ["Java", "DSA", "System Design"],
    responsibilities: [
      "Design OOP models and implement scalable business logic.",
      "Solve complex problems using strong DS & Algo skills.",
      "Work on real-world applications: supply chain, search, fraud detection, analytics, etc.",
      "Write clean, efficient, and maintainable code in Java/C++/Scala.",
    ],
    requirements: [
      "Strong problem-solving and coding skills.",
      "Excellent grasp of DS, Algorithms, and OOP concepts.",
      "Experience with at least one general-purpose programming language.",
      "Ability to handle abstract and real-world problems efficiently.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer || Capgemini Exceller 2024-25",
    company: "Capgemini",
    location: "PAN India",
    experience: "Fresher",
    description:
      "Capgemini is hiring top technical graduates to join as part of its Exceller program, where you'll work with diverse teams, cross-functional projects, and contribute to sustainable tech solutions.",
    skills: ["Java", "C++", "Problem Solving", "Software Development"],
    responsibilities: [
      "Contribute to a global business and technology team.",
      "Design, develop, and maintain core modules.",
      "Work on new and emerging technologies to solve customer problems.",
      "Develop scalable business logic and architecture.",
    ],
    requirements: [
      "Strong programming skills and ability to review complex code.",
      "Good analytical and problem-solving abilities.",
      "Willing to work in any Capgemini location and travel as required.",
      "Active DigiLocker account and Aadhar-linked mobile number required.",
    ],
  },
  {
    id: 3,
    title: "Software Developer - Virtual Drive",
    company: "Mallow Technologies",
    location: "Coimbatore/Karur, Tamil Nadu",
    experience: "Fresher",
    description:
      "Mallow Technologies is conducting a virtual drive for freshers to join as Software Developers. This role offers exciting opportunities to work on core software development projects.",
    skills: ["C", "C++", "Java", "Python"],
    responsibilities: [
      "Develop and maintain scalable applications.",
      "Collaborate with teams to optimize performance and security.",
      "Write clean, efficient, and maintainable code.",
      "Participate in debugging and troubleshooting issues.",
    ],
    requirements: [
      "Graduates from 2023, 2024, or 2025.",
      "BE/BTech, MCA, MSc (All Branches).",
      "Strong problem-solving and coding abilities.",
      "Must register by 31st March 2025 to attend the virtual drive on 5th April 2025.",
    ],
  },
];

const JobListings = () => {
  return (
    <div className="job-listings">
      {jobData.map((job) => (
        <div key={job.id} className="job-card">
          <h2>{job.title}</h2>
          <p className="company">{job.company}</p>
          <p className="location">{job.location} | {job.experience}</p>
          <p className="description">{job.description}</p>

          <h4>Skills Required:</h4>
          <ul className="skills">
            {job.skills.map((skill, index) => (
              <li key={index} className="skill-badge">{skill}</li>
            ))}
          </ul>

          <h4>Responsibilities:</h4>
          <ul>
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>

          <h4>Requirements:</h4>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
