import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {IoOpenOutline} from 'react-icons/io5'

const HomePage = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rolesIndex, setRolesIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');

  const roles = useMemo(() => ["Himanshu Shukla.", "Full Stack developer.", "Software Engineer."], [])

  const handleMouseMove = (e) => {
    setCirclePosition({ x: e.clientX, y: e.clientY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const typingSpeed = 100; // Typing speed in milliseconds
    let charIndex = -1;

    const typingInterval = setInterval(() => {
      const role = roles[rolesIndex];
      charIndex++;

      setCurrentRole((prevRole) => role.substring(0, charIndex + 1));

      if (charIndex === role.length - 1) {
        clearInterval(typingInterval);
        setTimeout(() => {
          charIndex = -1;
          setCurrentRole('');
          setRolesIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 4000); // Pause for 3 seconds before changing the role
      }
    }, typingSpeed);

    // Clear the interval on component unmount
    return () => clearInterval(typingInterval);
  }, [rolesIndex, roles]) // Include rolesIndex as a dependency to trigger effect on change

  const radialGradient = `radial-gradient(circle at ${circlePosition.x}px ${circlePosition.y}px, rgba(29, 78, 216, 0.3), transparent 70%)`;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-white overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: isHovered ? radialGradient + ', #05080a' : '#05080a',
        transition: 'background 0.3s ease-in-out',
        height: '60vh'
      }}
    >
      <h1 className='text-6xl font-extrabold mb-6'>{'</>'}</h1>
      <div className="max-w-3xl p-6 text-center">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-200 font-bold mb-4 transition duration-300 ease-in-out`}>
          Hello, I am {currentRole}<span></span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
        Passionate Software Engineer, crafting digital solutions with precision and creativity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/himanshu-portfolio/projects"
            className="flex items-center bg-teal-400/10 font-semibold leading-5 text-teal-300 py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-rgb(94 234 212)"
          >
            View Projects
          </Link>
          <Link
            // to="/contact"
            className="flex items-center bg-teal-400/10 font-semibold leading-5 text-teal-300 py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-rgb(94 234 212)"
          >
            Resume <IoOpenOutline className='ml-1'/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
