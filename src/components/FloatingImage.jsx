import React from 'react';
import { motion } from 'framer-motion';

const FloatingImage = () => {
  return (
      <motion.img
        src="Portfolio-picture.jpg"
        alt="Ahmad Searcy"
        className="w-1/2 min-w-80 max-w-96 rounded-full"
        animate={{
          y: [0, -10, 0], // Animation keyframes for up and down movement
        }}
        transition={{
          duration: 2, // Duration of one complete animation cycle
          ease: "easeInOut", // Easing function
          repeat: Infinity, // Repeat animation indefinitely
          repeatType: "loop", // Loop type for repetition
        }}
      />
      
  );
};

export default FloatingImage;
