'use client';

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(219, 39, 119, 0.7)",
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(236, 72, 153, 0.7)",
      mixBlendMode: "difference" as const,
    },
  };

  const handleCursorEnter = () => setCursorVariant("hover");
  const handleCursorLeave = () => setCursorVariant("default");

  const contactInfo = [
    { icon: FaEnvelope, title: 'Email', value: 'himansushukla3112@gmail.com', link: 'mailto:himansushukla3112@gmail.com' },
    { icon: FaLinkedin, title: 'LinkedIn', value: 'himanshu-shukla-23565119a', link: 'https://www.linkedin.com/in/himanshu-shukla-23565119a/' },
    { icon: FaGithub, title: 'GitHub', value: '@himanshushukla31', link: 'https://github.com/himanshushukla31' },
    { icon: FaInstagram, title: 'Instagram', value: '@himan.shukla_', link: 'https://www.instagram.com/himan.shukla_/' },
  ];

  return (
    <div className="min-h-screen bg-[#081229] text-white relative overflow-hidden flex items-center justify-center">
      {/* Background animation */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#081229', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0f1c3d', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          {[...Array(100)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 100 + "%"}
              cy={Math.random() * 100 + "%"}
              r={Math.random() * 3 + 0.5}
              fill="rgba(255, 255, 255, 0.2)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-200">Let&apos;s connect and explore how we can work together!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={info.link} passHref>
                <motion.div
                  className="bg-[#191d3a] border-2 border-[#516391] p-6 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={handleCursorEnter}
                  onMouseLeave={handleCursorLeave}
                >
                  <div className="flex items-center mb-4">
                    <info.icon className="text-4xl mr-4 text-pink-500" />
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-blue-400">{info.title}</h2>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference hidden sm:block"
        variants={cursorVariants}
        animate={cursorVariant}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          restDelta: 0.001
        }}
      />
    </div>
  );
};

export default ContactPage;
