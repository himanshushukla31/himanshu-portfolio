'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoOpenOutline } from 'react-icons/io5';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const HomePage = () => {
  const [currentRole, setCurrentRole] = useState('');
  const roles = useMemo(() => ["Himanshu Shukla.", "Full Stack Developer.", "Software Engineer."], []);
  const [rolesIndex, setRolesIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const typingSpeed = 100;
    let charIndex = -1;

    const typingInterval = setInterval(() => {
      const role = roles[rolesIndex];
      charIndex++;

      setCurrentRole(role.substring(0, charIndex + 1));

      if (charIndex === role.length - 1) {
        clearInterval(typingInterval);
        setTimeout(() => {
          charIndex = -1;
          setCurrentRole('');
          setRolesIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [rolesIndex, roles]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const controls = useAnimation();

  const handleHover = () => {
    controls.start({
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 }
    });
  };

  const cursorVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(219, 39, 119, 0.7)", // Pink color from the theme
    },
    pointer: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(236, 72, 153, 0.7)", // Lighter pink color
      mixBlendMode: "difference" as const,
    },
  };

  const handleCursorEnter = () => setCursorVariant("pointer");
  const handleCursorLeave = () => setCursorVariant("default");

  return (
    <div className="min-h-screen bg-[#081229] text-white relative overflow-hidden flex items-center justify-center">
      {/* Darker background with fading bubbles */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#081229', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#081229', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad1)" />
          {[...Array(50)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 100 + "%"}
              cy={Math.random() * 100 + "%"}
              r={Math.random() * 2 + 0.5}
              fill="rgba(255, 255, 255, 0.2)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
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
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Image
              src="https://i.ibb.co/TRnjdgF/Whats-App-Image-2024-09-16-at-00-27-13.jpg"
              alt="Himanshu Shukla"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4 sm:mb-6 border-4 border-blue-500 shadow-lg"
            />
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            animate={controls}
            onMouseEnter={handleHover}
          >
            {`<Code/>`}
          </motion.h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            Hello, I am <span className="text-pink-500">{currentRole}</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8 text-blue-200">
            Passionate about crafting innovative digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
              className="w-full sm:w-auto"
            >
              <Link href="/projects" className="block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-center text-sm sm:text-base">
                View Projects
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              onMouseEnter={handleCursorEnter}
              onMouseLeave={handleCursorLeave}
              className="w-full sm:w-auto"
            >
              <a href='https://drive.google.com/file/d/1m6Stf--l9Fq0Y9KbnRWHt4yXlLPZGtvh/view?usp=sharing' target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 flex items-center justify-center text-sm sm:text-base">
                Resume <IoOpenOutline className="ml-2" />
              </a>
            </motion.div>
          </div>
          
          <div className="flex justify-center space-x-4">
            {[
              { href: "https://github.com/himanshushukla31", icon: FaGithub },
              { href: "https://www.linkedin.com/in/himanshu-shukla-23565119a/", icon: FaLinkedin },
              { href: "mailto:himansushukla3112@gmail.com", icon: FaEnvelope }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom cursor bubble */}
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
      <style jsx global>{`
        @media (min-width: 640px) {
          body {
            cursor: none;
          }
          a, button {
            cursor: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;