import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiCheck } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const { title, description, tech, liveUrl, githubUrl, image, features } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Background Image with overlay */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        />
        
        {/* Color overlay similar to certifications */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/40 to-primary-600/40" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <FiCode className="w-16 h-16 text-white/80" />
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Features */}
        {features && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Key Features:
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400">
                  <FiCheck className="w-3 h-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 btn-primary text-sm"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 btn-secondary text-sm"
            >
              <FiGithub className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 