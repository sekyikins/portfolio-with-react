import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiDownload } from 'react-icons/fi';

const CertificationCard = ({ certification, index }) => {
  const { title, issuer, date, description, image, type, pdfUrl } = certification;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const handleViewCertificate = () => {
    if (type === 'pdf') {
      // Open PDF in new tab using pdfUrl
      window.open(pdfUrl, '_blank');
    } else {
      // For images, open in new tab
      window.open(image, '_blank');
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    if (type === 'pdf') {
      link.href = pdfUrl;
      link.download = title.replace(/\s+/g, '_') + '.pdf';
    } else {
      link.href = image;
      link.download = title.replace(/\s+/g, '_') + '.jpg';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card overflow-hidden group"
    >
      {/* Certificate Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Background Image for all certificates */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <FiAward className="w-16 h-16 text-white/80" />
        </div>
      </div>

      {/* Certificate Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
            {title}
          </h3>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0 ml-2"
          >
            <FiAward className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </motion.div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Certificate Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Issuer:</span>
            <span>{issuer}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <FiCalendar className="w-4 h-4" />
            <span>{formatDate(date)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
            onClick={handleViewCertificate}
            className="flex items-center space-x-2 btn-primary text-sm flex-1 justify-center"
        >
          <FiExternalLink className="w-4 h-4" />
            <span>View</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="flex items-center space-x-2 btn-secondary text-sm flex-1 justify-center"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download</span>
        </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard; 