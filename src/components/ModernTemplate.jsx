import React from 'react';
import './ModernTemplate.css'; // Import your CSS file

function ModernTemplate({ formData }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="modern-template">
      <div className="header">
        <h1>{formData.personalInfo?.name || "Your Name"}</h1>
        <h2>{formData.personalInfo?.title || "Your Title"}</h2>
        <div className="contact-info">
          <p>{formData.personalInfo?.email || "Your Email"}</p>
          <p>{formData.personalInfo?.phone || "Your Phone"}</p>
          <p>{formData.personalInfo?.linkedin || "Your LinkedIn"}</p>
          <p>{formData.personalInfo?.location || "Your Location"}</p>
          <p>{formData.personalInfo?.portfolio || "Your Portfolio"}</p>
        </div>
      </div>

      <div className="section">
        <h3>Summary</h3>
        <p>{formData.summary?.text || "No summary added yet."}</p>
      </div>

      <div className="section">
        <h3>Work Experience</h3>
        {formData.workExperience?.length > 0 ? (
          formData.workExperience.map((exp) => (
            <div key={exp.id} className="experience">
              <h4>{exp.jobTitle}</h4>
              <p>{exp.company}</p>
              <p>{formatDate(exp.startDate)} - {formatDate(exp.endDate) || "Present"}</p>
              <ul>
                {exp.responsibilities?.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No work experience added yet.</p>
        )}
      </div>

      <div className="section">
        <h3>Education</h3>
        {formData.education?.length > 0 ? (
          formData.education.map((edu) => (
            <div key={edu.id} className="education">
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
              <p>{formatDate(edu.startDate)} - {formatDate(edu.endDate) || "Present"}</p>
            </div>
          ))
        ) : (
          <p>No education added yet.</p>
        )}
      </div>

      <div className="section">
        <h3>Skills</h3>
        <ul className="skills-list">
          {formData.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          )) || <p>No skills added yet.</p>}
        </ul>
      </div>

      <div className="section">
        <h3>Projects</h3>
        {formData.projects?.length > 0 ? (
          formData.projects.map((project) => (
            <div key={project.id} className="project">
              <h4>{project.projectName}</h4>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies}</p>
              {project.githubLink && <p><a href={project.githubLink} target="_blank" rel="noopener noreferrer">{project.githubLink}</a></p>}
            </div>
          ))
        ) : (
          <p>No projects added yet.</p>
        )}
      </div>
    </div>
  );
}

export default ModernTemplate;