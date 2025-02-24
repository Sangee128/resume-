import React from "react";
import "./Internships.css";

const Internships = ({ formData, setFormData }) => {
  const handleChange = (e, index) => {
    const newInternships = [...formData.internships];
    newInternships[index][e.target.name] = e.target.value;
    setFormData({ ...formData, internships: newInternships });
  };

  const addInternship = () => {
    setFormData({
      ...formData,
      internships: [...(formData.internships || []), { company: "", role: "" }],
    });
  };

  const removeInternship = (index) => {
    const newInternships = formData.internships.filter((_, i) => i !== index);
    setFormData({ ...formData, internships: newInternships });
  };

  return (
    <div className="section internships-container">
      <h2>Internships</h2>
      {formData.internships && formData.internships.map((internship, index) => (
        <div key={index} className="internship-item">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={internship.company}
            onChange={(e) => handleChange(e, index)}
            className="internship-input"
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={internship.role}
            onChange={(e) => handleChange(e, index)}
            className="internship-input"
          />
          <button onClick={() => removeInternship(index)} className="internship-remove-btn">Remove</button>
        </div>
      ))}
      <button onClick={addInternship} className="internship-add-btn">Add Internship</button>
    </div>
  );
};

export default Internships;
