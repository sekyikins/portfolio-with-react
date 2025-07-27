import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    {
      name: 'Email',
      url: 'mailto:benjaminkofi.sekyi@gmail.com',
      icon: FiMail,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/233556590885',
      icon: FaWhatsapp,
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                BS
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Benjamin Sekyi
              </span>
            </div>
            <p className="max-w-md text-gray-600 dark:text-gray-400">
              Front-end developer from Kumasi, Ghana, passionate about creating beautiful and functional mobile dev. and web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 transition-colors duration-200 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 transition-colors duration-200 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="/certifications" className="text-gray-600 transition-colors duration-200 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Certifications
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 transition-colors duration-200 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-700 transition-colors duration-200 bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Benjamin Kofi Sekyi. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <FiHeart className="w-4 h-4 text-red-500" />
                              <span>in Kumasi, Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 