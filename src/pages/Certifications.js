import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import CertificationCard from '../components/CertificationCard';

const Certifications = () => {
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
              My <span className="text-primary-600 dark:text-primary-400">Certifications</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of certificates and achievements that demonstrate my commitment to continuous learning and professional development.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((certification, index) => (
              <CertificationCard 
                key={certification.title} 
                certification={certification} 
                index={index} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Continuous Learning Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My commitment to professional development extends beyond formal certifications. 
                I actively participate in online communities, contribute to open-source projects, 
                and stay updated with the latest industry trends and best practices.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Each certification represents not just a milestone, but a step forward in my 
                journey to become a better developer and contribute meaningfully to the tech community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Learning Focus Areas
              </h3>
              <div className="space-y-4">
                {[
                  'Front-end Development',
                  'React & Modern JavaScript',
                  'Responsive Web Design',
                  'Version Control & Git',
                  'Teaching & Communication',
                  'Problem Solving'
                ].map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: certifications.length, label: 'Total Certifications' },
              { number: '3+', label: 'Years Learning' },
              { number: '100%', label: 'Completion Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
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

export default Certifications; 