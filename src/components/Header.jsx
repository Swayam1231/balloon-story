import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('part1');

  // Function to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-80 p-4 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">The Balloon's Journey</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['part1', 'part2', 'part3', 'part4', 'part5', 'part6'].map((part) => (
            <a
              key={part}
              href={`#${part}`}
              className={`text-white hover:text-yellow-400 transition duration-300 ${
                activeSection === part ? 'text-yellow-400 font-bold' : ''
              }`}
            >
              {part.replace('part', 'Part ')}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-4">
            {['part1', 'part2', 'part3', 'part4', 'part5', 'part6'].map((part) => (
              <li key={part}>
                <a
                  href={`#${part}`}
                  className={`text-white hover:text-yellow-400 transition duration-300 ${
                    activeSection === part ? 'text-yellow-400 font-bold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {part.replace('part', 'Part ')}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;