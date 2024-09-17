'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'HTML', 'CSS'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Django'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
  cloud: ['AWS', 'Docker', 'Kubernetes', 'Linux'],
  tools: ['Git', 'Webpack', 'Jest', 'Redux'],
};

export default function AboutPage() {
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
    pointer: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(236, 72, 153, 0.7)",
      mixBlendMode: "difference" as const,
    },
  };

  const handleCursorEnter = () => setCursorVariant("pointer");
  const handleCursorLeave = () => setCursorVariant("default");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081229] to-[#0f1c3d] text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:w-1/3"
          >
            <Image
              src="https://i.ibb.co/TRnjdgF/Whats-App-Image-2024-09-16-at-00-27-13.jpg"
              alt="Himanshu Shukla"
              width={250}
              height={250}
              className="rounded-full mb-8 border-4 border-pink-500 shadow-lg"
            />
            <h2 className="text-3xl font-bold mb-4 text-center text-pink-500">Himanshu Shukla</h2>
            <p className="text-xl text-center text-gray-300 mb-6">
              Product Engineer & Fullstack Developer
            </p>
            <div className="flex justify-center space-x-4">
              {[
                { href: 'https://github.com/himanshushukla31', icon: FaGithub, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/himanshu-shukla-23565119a/', icon: FaLinkedin, label: 'LinkedIn' },
                { href: 'https://leetcode.com/himanshushukla31/', icon: SiLeetcode, label: 'LeetCode' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={handleCursorEnter}
                  onMouseLeave={handleCursorLeave}
                >
                  <social.icon className="text-3xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Why Choose Me?</h2>
            <p className="text-gray-300 mb-4">
              As a Product Engineer and Fullstack Developer, I bring a comprehensive skill set to the table. My expertise spans server-side technologies, database management, and front-end development, with proficiency in Django REST Framework, React.js, Node.js, and MongoDB.
            </p>
            <p className="text-gray-300 mb-4">
              I&apos;ve successfully led projects developing dynamic online registration portals and full-stack websites. My passion lies in leveraging technology to solve real-world problems, and I thrive on the challenge of turning complex ideas into user-friendly solutions.
            </p>
            <p className="text-gray-300">
              I&apos;m constantly expanding my knowledge, currently focusing on cloud technologies, system design, and honing my problem-solving skills in data structures and algorithms. My hands-on approach and love for experimenting with new technologies keep me at the forefront of the ever-evolving tech landscape.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div 
                key={category} 
                className="bg-[#191d3a] border-2 border-[#516391] p-4 md:p-8 mb-4 md:mb-8 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-4 md:mb-8">
                  <div className="text-3xl md:text-4xl mr-4 text-pink-500">
                    {category === 'languages' && '🌐'}
                    {category === 'frameworks' && '🛠️'}
                    {category === 'databases' && '💾'}
                    {category === 'cloud' && '☁️'}
                    {category === 'tools' && '🔧'}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold mb-2 capitalize text-pink-500">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item, index) => (
                        <motion.span
                          key={index}
                          className="bg-[#516391] text-white px-3 py-1 rounded-full text-sm"
                          whileHover={{ scale: 1.1, backgroundColor: "#6b7cb4" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
}