import React from 'react';
import { FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/50 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Follow the journey:</p>
        <div className="flex justify-center space-x-6">
          <a href="https://twitter.com" className="hover:text-yellow-400 transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-yellow-400 transition duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com" className="hover:text-yellow-400 transition duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;