import React, { useState } from "react";
import "./ResumeForm.css"; // Import CSS for styling

const ResumeGenerator = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "", phone: "" },
    education: { degree: "", institution: "", year: "" },
    skills: [],
    experience: { company: "", role: "", duration: "" },
    summary: "",
  });

  const [resumeType, setResumeType] = useState(""); // General or Specific
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState([
    "Personal Info",
    "Education",
    "Skills",
    "Summary",
  ]);

  // If the user selects "specific job," add Experience section
  const handleResumeTypeSelection = (type) => {
    setResumeType(type);
    setSections(
      type === "specific"
        ? ["Personal Info", "Education", "Skills", "Experience", "Summary"]
        : ["Personal Info", "Education", "Skills", "Summary"]
    );
  };

  // Function to update form data dynamically
  const handleChange = (section, key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [key]: value },
    }));
  };

  // Automatically recommend skills based on job selection
  const recommendSkills = () => {
    const suggestions = ["Problem-Solving", "Communication", "Leadership"];
    setFormData((prev) => ({
      ...prev,
      skills: suggestions,
    }));
  };

  // Generate summary dynamically
  const generateSummary = () => {
    setFormData((prev) => ({
      ...prev,
      summary: `Experienced in ${prev.skills.join(", ")} with a strong background in ${
        prev.education.degree
      }. Looking forward to contributing my expertise!`,
    }));
  };

  return (
    <div className="resume-container">
      {!resumeType ? (
        <div className="selection-screen">
          <h2>Select Resume Type</h2>
          <button onClick={() => handleResumeTypeSelection("general")}>
            General Resume
          </button>
          <button onClick={() => handleResumeTypeSelection("specific")}>
            Resume for Specific Job
          </button>
        </div>
      ) : (
        <div className="form-container">
          <h2>Resume Builder</h2>

          {/* Personal Info Section */}
          {currentSection === 0 && (
            <div className="section">
              <h3>Personal Info</h3>
              <input
                type="text"
                placeholder="Name"
                value={formData.personalInfo.name}
                onChange={(e) =>
                  handleChange("personalInfo", "name", e.target.value)
                }
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.personalInfo.email}
                onChange={(e) =>
                  handleChange("personalInfo", "email", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Phone"
                value={formData.personalInfo.phone}
                onChange={(e) =>
                  handleChange("personalInfo", "phone", e.target.value)
                }
              />
            </div>
          )}

          {/* Education Section */}
          {currentSection === 1 && (
            <div className="section">
              <h3>Education</h3>
              <input
                type="text"
                placeholder="Degree"
                value={formData.education.degree}
                onChange={(e) =>
                  handleChange("education", "degree", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Institution"
                value={formData.education.institution}
                onChange={(e) =>
                  handleChange("education", "institution", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Year"
                value={formData.education.year}
                onChange={(e) =>
                  handleChange("education", "year", e.target.value)
                }
              />
            </div>
          )}

          {/* Skills Section */}
          {currentSection === 2 && (
            <div className="section">
              <h3>Skills</h3>
              <button onClick={recommendSkills}>Recommend Skills</button>
              <ul>
                {formData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Experience Section (Only for Specific Job) */}
          {resumeType === "specific" && currentSection === 3 && (
            <div className="section">
              <h3>Experience</h3>
              <input
                type="text"
                placeholder="Company"
                value={formData.experience.company}
                onChange={(e) =>
                  handleChange("experience", "company", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Role"
                value={formData.experience.role}
                onChange={(e) =>
                  handleChange("experience", "role", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Duration"
                value={formData.experience.duration}
                onChange={(e) =>
                  handleChange("experience", "duration", e.target.value)
                }
              />
            </div>
          )}

          {/* Summary Section */}
          {currentSection === sections.length - 1 && (
            <div className="section">
              <h3>Summary</h3>
              <textarea
                value={formData.summary}
                readOnly
                placeholder="Your summary will be generated here..."
              />
              <button onClick={generateSummary}>Create Summary</button>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            {currentSection > 0 && (
              <button onClick={() => setCurrentSection(currentSection - 1)}>
                Previous
              </button>
            )}
            {currentSection < sections.length - 1 && (
              <button onClick={() => setCurrentSection(currentSection + 1)}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeGenerator;
