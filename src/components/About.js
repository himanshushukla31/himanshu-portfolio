import React from 'react';
import Typical from 'react-typical';

const skills = {
    languages: ['JavaScript', 'HTML', 'CSS', 'Python', 'C++'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Django'],
    databases: ['MongoDB', 'PostgreSQL'],
    cloud: ['AWS', 'Docker', 'Linux'],
  };

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl p-6 text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-16 text-center">
          <Typical steps={['About me', 1000]} wrapper="span" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image Section (30%) */}
          <div className="md:col-span-1 max-h-72 md:h-auto bg-gray-800 p-8 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/1vxdd0z/himanshu.jpg"
              alt="himanshu"
              border="0"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          
          {/* Text Section (70%) */}
          <div className="md:col-span-2 bg-gray-800 p-8 rounded-lg overflow-hidden">
            <h2 className="text-3xl font-bold mb-4">Why me?</h2>
            <p className="text-gray-300 mb-6">
                Product Engineer and Fullstack Developer specializing in server-side technologies, database management, and front-end development. Skilled in technologies like Django REST Framework, React.js, Node.js, and MongoDB. Led successful projects, developing dynamic online registration portals and full-stack websites. Passionate about leveraging technology to solve real world problems.
            </p>
            <p className="text-gray-300">
              I Love experimenting with technologies and enjoy hands on problem solving approach.
            </p>

            <p className="text-gray-300 mt-4">
            I am currently delving into cloud technologies, studying system design, and sharpening my problem-solving skills in data structures and algorithms.
            </p>

            {/* Skills Section */}
            <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div>
        <h3 className="text-xl font-bold mb-2">Languages</h3>
        <div className="flex flex-wrap gap-4">
          {skills.languages.map((language, index) => (
            <div key={index} className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md">
              {language}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Frameworks</h3>
        <div className="flex flex-wrap gap-4">
          {skills.frameworks.map((framework, index) => (
            <div key={index} className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md">
              {framework}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Databases</h3>
        <div className="flex flex-wrap gap-4">
          {skills.databases.map((database, index) => (
            <div key={index} className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md">
              {database}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Cloud/Devops</h3>
        <div className="flex flex-wrap gap-4">
          {skills.cloud.map((cloudService, index) => (
            <div key={index} className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md">
              {cloudService}
            </div>
          ))}
        </div>
      </div>
    </div>

            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">Links</h2>
              <div className="flex flex-wrap gap-4">
              <a href='https://github.com/himanshushukla31' className="bg-white text-white cursor-pointer px-4 py-2 rounded-md shadow-md">
                     <svg className=' h-10 w-10 p-1 text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
               </a>
               <a href='https://www.linkedin.com/in/himanshu-shukla-23565119a/' className="bg-white text-white cursor-pointer px-4 py-2 rounded-md shadow-md">
               <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
               </a>
               <div className="bg-white text-white cursor-pointer px-4 py-2 rounded-md shadow-md">
               <svg className='h-10 w-10 p-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path><path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path><path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path></svg>
               </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
