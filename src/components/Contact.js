import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import Typical from 'react-typical';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-700 to-gray-900 text-white">
      <div className="max-w-3xl p-4 md:p-6 lg:p-8 text-left">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-6 md:mb-24 mt-6 md:mt-16">
          <Typical steps={['Contact Me', 1000]} wrapper="span" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-gray-800 p-4 md:p-8 mb-4 md:mb-8 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full">
            <div className="flex items-center mb-4 md:mb-8">
              <FaEnvelope className="text-3xl md:text-4xl mr-4" />
              <div>
                <h2 className="text-lg md:text-2xl font-bold mb-2">Email</h2>
                <p className="text-gray-300 text-sm md:text-base">himansushukla3112@gmail.com</p>
              </div>
            </div>
          </div>

          <a href='https://www.linkedin.com/in/himanshu-shukla-23565119a/' className="bg-gray-800 p-4 md:p-8 mb-4 md:mb-8 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full">
            <div className="flex items-center mb-4 md:mb-8">
              <FaLinkedin className="text-3xl md:text-4xl mr-4" />
              <div>
                <h2 className="text-lg md:text-2xl font-bold mb-2">LinkedIn</h2>
                <p className="text-gray-300 text-sm md:text-base">himanshu-shukla-23565119a</p>
              </div>
            </div>
          </a>

          <a href='https://github.com/himanshushukla31' className="bg-gray-800 p-4 md:p-8 mb-4 md:mb-8 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full">
            <div className="flex items-center mb-4 md:mb-8">
              <FaGithub className="text-3xl md:text-4xl mr-4" />
              <div>
                <h2 className="text-lg md:text-2xl font-bold mb-2">Github</h2>
                <p className="text-gray-300 text-sm md:text-base">@himanshushukla31</p>
              </div>
            </div>
          </a>

          <a href="https://www.instagram.com/himan.shukla_/" className="bg-gray-800 p-4 md:p-8 mb-4 md:mb-8 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full">
            <div className="flex items-center mb-4 md:mb-8">
              <FaInstagram className="text-3xl md:text-4xl mr-4" />
              <div>
                <h2 className="text-lg md:text-2xl font-bold mb-2">Instagram</h2>
                <p className="text-gray-300 text-sm md:text-base">@himan.shukla_</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
