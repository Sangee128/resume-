import React, { useState, useEffect } from "react";
import "./Skills.css";

const skillsList = [
  "JavaScript", "React.js", "Node.js", "Python", "Machine Learning",
  "Data Science", "Cybersecurity", "Cloud Computing", "IoT", "AI",
  "HTML", "CSS", "SQL", "Java", "C#", "Docker", "Kubernetes",
  "AWS", "Azure", "GCP", "DevOps", "Agile Methodologies", "Scrum",
  "Project Management", "Communication", "Problem Solving",
  "Team Leadership", "Networking"
];

const Skills = ({ formData, setFormData }) => {
  const [selectedSkill, setSelectedSkill] = useState("");

  // Ensure formData.skills is always an array
  useEffect(() => {
    if (!formData.skills) {
      setFormData({ ...formData, skills: [] });
    }
  }, [formData, setFormData]);

  // Function to add a skill
  const addSkill = () => {
    if (selectedSkill.trim() !== "" && !formData.skills.includes(selectedSkill)) {
      setFormData({ ...formData, skills: [...formData.skills, selectedSkill] });
    }
    setSelectedSkill("");
  };

  // Function to remove a skill
  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  return (
    <div className="section">
      <h2>Skills</h2>

      {/* Dropdown for Skills */}
      <div className="skill-dropdown">
        <select value={selectedSkill} onChange={(e) => setSelectedSkill(e.target.value)}>
          <option value="">Select a skill</option>
          {skillsList.map((skill, index) => (
            <option key={index} value={skill}>
              {skill}
            </option>
          ))}
        </select>
        <button onClick={addSkill} className="add-skill-btn">Add Skill</button>
      </div>

      {/* Display Selected Skills */}
      <div className="selected-skills">
        {formData.skills && formData.skills.length > 0 ? (
          formData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}{" "}
              <button className="remove-skill" onClick={() => removeSkill(skill)}>
                ✕
              </button>
            </span>
          ))
        ) : (
          <p>No skills added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
