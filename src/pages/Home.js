import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImage from '../assets/1698124454394.png';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Benjamin Sekyi — a Front-End Developer";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && currentIndex < fullText.length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === fullText.length) {
      // Start deleting after a pause
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      // Deleting effect
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex === 0) {
      // Reset to start typing again
      const timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, isDeleting]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sekyikins',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/benjamin-sekyi',
      icon: FiLinkedin,
    },
  ];

  const technologies = [
    'HTML', 'CSS', 'JavaScript', 'React', 'React Native with Expo', 
    'AI-Assisted Coding', 'Git & GitHub', 'VS Code', 'Node.js', 
    'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Next.js'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative space-y-8"
            >
              {/* Absolute positioned typing animation */}
              <div className="absolute top-0 left-0 flex items-center w-full h-32">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl dark:text-white">
                  <span className="text-primary-600 dark:text-primary-400">
                    {text}
                  </span>
                  <span className="animate-pulse">|</span>
                </h1>
              </div>

              {/* Content with space above */}
              <div className="pt-32 space-y-4">
                                            <p className="max-w-lg pt-2 text-xl text-gray-600 dark:text-gray-400">
                  Passionate about creating beautiful, dynamic, functional, and user-friendly web and mobile experiences. 
                              Currently based in Kumasi, building the future of the world with technology.
                </p>
              </div>

              {/* Technologies Marquee */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Technologies I work with:
                </p>
                <div className="relative overflow-hidden bg-white rounded-full dark:bg-gray-900">
                  <div className="flex items-center py-2">
                    {/* First set of technologies */}
                    <div className="flex items-center space-x-4 animate-marquee whitespace-nowrap">
                      {technologies.map((tech, index) => (
                        <span
                          key={`first-${index}`}
                          className="px-4 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="absolute flex items-center space-x-4 animate-marquee2 whitespace-nowrap left-5">
                      {technologies.map((tech, index) => (
                        <span
                          key={`second-${index}`}
                          className="px-4 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 btn-primary"
                >
                  <FiMail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </motion.a>
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center space-x-2 btn-secondary"
                >
                  <span>View My Work</span>
                  <FiArrowRight className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 text-gray-700 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="flex items-center justify-center p-3 rounded-full w-[420px] h-[420px] bg-gradient-to-br from-blue-200 via-primary-500 to-blue-800">
                  <div className="overflow-hidden bg-white rounded-full w-[380px] h-[380px] dark:bg-gray-800">
                    <img 
                      src={profileImage} 
                      alt="Benjamin Sekyi"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-10 h-10 rounded-full -top-5 -right-5 bg-primary-500"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-8 h-8 rounded-full -bottom-5 -left-5 bg-primary-400"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white section-padding dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { number: '8+', label: 'Projects Completed' },
              { number: '2+', label: 'Years Experience' },
              { number: '6+', label: 'Certifications' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 