import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold mb-8 mt-16 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedTitle;