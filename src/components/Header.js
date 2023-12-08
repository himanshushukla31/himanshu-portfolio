import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-[#191d3a] text-teal-300 fixed w-full z-50 transition-all duration-300 ease-in-out">
      <nav className="container mx-auto px-4 flex justify-between items-center relative">
        <Link to="/" className="text-2xl font-sans font-semibold custom-typography text-white hover:text-pink-300 transition duration-300 ease-in-out">
          {'Himanshu'}
        </Link>
        {/* Overlay for smaller screens */}
        <div className={`lg:hidden fixed inset-0 bg-gray-900 z-40 transition-opacity ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
          <div className="flex justify-end p-4">
            <button onClick={handleToggleMenu} className="text-white">
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col mt-48 justify-center items-center text-white">
            <Link  to="/" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl text-teal-500  transition duration-300 ease-in-out mb-8">
              {'Home'}
            </Link>
            <Link to="/experience" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl  text-teal-500  transition duration-300 ease-in-out mb-8">
              {'Experience'}
            </Link>
            <Link to="/projects" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl text-teal-500  transition duration-300 ease-in-out mb-8">
              {'Projects'}
            </Link>
            <Link to="/contact" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl text-teal-500  transition duration-300 ease-in-out mb-8">
              {'Contact'}
            </Link>
            <Link to="/about" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl text-teal-500  transition duration-300 ease-in-out mb-8">
              {'Skills'}
            </Link>
          </div>
        </div>
        {/* Navigation links for larger screens */}
        <div className={`lg:flex hidden space-x-10`}>
          <Link to="" className="font-sans text-white  text-lg transition duration-300 ease-in-out">
            {'Home'}
          </Link>
          <Link to="/experience" className="font-sans text-white text-lg transition duration-300 ease-in-out">
            {'Experience'}
          </Link>
          <Link to="/projects" className="font-sans text-white  text-lg transition duration-300 ease-in-out">
            {'Projects'}
          </Link>
          <Link to="/contact" className="font-sans text-white  text-lg transition duration-300 ease-in-out">
            {'Contact'}
          </Link>
          <Link to="/about" className="font-sans text-white  text-lg transition duration-300 ease-in-out">
            {'Skills'}
          </Link>
        </div>
        {/* Menu icon for smaller screens */}
        <div className="lg:hidden">
          <button onClick={handleToggleMenu} className="focus:outline-none">
            <FiMenu className="w-6 h-6 text-teal-300 hover:text-teal-50 transition duration-300 ease-in-out" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
