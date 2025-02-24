import React, { useState, useRef, useEffect } from 'react';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import Template5 from './templates/Template5';
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './ResumePreview.css';

const ResumePreview = ({ formData }) => {
  const templates = [Template1, Template2, Template3, Template4, Template5];
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const resumeRef = useRef();

  const handleNext = () => {
    setCurrentTemplate((prev) => (prev + 1) % templates.length);
  };

  const handlePrev = () => {
    setCurrentTemplate((prev) => (prev - 1 + templates.length) % templates.length);
  };

  const downloadResume = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth - 10; // Reduced margin for PDF
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (imgHeight > pdfHeight) {
        const scale = pdfHeight / imgHeight;
        pdf.addImage(imgData, 'PNG', 5, 5, imgWidth * scale, imgHeight * scale);
      } else {
        pdf.addImage(imgData, 'PNG', 5, 5, imgWidth, imgHeight);
      }

      pdf.save('resume.pdf');
    }).catch((error) => {
      console.error('Error generating PDF:', error);
    });
  };

  useEffect(() => {
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', downloadResume);
    }

    return () => {
      if (downloadBtn) {
        downloadBtn.removeEventListener('click', downloadResume);
      }
    };
  }, []);

  const SelectedTemplate = templates[currentTemplate];

  return (
    <div className="resume-preview-container">
      <h2>Resume Preview</h2>
      <div className="carousel">
        <button className="carousel-btn left" onClick={handlePrev}>⬅</button>
        <div className="template-display" ref={resumeRef}>
          <SelectedTemplate formData={formData} />
        </div>
        <button className="carousel-btn right" onClick={handleNext}>➡</button>
      </div>
      <button id="download-btn" className="download-btn">
        Download Resume
      </button>
    </div>
  );
};

export default ResumePreview;
