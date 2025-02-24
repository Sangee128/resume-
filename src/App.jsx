import React, { useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import CustomSection from "./components/CustomSection";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState(() => {
    // Retrieve saved form data from localStorage or initialize an empty object
    const savedFormData = localStorage.getItem("formData");
    return savedFormData ? JSON.parse(savedFormData) : {};
  });

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    const saveFormData = setTimeout(() => {
      localStorage.setItem("formData", JSON.stringify(formData));
    }, 1000); // Save every 1 second

    // Clear timeout if the component is unmounted or formData changes
    return () => clearTimeout(saveFormData);
  }, [formData]);

  return (
    <div className="resume-builder">
      <h1>Resume Builder</h1>
      <PersonalInfo formData={formData} setFormData={setFormData} />
      <Education formData={formData} setFormData={setFormData} />
      <Skills formData={formData} setFormData={setFormData} />
      <Certifications formData={formData} setFormData={setFormData} />
      <Internships formData={formData} setFormData={setFormData} />
      <Projects formData={formData} setFormData={setFormData} /> {/* Add this line */}
      <Summary formData={formData} setFormData={setFormData} />

      <CustomSection sectionName="Experience" formData={formData} setFormData={setFormData} />
      <CustomSection sectionName="Languages" formData={formData} setFormData={setFormData} />
      <CustomSection sectionName="Volunteer Experience" formData={formData} setFormData={setFormData} />
      <CustomSection sectionName="Achievements and Awards" formData={formData} setFormData={setFormData} />
      <CustomSection sectionName="Portfolio" formData={formData} setFormData={setFormData} />
      
      <ResumePreview formData={formData} />
    </div>


  );
};

export default App;
