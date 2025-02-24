import React from "react";
import "./CustomSection.css";

const CustomSection = ({ formData, setFormData, sectionName }) => {
  const handleChange = (e, index) => {
    const newSections = [...formData[sectionName]];
    newSections[index] = { ...newSections[index], [e.target.name]: e.target.value };
    setFormData({ ...formData, [sectionName]: newSections });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      [sectionName]: [...(formData[sectionName] || []), { title: "", description: "" }],
    });
  };

  const removeSection = (index) => {
    const newSections = formData[sectionName].filter((_, i) => i !== index);
    setFormData({ ...formData, [sectionName]: newSections });
  };

  return (
    <div className="section custom-section-container">
      <h2>{sectionName}</h2>
      {formData[sectionName] && formData[sectionName].map((item, index) => (
        <div key={index} className="custom-section-item">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={item.title}
            onChange={(e) => handleChange(e, index)}
            className="custom-section-input"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={item.description}
            onChange={(e) => handleChange(e, index)}
            className="custom-section-textarea"
          />
          <button onClick={() => removeSection(index)} className="custom-section-remove-btn">Remove</button>
        </div>
      ))}
      <button onClick={addSection} className="custom-section-add-btn">Add {sectionName}</button>
    </div>
  );
};

export default CustomSection;
