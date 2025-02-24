import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ResumeDownload = ({ formData, selectedTemplate }) => {
  const downloadResume = () => {
    const input = document.querySelector(".resume-container");
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10, 180, 260);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="section">
      <button onClick={downloadResume}>Download Resume</button>
    </div>
  );
};

export default ResumeDownload;
