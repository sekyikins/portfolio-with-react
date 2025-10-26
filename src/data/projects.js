import { MyResume, task1Pic, task2Pic, task4Pic, goLive, savings, profilePic } from "../assets";

export const projects = [
  {
    title: "Web Calculator",
    description: "A fully functional calculator with modern UI design featuring basic arithmetic operations, memory functions, and responsive layout. Built with vanilla JavaScript for optimal performance.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://sekyikins.github.io/codealpha_task2/",
    githubUrl: "https://github.com/sekyikins/calculator",
    image: task2Pic,
    features: ["Basic arithmetic operations", "Memory functions", "Responsive design", "Modern UI"]
  },
  {
    title: "Web Audio Player",
    description: "A feature-rich audio player with playlist support, volume control, and modern interface. Includes play/pause, skip tracks, and visual audio spectrum display.",
    tech: ["HTML", "CSS", "JavaScript", "Web Audio API"],
    liveUrl: "https://sekyikins.github.io/codealpha_task4/",
    githubUrl: "https://github.com/sekyikins/codealpha_task4",
    image: task4Pic,
    features: ["Playlist management", "Volume control", "Audio visualization", "Modern controls"]
  },
  {
    title: "Image Gallery",
    description: "A responsive image gallery with filtering capabilities, lightbox functionality, and smooth animations. Features category filtering and full-screen image viewing.",
    tech: ["HTML", "CSS", "JavaScript", "Filtering"],
    liveUrl: "https://sekyikins.github.io/codealpha_task1/",
    githubUrl: "https://github.com/sekyikins/gallery",
    image: task1Pic,
    features: ["Category filtering", "Lightbox view", "Responsive grid", "Smooth animations"]
  },
  {
    title: "Twitch Clone Mobile App",
    description: "A React Native mobile application that replicates Twitch's core streaming features. Includes live streaming, chat functionality, and user authentication.",
    tech: ["React Native", "JavaScript", "Expo", "Mobile Development"],
    liveUrl: "https://expo.dev/@sekyikins/twitch-clone",
    githubUrl: "https://github.com/PhantomHerald/GoLive",
    image: goLive,
    features: ["Live streaming", "Real-time chat", "User authentication", "Mobile UI"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and professional design showcasing my work.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    liveUrl: "https://mrsekyi.netlify.app/",
    githubUrl: "https://github.com/sekyikins/portfolio-with-react",
    image: profilePic,
    features: ["Dark mode", "Smooth animations", "Responsive design", "Professional UI"]
  },
  {
    title: "Task Management App",
    description: "A comprehensive task management application with drag-and-drop functionality, task categories, and progress tracking. Built for efficient project management.",
    tech: ["React", "CSS", "JavaScript", "Drag & Drop"],
    liveUrl: "https://sekyikins.github.io/AI-Scheduler-Project/",
    githubUrl: "https://github.com/sekyikins/AI-Scheduler-Project",
    image: "/assets/task-manager.png",
    features: ["Drag & drop", "Task categories", "Progress tracking", "Local storage"]
  },
  {
    title: " Savings Web App",
    description: "A smart savings web app that helps users set goals, track progress, and manage multiple saving plans efficiently.",
    tech: ["React", "CSS", "TypeScript", "Responsive Design"],
    liveUrl: "https://tracksavings.netlify.app/",
    githubUrl: "https://github.com/sekyikins/SavingsWebApp",
    image: savings,
    features: ["Responsive Design", "Savings categories", "Progress tracking", "SupaBase storage"]
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current weather conditions, forecasts, and location-based weather data with a clean, intuitive interface.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    liveUrl: "https://sekyikins.github.io/weather-app/",
    githubUrl: "https://github.com/sekyikins/weather-app",
    image: "/assets/weather-app.png",
    features: ["Current weather", "5-day forecast", "Location detection", "Responsive design"]
  },
  {
    title: "E-commerce Landing Page",
    description: "A modern e-commerce landing page with product showcases, shopping cart functionality, and payment integration. Features smooth animations and user-friendly design.",
    tech: ["HTML", "CSS", "JavaScript", "E-commerce"],
    liveUrl: "https://sekyikins.github.io/ecommerce-landing/",
    githubUrl: "https://github.com/sekyikins/ecommerce-landing",
    image: "/assets/ecommerce-landing.png",
    features: ["Product showcase", "Shopping cart", "Payment integration", "Responsive design"]
  }
];

export const resume = {
  title: "Benjamin Sekyi - Resume",
  description: "Professional resume highlighting skills, experience, and achievements.",
  downloadUrl: MyResume,
  type: "pdf"
}; 