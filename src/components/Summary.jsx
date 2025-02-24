import React, { useState } from "react";
import "./Summary.css";

const Summary = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCs9ChKh57NEoO8HFiApP4ir-Qhm6_p6n4", // Replace with your actual API key
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Generate a professional career summary for a fresher with skills: ${formData.skills.join(
                      ", "
                    )}, and education: ${formData.degree} from ${formData.college}.`,
                  },
                ],
              },
            ],
          }),
        }
      );
      const data = await response.json();
      if (data.candidates && data.candidates.length > 0) {
        const summaryText = data.candidates[0].content.parts[0].text;
        setFormData({ ...formData, summary: summaryText });
      } else {
        console.error("Unexpected response structure:", data);
      }
    } catch (error) {
      console.error("Error generating summary:", error);
    }
    setLoading(false);
  };

  return (
    <div className="section summary-container">
      <h2>Executive Summary</h2>
      <textarea
        value={formData.summary || ""}
        placeholder="Career Summary"
        readOnly
      />
      <button onClick={generateSummary} disabled={loading}>
        {loading ? "Generating..." : "Create Summary"}
      </button>
    </div>
  );
};

export default Summary;
