import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <div className="section personal-info">
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.personalInfo?.name || ""}
        onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, name: e.target.value } })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.personalInfo?.email || ""}
        onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, email: e.target.value } })}
      />
      <input
        type="text"
        placeholder="Phone"
        value={formData.personalInfo?.phone || ""}
        onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, phone: e.target.value } })}
      />
      <input
        type="text"
        placeholder="LinkedIn Profile"
        value={formData.personalInfo?.linkedin || ""}
        onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, linkedin: e.target.value } })}
      />
      <input
        type="text"
        placeholder="GitHub Profile"
        value={formData.personalInfo?.github || ""}
        onChange={(e) => setFormData({ ...formData, personalInfo: { ...formData.personalInfo, github: e.target.value } })}
      />
    </div>
  );
};

export default PersonalInfo;
