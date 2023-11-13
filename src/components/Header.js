import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-gray-900 text-teal-300 fixed w-full z-50 transition-all duration-300 ease-in-out">
      <nav className="container mx-auto px-4 flex justify-between items-center relative">
        <Link to="/himanshu-portfolio" className="text-2xl font-semibold custom-typography hover:text-teal-50 transition duration-300 ease-in-out">
          {'{Himanshu}'}
        </Link>
        {/* Overlay for smaller screens */}
        <div className={`lg:hidden fixed inset-0 bg-gray-900 z-40 transition-opacity ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
          <div className="flex justify-end p-4">
            <button onClick={handleToggleMenu} className="text-white">
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col mt-48 justify-center items-center text-white">
            <Link  to="/himanshu-portfolio" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl text-teal-500 hover:text-green-300 transition duration-300 ease-in-out mb-8">
              {'<HOME/>'}
            </Link>
            <Link to="/himanshu-portfolio/experience" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl  text-teal-500 hover:text-green-300 transition duration-300 ease-in-out mb-8">
              {'<EXPERIENCE/>'}
            </Link>
            <Link to="/himanshu-portfolio/projects" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl text-teal-500 hover:text-green-300 transition duration-300 ease-in-out mb-8">
              {'<PROJECTS/>'}
            </Link>
            <Link to="/himanshu-portfolio/contact" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl text-teal-500 hover:text-green-300 transition duration-300 ease-in-out mb-8">
              {'<CONTACT/>'}
            </Link>
            <Link to="/himanshu-portfolio/about" onClick={()=> handleToggleMenu(false)} className="font-bold text-xl text-teal-500 hover:text-green-300 transition duration-300 ease-in-out mb-8">
              {'<SKILLS/>'}
            </Link>
          </div>
        </div>
        {/* Navigation links for larger screens */}
        <div className={`lg:flex hidden space-x-6`}>
          <Link to="/himanshu-portfolio" className="font-bold hover:text-green-300 transition duration-300 ease-in-out">
            {'<HOME/>'}
          </Link>
          <Link to="/himanshu-portfolio/experience" className="font-bold hover:text-green-300 transition duration-300 ease-in-out">
            {'<EXPERIENCE/>'}
          </Link>
          <Link to="/himanshu-portfolio/projects" className="font-bold hover:text-green-300 transition duration-300 ease-in-out">
            {'<PROJECTS/>'}
          </Link>
          <Link to="/himanshu-portfolio/contact" className="font-bold hover:text-green-300 transition duration-300 ease-in-out">
            {'<CONTACT/>'}
          </Link>
          <Link to="/himanshu-portfolio/about" className="font-bold hover:text-green-300 transition duration-300 ease-in-out">
            {'<SKILLS/>'}
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
