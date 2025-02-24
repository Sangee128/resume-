import React from "react";
import "./Education.css";

const Education = ({ formData, setFormData }) => {
  const handleChange = (e, index) => {
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [e.target.name]: e.target.value };
    setFormData({ ...formData, education: newEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...(formData.education || []), { degree: "", institution: "", year: "", cgpa: "" }],
    });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  return (
    <div className="section education-container">
      <h2>Education</h2>
      {formData.education && formData.education.map((edu, index) => (
        <div key={index} className="education-item">
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            name="institution"
            placeholder="College/University"
            value={edu.institution}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            name="year"
            placeholder="Year of Graduation"
            value={edu.year}
            onChange={(e) => handleChange(e, index)}
          />
          <input
            type="text"
            name="cgpa"
            placeholder="CGPA"
            value={edu.cgpa}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => removeEducation(index)} className="education-remove-btn">Remove</button>
        </div>
      ))}
      <button onClick={addEducation} className="education-add-btn">Add Education</button>
    </div>
  );
};

export default Education;
