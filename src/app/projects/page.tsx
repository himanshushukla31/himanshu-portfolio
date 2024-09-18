'use client'

import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'AIREX',
    description: 'An online exchange platform with chat integration.',
    githubLink: 'https://github.com/username/project1',
    demoLink: 'https://airex-vnit.vercel.app/',
    image: 'https://i.ibb.co/9g0G3zP/aireximage.png',
    skills: ["Nodejs", "Reactjs", "MongoDB"]
  },
  {
    id: 2,
    name: 'AIRFLIX',
    description: 'Online movie streaming platform.',
    githubLink: 'https://github.com/username/project2',
    demoLink: 'https://air-flix.vercel.app/',
    image: 'https://i.ibb.co/R2tWvHn/AIRFLIX.png',
    skills: ["Nextjs", "Typescript", "Shadcn/UI"]
  },
  {
    id: 3,
    name: 'Chrome Extension SummAize',
    description: 'Handy text summarizer chrome extension.',
    githubLink: 'https://github.com/himanshushukla31/chrome-extension-summarizer/tree/main',
    demoLink: 'https://github.com/himanshushukla31/chrome-extension-summarizer/tree/main',
    image: 'https://i.ibb.co/dKsJ178/chrome-extension.png',
    skills: ["Javascript", "Jquery", "RapidApi"]
  },
  {
    id: 4,
    name: 'DevConnector',
    description: 'Social platform for developers',
    githubLink: 'https://github.com/himanshushukla31/Dev-connector',
    demoLink: 'https://github.com/himanshushukla31/Dev-connector',
    image: 'https://i.ibb.co/fHKtM0Q/Dev-Connector.webp',
    skills: ["Nodejs", "Reactjs", "MongoDB", "Redux"]
  },
  {
    id: 5,
    name: 'Food Order App',
    description: 'Order your favorite pizza now!',
    githubLink: 'https://github.com/himanshushukla31/FoodOrder',
    demoLink: 'https://himanshushukla31.github.io/FoodOrder/',
    image: 'https://i.ibb.co/jbFVT8r/food-Order-App.png',
    skills: ["Reactjs", "React Hooks"]
  },
  {
    id: 6,
    name: 'Expense Tracker',
    description: 'Track your expenses with this handy expense tracker.',
    githubLink: 'https://github.com/himanshushukla31/Expense-Tracker',
    demoLink: 'https://github.com/himanshushukla31/Expense-Tracker',
    image: 'https://i.ibb.co/ftMHNBX/expense.png',
    skills: ["React", "HTML", "CSS"]
  }
];

const ProjectsPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
    <div className="min-h-screen bg-[#081229] text-white relative overflow-hidden flex flex-col">
      {/* Background with fading bubbles */}
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

      <div className="container mx-auto px-4 relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-200">
            Showcasing my journey through code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#191d3a] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[#516391] text-white px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-400 transition-colors duration-300 flex items-center"
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                  >
                    <FaGithub className="mr-2" />
                    View Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
};

export default ProjectsPage;
