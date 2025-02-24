import React from "react";
import "./Certifications.css";

const Certifications = ({ formData, setFormData }) => {
  const handleChange = (e, index) => {
    const newCertifications = [...formData.certifications];
    newCertifications[index][e.target.name] = e.target.value;
    setFormData({ ...formData, certifications: newCertifications });
  };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [...(formData.certifications || []), { name: "", issuer: "", year: "" }],
    });
  };

  const removeCertification = (index) => {
    const newCertifications = formData.certifications.filter((_, i) => i !== index);
    setFormData({ ...formData, certifications: newCertifications });
  };

  return (
    <div className="section certifications-container">
      <h2>Certifications</h2>
      {formData.certifications && formData.certifications.map((certification, index) => (
        <div key={index} className="certification-item">
          <input
            type="text"
            name="name"
            placeholder="Certification Name"
            value={certification.name}
            onChange={(e) => handleChange(e, index)}
            className="certification-input"
          />
          <input
            type="text"
            name="issuer"
            placeholder="Issuer"
            value={certification.issuer}
            onChange={(e) => handleChange(e, index)}
            className="certification-input"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={certification.year}
            onChange={(e) => handleChange(e, index)}
            className="certification-input"
          />
          <button onClick={() => removeCertification(index)} className="certification-remove-btn">Remove</button>
        </div>
      ))}
      <button onClick={addCertification} className="certification-add-btn">Add Certification</button>
    </div>
  );
};

export default Certifications;
