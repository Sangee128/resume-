import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Welcome to Resume Builder</h1>
      <button className="create-resume-btn" onClick={() => navigate("/resume-form")}>
        Create Resume
      </button>
    </div>
  );
};

export default LandingPage;
