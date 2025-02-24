import React from "react";
import "./Projects.css";

const Projects = ({ formData, setFormData }) => {
  const handleChange = (e, index) => {
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [e.target.name]: e.target.value };
    setFormData({ ...formData, projects: newProjects });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...(formData.projects || []), { title: "", description: "" }],
    });
  };

  const removeProject = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
  };

  return (
    <div className="section projects-container">
      <h2>Projects</h2>
      {formData.projects && formData.projects.map((project, index) => (
        <div key={index} className="project-item">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => handleChange(e, index)}
            className="project-input"
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={(e) => handleChange(e, index)}
            className="project-textarea"
          />
          <button onClick={() => removeProject(index)} className="project-remove-btn">Remove</button>
        </div>
      ))}
      <button onClick={addProject} className="project-add-btn">Add Project</button>
    </div>
  );
};

export default Projects;
