import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4 bg-white">
      <h2 className="text-xl font-bold text-green-700">{job.title}</h2>
      <h3 className="text-md text-gray-700">{job.company}</h3>
      <p className="text-gray-600">
        {job.location} | {job.Experience}
      </p>
      <p className="mt-2 text-gray-800">{job.subtitle}</p>
      <div className="mt-2">
        <strong>Skills Required:</strong>
        <div className="flex flex-wrap gap-2 mt-1">
          {job.SkillsRequired.map((skill, index) => (
            <span
              key={index}
              className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-2">
        <strong>Responsibilities:</strong>
        <ul className="list-disc list-inside text-gray-700">
          {job.Responsibilities.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <strong>Requirements:</strong>
        <ul className="list-disc list-inside text-gray-700">
          {job.Requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default JobCard;
