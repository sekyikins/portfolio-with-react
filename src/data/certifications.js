import crashPyCert from '../assets/CrashPy Cert.jpg';
import codeAlphaCert from '../assets/CodeAlpha Cert.png';
import edurekaCert from '../assets/Edureka Internship Cert.png';
import successAfricaCert from '../assets/Success Africa Cert.png';
import mfantsipimCert from '../assets/Mfantsipim Cert.png';
import admissionLetter from '../assets/admission letter.png';

export const certifications = [
  {
    title: "CodeAlpha Internship Certificate",
    issuer: "CodeAlpha",
    date: "March 2025",
    description: "Successfully completed a comprehensive internship program focusing on web development and modern technologies.",
    image: codeAlphaCert, // Using CodeAlpha PNG as background
    type: "pdf",
    pdfUrl: "/Sekyi Benjamin Kofi Certificate_CodeAlpha.pdf"
  },
  {
    title: "Edureka Internship Certificate",
    issuer: "Edureka",
    date: "May 2025",
    description: "Attended Full Stack Web Development internship demo session program focusing on software development and industry practices.",
    image: edurekaCert, // Using Edureka PNG as background
    type: "pdf",
    pdfUrl: "/Edureka - Internship Certificate.pdf"
  },
  {
    title: "Success Africa Certificate",
    issuer: "Success Africa Foundation X LEC Group",
    date: "February 2024",
    description: "Achievement certificate of participation in the Success Africa summit 2024.",
    image: successAfricaCert, // Using Success Africa PNG as background
    type: "pdf",
    pdfUrl: "/success africa-compressed.pdf"
  },
  {
    title: "CrashPy Certificate",
    issuer: "Udemy",
    date: "April 2024",
    description: "Crash Python programming certificate from Udemy platform.",
    image: crashPyCert,
    type: "image"
  },
  {
    title: "Mfantsipim Certificate",
    issuer: "Mfantsipim School",
    date: "September 2023",
    description: "Academic certificate of graduation for the year 2023 from Mfantsipim School.",
    image: mfantsipimCert, // Using Mfantsipim PNG as background
    type: "pdf",
    pdfUrl: "/MfantsipimCert.pdf"
  },
  {
    title: "Admission Letter",
    issuer: "Educational Institution (KNUST)",
    date: "2024",
    description: "Official admission letter for persuing Computer Science at KNUST.",
    image: admissionLetter, // Using admission letter PNG as background
    type: "pdf",
    pdfUrl: "/Admission Letter.pdf"
  }
]; 