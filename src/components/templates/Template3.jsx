import React from "react";
import "./Template3.css";

const Template3 = ({ formData }) => {
  return (
    <div className="resume-template3">
      <header className="template3-header">
        {formData.personalInfo && formData.personalInfo.name && (
          <>
            <h1>{formData.personalInfo.name}</h1>
            <p>{formData.personalInfo.email} | {formData.personalInfo.phone} | {formData.personalInfo.linkedin}</p>
          </>
        )}
      </header>

      {formData.summary && (
        <section className="template3-section">
          <h2>Summary</h2>
          <p>{formData.summary}</p>
        </section>
      )}

      {formData.education && formData.education.length > 0 && (
        <section className="template3-section">
          <h2>Education</h2>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree} - {edu.institution}</h3>
              <p>{edu.year}</p>
            </div>
          ))}
        </section>
      )}

      {formData.skills && formData.skills.length > 0 && (
        <section className="template3-section">
          <h2>Skills</h2>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {formData.projects && formData.projects.length > 0 && (
        <section className="template3-section">
          <h2>Projects</h2>
          {formData.projects.map((project, index) => (
            <div key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </section>
      )}

      {formData.internships && formData.internships.length > 0 && (
        <section className="template3-section">
          <h2>Internships</h2>
          {formData.internships.map((intern, index) => (
            <div key={index}>
              <h3>{intern.company}</h3>
              <p>{intern.role} | {intern.duration}</p>
            </div>
          ))}
        </section>
      )}

      {formData.certifications && formData.certifications.length > 0 && (
        <section className="template3-section">
          <h2>Certifications</h2>
          {formData.certifications.map((cert, index) => (
            <div key={index}>
              <h3>{cert.name}</h3>
              <p>{cert.issuer} | {cert.year}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Template3;
