import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiBookOpen, FiUsers, FiAward, FiMapPin, FiMail, FiDownload, FiHome, FiBook, FiPhone } from 'react-icons/fi';
import { resume } from '../data/projects';

const About = () => {
  const skills = [
    { name: 'HTML', icon: FiCode, level: 95 },
    { name: 'CSS', icon: FiCode, level: 90 },
    { name: 'JavaScript', icon: FiCode, level: 85 },
    { name: 'React', icon: FiCode, level: 80 },
    { name: 'React Native with Expo', icon: FiCode, level: 75 },
    { name: 'Git & GitHub', icon: FiCode, level: 75 },
    { name: 'VS Code', icon: FiCode, level: 95 },
    { name: 'Responsive Design', icon: FiCode, level: 70 },
  ];

  const timeline = [
    {
      year: 'March 2025',
      title: 'CodeAlpha Internship',
      description: 'Successfully completed a comprehensive internship program focusing on web development and modern technologies.',
      icon: FiCode,
    },
    {
      year: 'May 2025',
      title: 'Edureka Internship',
      description: 'Attended Full Stack Web Development internship demo session program focusing on software development and industry practices.',
      icon: FiCode,
    },
    {
      year: 'February 2024',
      title: 'Success Africa Summit',
      description: 'Achievement certificate of participation in the Success Africa summit 2024, organized by Success Africa Foundation X LEC Group.',
      icon: FiAward,
    },
    {
      year: 'April 2024',
      title: 'Crash Python Programming (Udemy)',
      description: 'Crash Python programming certificate from Udemy platform.',
      icon: FiCode,
    },
    {
      year: 'September 2023',
      title: 'Mfantsipim School Graduation',
      description: 'Academic certificate of graduation for the year 2023 from Mfantsipim School.',
      icon: FiBookOpen,
    },
    {
      year: '2023 - Present',
      title: 'BSc. Computer Science, KNUST',
      description: 'Currently pursuing a Bachelor of Science in Computer Science at Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, Ghana.',
      icon: FiBookOpen,
    },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resume.downloadUrl;
    link.download = resume.title.replace(/\s+/g, '_') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              A passionate front-end developer from Kumasi, Ghana, dedicated to creating beautiful and functional web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Bio Section */}
          <div className="grid items-center grid-cols-1 gap-12 mb-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Benjamin Kofi Sekyi
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I'm a front-end developer based in Kumasi, Ghana with a passion for creating user-friendly and visually appealing web applications. 
                My journey in web development started with a curiosity to understand how websites work, which led me to learn HTML, CSS, and JavaScript.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I'm currently pursuing a BSc. in Computer Science at Kwame Nkrumah University of Science and Technology (KNUST), Kumasi, Ghana.
              </p>
              <a
                href="https://www.google.com/maps?q=Kwame+Nkrumah+University+of+Science+and+Technology,+Kumasi,+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 mt-2 mb-4 font-medium text-white transition-colors duration-200 rounded-lg shadow bg-primary-600 hover:bg-primary-700"
              >
                View KNUST on Map
              </a>
              
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I've had the privilege of teaching in a primary school, which helped me develop strong communication skills and patience. 
                My internships at CodeAlpha and Edureka provided me with hands-on experience in modern web development practices and collaborative work.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                I believe in continuous learning and staying updated with the latest technologies. When I'm not coding, you can find me 
                exploring new technologies, contributing to open-source projects, or sharing my knowledge with others.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-white shadow-lg dark:bg-gray-800 rounded-xl"
            >
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Personal Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">Kumasi, Ghana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiHome className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">Elubo, Western Region, Ghana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiBook className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">Kwame Nkrumah University of Science and Technology (KNUST)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">benjaminkofi.sekyi@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiPhone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">+233 55 659 0885 / +233 50 911 8087</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiCode className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">Front-End Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiAward className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">6+ Certifications</span>
                </div>
              </div>

              {/* Resume Download Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-8"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Resume
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Download my professional resume to learn more about my experience and qualifications.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResumeDownload}
                  className="flex items-center space-x-2 btn-primary"
                >
                  <FiDownload className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl"
                >
                  <div className="flex items-center mb-4 space-x-3">
                    <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 rounded-full bg-primary-600 dark:bg-primary-400"
                    />
                  </div>
                  <div className="mt-2 text-right">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 dark:text-white">
              My Journey
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline Dot */}
                    <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full bg-primary-600 dark:bg-primary-400">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
                      <div className="flex items-center mb-2 space-x-3">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 