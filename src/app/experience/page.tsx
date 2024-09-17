'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';
import Image from 'next/image';

const workExperience = [
  {
    id: 1,
    position: 'Product Engineer',
    company: 'Factri.Ai',
    location: 'Bengaluru, Karnataka',
    startDate: 'June 2023',
    endDate: 'Present',
    logo: 'https://i.ibb.co/bN6c9RT/factriai-bf95138f.webp',
    responsibilities: [
      'Led the development of a scheduling software with resource-driven order management',
      'Engineered a dynamic, OAuth2.0-integrated multi-tenancy admin page',
      'Optimized UI using Material UI and Syncfusion; implemented Cheerypi and Pgbouncer for database efficiency',
    ],
    skills: ['Django', 'React', 'Linux', 'Material UI', 'OAuth2.0'],
  },
  {
    id: 2,
    position: 'Lead Developer',
    company: 'AAROHI VNIT Nagpur',
    location: 'Nagpur, Maharashtra',
    startDate: 'July 2022',
    endDate: 'October 2022',
    logo: 'https://i.ibb.co/rbPtMnp/aarohi-logo.png',
    responsibilities: [
      'Led a team to create a responsive online registration portal for institute events',
      'Developed QR code generation and mailing logic for event registrations using Express.js',
      'Secured the platform with admin authorization and user authentication via JWT',
    ],
    skills: ['React', 'MongoDB', 'Node.js', 'Express.js', 'JWT'],
  },
  {
    id: 3,
    position: 'Full Stack Developer',
    company: 'AXIS VNIT Nagpur',
    location: 'Nagpur, Maharashtra',
    startDate: 'November 2021',
    endDate: 'April 2022',
    logo: 'https://i.ibb.co/0XX7C9j/logo.png',
    responsibilities: [
      'Recognized by the Director of Institute for leading a team towards exceptional work on the AWS-based full-stack web platform',
      'Developed RESTful APIs for seamless event registrations and integrated Razorpay API for online payments',
      'Implemented OAuth third-party authentication and designed a highly effective referral system',
    ],
    skills: ['Javascript/EJS', 'MongoDB', 'Node.js', 'AWS', 'RESTful APIs', 'OAuth'],
  },
];

const WorkExperiencePage = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081229] to-[#0f1c3d] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Work Experience
        </h1>
        <p className="text-xl md:text-2xl text-blue-200">
          My professional journey through code and innovation
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        {workExperience.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
            onMouseEnter={handleCursorEnter}
            onMouseLeave={handleCursorLeave}
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
            <div className="ml-8 bg-[#191d3a] rounded-lg p-8 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-500/30">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-blue-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-500">{experience.position}</h3>
                  <h4 className="text-xl text-blue-300">{experience.company}</h4>
                  <p className="text-sm text-gray-400">{experience.location}</p>
                  <p className="text-sm text-gray-400">{`${experience.startDate} - ${experience.endDate}`}</p>
                </div>
              </div>
              <ul className="list-none pl-0 mb-6 space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <FaBriefcase className="flex-shrink-0 text-blue-400 mt-1 mr-2" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span key={index} className="bg-[#516391] text-white px-3 py-1 rounded-full text-sm flex items-center">
                    {index % 3 === 0 && <FaCode className="mr-1" />}
                    {index % 3 === 1 && <FaLaptopCode className="mr-1" />}
                    {index % 3 === 2 && <FaServer className="mr-1" />}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bubble cursor */}
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

export default WorkExperiencePage;
