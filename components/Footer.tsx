"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  const whatsappLink = "https://wa.me/61470286853?text=%20Safwan!";
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <p>© {new Date().getFullYear()} Safwan. All rights reserved.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center space-x-6"
        >
          <a href="https://linkedin.com/in/safwan-altawil-80b65a189" target="_blank" rel="noopener noreferrer" className='hover:text-[#3e2f39] transform transition-transform hover:scale-110'>
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/SafwanAltawil" target="_blank" rel="noopener noreferrer" className='hover:text-[#3e2f39] transform transition-transform hover:scale-110'>
            <FaGithub size={24} />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4"
        >
          <p>safwan.altawil@gmail.com</p>
          <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className='hover:text-[#3e2f39] transform transition-transform hover:scale-110'>+61 470 286 853</p>
            </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
