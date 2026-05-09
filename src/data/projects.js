import { MyResume, task1Pic, task2Pic, task4Pic, goLive, savings, profilePic, cloverBlogsPic, cloverBlogsAdminPic, Ecommerce, POS, libsek  } from "../assets";

export const projects = [
  {
    title: "StarMart E-commerce System",
    description: "An online shopping platform built to work alongside the POS system, enabling customers to browse products, place orders, and interact with a real-time inventory system.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    liveUrl: "https://pos-e-commerce.vercel.app/",
    githubUrl: "https://github.com/sekyikins/StarMart_e-commerce",
    image: Ecommerce,
    features: [
      "Product browsing",
      "Checkout flow",
      "Real-time sync",
      "Order processing"
    ]
  },
  {
    title: "StarMart POS System (In-Store Application)",
    description: "A point-of-sale system designed for in-store transactions, inventory management, and sales tracking, fully integrated with the e-commerce platform for unified operations.",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "IndexedDB"],
    liveUrl: "https://pos-system-psi-lilac.vercel.app/",
    githubUrl: "https://github.com/sekyikins/pos-system",
    image: POS,
    features: [
      "Sales processing",
      "Sales checkout",
      "Inventory management",
      "Real-time sync"
    ]
  },
  {
    title: "Lib-Sek Books (Library & Book Request System)",
    description: "A web-based platform for requesting, managing, and accessing books. Designed to streamline book discovery and request handling while supporting digital delivery and centralized storage.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    liveUrl: "https://libsek-books.vercel.app/",
    githubUrl: "https://github.com/sekyikins/Lib-Sek-Books",
    image: libsek,
    features: [
      "Book request submission",
      "Book listing and browsing",
      "Admin-side management",
      "Automated delivery"
    ]
  },
  {
    title: "Clover (Blogs Page)",
    description: "A modern blog platform focused on clean reading experience and structured content delivery. Users can browse articles, read detailed posts, and explore content organized with tags and categories. Built with web fundamentals for speed, clarity, and responsiveness.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Supabasee"],
    liveUrl: "",
    githubUrl: "https://github.com/cloverghana/clover",
    image: cloverBlogsPic,
    features: ["Clean blog layout", "Readable article pages", "Responsive design for all devices", "Structured content presentation"]
  },
  {
    title: "Clover Blogs Admin Dashboard",
    description: "An administrative dashboard for managing blog content. Provides tools for creating, editing, and organizing blog posts, handling metadata, and maintaining content consistency across the platform.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Supabasee"],
    liveUrl: "https://cloverblogs-admin.netlify.app/",
    githubUrl: "https://github.com/sekyikins/clover-blogs-admin",
    image: cloverBlogsAdminPic,
    features: [
      "Create and edit blog posts",
      "Content management interface",
      "Post organization and updates",
      "Admin-only access structure"
    ]
  },
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
    title: "goLive - Streaming App (CodeFest '25)",
    description: "A React Native mobile application that replicates Twitch's core streaming features. Includes live streaming, chat functionality, and user authentication.",
    tech: ["Spring Boot", "TypeScript", "Expo", "React Native"],
    liveUrl: "",
    githubUrl: "https://github.com/PhantomHerald/GoLive",
    image: goLive,
    features: ["Live streaming", "Real-time chat", "User authentication", "Mobile UI"]
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and professional design showcasing my work.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    liveUrl: "https://mrsekyiportfolio.netlify.app/",
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
  }
];

export const resume = {
  title: "Benjamin Sekyi - Resume",
  description: "Professional resume highlighting skills, experience, and achievements.",
  downloadUrl: MyResume,
  type: "pdf"
}; 