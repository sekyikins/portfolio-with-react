import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiBookOpen, FiUsers, FiAward, FiMapPin, FiMail, FiDownload } from 'react-icons/fi';
import { resume } from '../data/projects';

const About = () => {
  const skills = [
    { name: 'HTML', icon: FiCode, level: 95 },
    { name: 'CSS', icon: FiCode, level: 90 },
    { name: 'JavaScript', icon: FiCode, level: 85 },
    { name: 'React', icon: FiCode, level: 80 },
    { name: 'Git', icon: FiCode, level: 75 },
    { name: 'Responsive Design', icon: FiCode, level: 90 },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'CodeAlpha Internship',
      description: 'Completed a comprehensive web development internship focusing on modern technologies, collaborative development, and industry best practices.',
      icon: FiCode,
    },
    {
      year: '2024',
      title: 'Edureka Internship',
      description: 'Gained hands-on experience in software development, working on real-world projects and learning industry-standard development practices.',
      icon: FiCode,
    },
    {
      year: '2024',
      title: 'Primary School Teaching',
      description: 'Developed strong communication and leadership skills while teaching and mentoring students in a primary school environment.',
      icon: FiBookOpen,
    },
    {
      year: '2023',
      title: 'React Native Development',
      description: 'Built a mobile Twitch clone using React Native and Expo, expanding skills in mobile development and cross-platform development.',
      icon: FiCode,
    },
    {
      year: '2023',
      title: 'Web Development Projects',
      description: 'Created multiple web applications including calculator, audio player, gallery, and task management projects using modern web technologies.',
      icon: FiCode,
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
      <section className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate front-end developer from Kumasi, Ghana, dedicated to creating beautiful and functional web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Benjamin Kofi Sekyi
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a front-end developer based in Kumasi, Ghana with a passion for creating user-friendly and visually appealing web applications. 
                My journey in web development started with a curiosity to understand how websites work, which led me to learn HTML, CSS, and JavaScript.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I've had the privilege of teaching in a primary school, which helped me develop strong communication skills and patience. 
                My internships at CodeAlpha and Edureka provided me with hands-on experience in modern web development practices and collaborative work.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. When I'm not coding, you can find me 
                exploring new technologies, contributing to open-source projects, or sharing my knowledge with others.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Personal Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">Kumasi, Ghana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-400">benjamin.sekyi@gmail.com</span>
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full"
                    />
                  </div>
                  <div className="text-right mt-2">
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
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
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-600 dark:bg-primary-400 rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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