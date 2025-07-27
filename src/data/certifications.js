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
    date: "2024",
    description: "Successfully completed a comprehensive internship program focusing on web development and modern technologies.",
    image: codeAlphaCert, // Using CodeAlpha PNG as background
    type: "pdf",
    pdfUrl: "/Sekyi Benjamin Kofi Certificate_CodeAlpha.pdf"
  },
  {
    title: "Edureka Internship Certificate",
    issuer: "Edureka",
    date: "2024",
    description: "Completed internship program with Edureka focusing on software development and industry practices.",
    image: edurekaCert, // Using Edureka PNG as background
    type: "pdf",
    pdfUrl: "/Edureka - Internship Certificate.pdf"
  },
  {
    title: "Success Africa Certificate",
    issuer: "Success Africa",
    date: "2024",
    description: "Achievement certificate from Success Africa program.",
    image: successAfricaCert, // Using Success Africa PNG as background
    type: "pdf",
    pdfUrl: "/success africa-compressed.pdf"
  },
  {
    title: "CrashPy Certificate",
    issuer: "CrashPy",
    date: "2024",
    description: "Python programming certificate from CrashPy platform.",
    image: crashPyCert,
    type: "image"
  },
  {
    title: "Mfantsipim Certificate",
    issuer: "Mfantsipim School",
    date: "2024",
    description: "Academic certificate from Mfantsipim School.",
    image: mfantsipimCert, // Using Mfantsipim PNG as background
    type: "pdf",
    pdfUrl: "/MfantsipimCert.pdf"
  },
  {
    title: "Admission Letter",
    issuer: "Educational Institution",
    date: "2024",
    description: "Official admission letter for academic program.",
    image: admissionLetter, // Using admission letter PNG as background
    type: "pdf",
    pdfUrl: "/Admission Letter.pdf"
  }
]; 