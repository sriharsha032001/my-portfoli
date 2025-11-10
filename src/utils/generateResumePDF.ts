// PDF Generation Utility
// Note: For client-side PDF generation, you can use libraries like:
// - jsPDF with html2canvas
// - react-pdf
// - pdfmake
// 
// For production, consider using a server-side solution or a service like:
// - Puppeteer (Node.js)
// - Playwright (Node.js)
// - A serverless function (Vercel, Netlify, AWS Lambda)

import { resumeData } from './resumeData';

export const generateResumePDF = async () => {
  // Option 1: Use browser's print functionality
  // This is the simplest approach for a static site
  window.print();
};

export const downloadResumeAsText = () => {
  const text = `
Ravinuthala Ramachandra Sri Harsha
${resumeData.email} | ${resumeData.phone}
LinkedIn: ${resumeData.linkedin}
Portfolio: ${resumeData.website}

EDUCATION
${resumeData.education.degree}
${resumeData.education.university} — CGPA: ${resumeData.education.cgpa}
${resumeData.education.period}

EXPERIENCE
${resumeData.experience.map(exp => `
${exp.title} — ${exp.location} | ${exp.period}
${exp.company}

${exp.achievements.map(achievement => `• ${achievement}`).join('\n')}
`).join('\n')}

PROJECTS
${resumeData.projects.map(proj => `
${proj.title} | ${proj.technologies.join(', ')}
${proj.description}
${proj.github ? `Git: ${proj.github}` : ''}
${proj.demo ? `Demo: ${proj.demo}` : ''}
`).join('\n')}

TECHNICAL SKILLS
${Object.entries(resumeData.skills).map(([category, items]) => 
  `${category}: ${items.join(', ')}`
).join('\n')}

CERTIFICATIONS
${resumeData.certifications.map(cert => 
  `${cert.name} — ${cert.issuer} (${cert.year})`
).join('\n')}

ACHIEVEMENTS
${resumeData.achievements.map(achievement => `• ${achievement}`).join('\n')}
  `.trim();

  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Ravinuthala_Ramachandra_Sri_Harsha_Resume.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// For a more advanced PDF generation, you would install a library like:
// npm install jspdf html2canvas
// Then create a component that renders the resume and converts it to PDF

