'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'Skills' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="py-4 fixed w-full z-50 transition-all duration-300 ease-in-out bg-[#081229] shadow-lg"
    >
      <nav className="container mx-auto px-4 flex justify-between items-center relative">
        <Link href="/" className="text-2xl font-sans font-semibold spacing custom-typography text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:from-pink-500 hover:to-purple-600 transition duration-300 ease-in-out">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {'HIMANSHU'}
          </motion.span>
        </Link>
        {/* Navigation links for larger screens */}
        <div className={`lg:flex hidden space-x-10`}>
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className={`font-sans text-lg transition duration-300 ease-in-out ${
                  pathname === link.href ? 'text-pink-500' : 'text-blue-300 hover:text-pink-500'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Menu icon for smaller screens */}
        <div className="lg:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggleMenu}
            className="focus:outline-none"
          >
            <FiMenu className="w-6 h-6 text-pink-500 hover:text-blue-300 transition duration-300 ease-in-out" />
          </motion.button>
        </div>
        {/* Overlay for smaller screens */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-gradient-to-b from-gray-900 to-blue-900 bg-opacity-95 z-40"
            >
              <div className="flex justify-end p-4">
                <button onClick={handleToggleMenu} className="text-pink-500">
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                className="flex flex-col mt-24 justify-center items-center text-blue-200"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleToggleMenu}
                      className={`font-bold text-xl hover:text-pink-500 transition duration-300 ease-in-out mb-8 ${
                        pathname === link.href ? 'text-pink-500' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;