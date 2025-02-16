import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, content, animationType, backgroundImage }) => {
  const animations = {
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slideInLeft: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    slideInRight: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    zoomIn: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  };

  return (
    <motion.section
      id={id}
      initial={animations[animationType].initial}
      whileInView={animations[animationType].animate}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center text-white p-8 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl text-center px-4">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-8 text-yellow-400">
          {title}
        </h2>

        {/* Content */}
        <p className="text-xl leading-relaxed text-gray-100">
          {content}
        </p>
      </div>
    </motion.section>
  );
};

export default Section;