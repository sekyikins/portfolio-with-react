
import { admissionLetterPic,
  mfantsipimCertPic,
  successAfricaPic,
  codeAlphaPic,
  edurekaPic,
  crashPyPic,
  codeAlpha,
  edureka,
  successAfrica,
  mfantsipimCert,
  admissionLetter,
   } from '../assets';

export const certifications = [
  {
    title: "CodeAlpha Internship Certificate",
    issuer: "CodeAlpha",
    date: "March 2025",
    description: "Successfully completed a comprehensive internship program focusing on web development and modern technologies.",
    image: codeAlphaPic, // Using CodeAlpha PNG as background
    type: "pdf",
    pdfUrl: codeAlpha
  },
  {
    title: "Edureka Internship Certificate",
    issuer: "Edureka",
    date: "May 2025",
    description: "Attended Full Stack Web Development internship demo session program focusing on software development and industry practices.",
    image: edurekaPic, // Using Edureka PNG as background
    type: "pdf",
    pdfUrl: edureka
  },
  {
    title: "Success Africa Certificate",
    issuer: "Success Africa Foundation X LEC Group",
    date: "February 2024",
    description: "Achievement certificate of participation in the Success Africa summit 2024.",
    image: successAfricaPic, // Using Success Africa PNG as background
    type: "pdf",
    pdfUrl: successAfrica
  },
  {
    title: "CrashPy Certificate",
    issuer: "Udemy",
    date: "April 2024",
    description: "Crash Python programming certificate from Udemy platform.",
    image: crashPyPic,
    type: "image"
  },
  {
    title: "Mfantsipim Certificate",
    issuer: "Mfantsipim School",
    date: "September 2023",
    description: "Academic certificate of graduation for the year 2023 from Mfantsipim School.",
    image: mfantsipimCertPic, // Using Mfantsipim PNG as background
    type: "pdf",
    pdfUrl: mfantsipimCert
  },
  {
    title: "Admission Letter",
    issuer: "Educational Institution (KNUST)",
    date: "2024",
    description: "Official admission letter for persuing Computer Science at KNUST.",
    image: admissionLetterPic, // Using admission letter PNG as background
    type: "pdf",
    pdfUrl: admissionLetter
  }
]; 