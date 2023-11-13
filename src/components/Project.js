import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Typical from 'react-typical';

const projects = [
  {
    id: 1,
    name: 'AIREX',
    description: 'Description of Project 1.',
    githubLink: 'https://github.com/username/project1',
    demoLink: 'https://demo.project1.com',
    image: 'https://i.ibb.co/9g0G3zP/aireximage.png',
    skills: ["Nodejs", "Reactjs", "MongoDB"]
  },
  {
    id: 2,
    name: 'AIRFLIX',
    description: 'Description of Project 2.',
    githubLink: 'https://github.com/username/project2',
    demoLink: 'https://demo.project2.com',
    image: 'https://i.ibb.co/R2tWvHn/AIRFLIX.png',
    skills: ["Nodejs", "Reactjs", "MongoDB"]
  },
  {
    id: 3,
    name: 'Chrome Extension SummAize',
    description: 'Description of Project 2.',
    githubLink: 'https://github.com/username/project2',
    demoLink: 'https://demo.project2.com',
    image: 'https://i.ibb.co/dKsJ178/chrome-extension.png',
    skills: ["Nodejs", "Reactjs", "MongoDB"]
  },
  {
    id: 4,
    name: 'DevConnector',
    description: 'Description of Project 2.',
    githubLink: 'https://github.com/username/project2',
    demoLink: 'https://demo.project2.com',
    image: 'https://i.ibb.co/fHKtM0Q/Dev-Connector.webp',
    skills: ["Nodejs", "Reactjs", "MongoDB"]
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-700 to-gray-900 text-white p-8">
      <div className="max-w-8xl px-6 text-left">
        <h1 className="text-4xl md:text-6xl text-center font-bold mb-8 mt-16">
          <Typical steps={['My Projects', 1000]} wrapper="span" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 cursor-pointer p-4 mb-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full ease-in-out"
            >
              <div className="bg-opacity-70 rounded-lg overflow-hidden transition-opacity duration-300 hover:opacity-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-64 rounded-md mb-2 transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1">{project.name}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs shadow-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="flex justify-between space-x-2 items-center">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-teal-300 underline transition-colors duration-300 hover:text-teal-500"
                >
                  Visit
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg transition-colors duration-300 hover:text-gray-300"
                >
                  <FaGithub className="mr-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
