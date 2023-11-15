import React from 'react';
import { FaBriefcase} from 'react-icons/fa';
import Typical from 'react-typical';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const workExperience = [
  {
    id: 1,
    position: 'Product Engineer',
    company: 'Factri.Ai',
    location: 'Bengaluru, Karnataka',
    startDate: 'June 2023',
    endDate: 'Present',
    logo: "https://i.ibb.co/bN6c9RT/factriai-bf95138f.webp",
    responsibilities: [
        'Led the development of a scheduling software with resource-driven order management',
        'Engineered a dynamic, OAuth2.0-integrated multi-tenancy admin page',
        'Optimized UI using Material UI and Syncfusion; implemented Cheerypi and Pgbouncer for database efficiency',
    ],
    skills: ['Django', 'React', 'Linux']
  },
  {
    id: 2,
    position: 'Lead Developer',
    company: 'AAROHI VNIT Nagpur',
    location: 'Nagpur, Maharashtra',
    startDate: 'July 2022',
    endDate: 'October 2022',
    logo: "https://i.ibb.co/rbPtMnp/aarohi-logo.png",
    responsibilities: [
        "Led a team to create a responsive online registration portal for institute events",
        "Developed QR code generation and mailing logic for event registrations using Express.js",
        "Secured the platform with admin authorization and user authentication via JWT"        
    ],
    skills: ['React', 'MongoDB', 'Node']
  },
  {
    id: 3,
    position: 'Full Stack Developer',
    company: 'AXIS VNIT Nagpur',
    location: 'Nagpur, Maharashtra',
    startDate: 'November 2021',
    endDate: 'April 2022',
    logo: "https://i.ibb.co/0XX7C9j/logo.png",
    responsibilities: [
        "Recognized by the Director of Institute for leading a team towards exceptional work on the AWS-based full-stack web platform",
        "Developed RESTful APIs for seamless event registrations and integrated Razorpay API for online payments",
        "Implemented OAuth third-party authentication and designed a highly effective referral system"        
    ],
    skills: ['Javascript/EJS', 'MongoDB', 'Node']
  },
  // Add more work experiences as needed
];

const WorkExperiencePage = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-700 to-gray-900 text-white p-2 md:p-4">
        <div className="max-w-3xl px-2 md:px-4 text-left">
          <h1 className="text-4xl md:text-6xl text-center font-bold mb-4 md:mb-8 mt-16">
            <Typical steps={['Work Experience', 1000]} wrapper="span" />
          </h1>
          <VerticalTimeline layout="1-column-left">
            {workExperience.map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#343a40', color: '#fff', zIndex: 2 }}
                contentArrowStyle={{ borderRight: '7px solid  #343a40' }}
                date={`${experience.startDate} - ${experience.endDate}`}
                iconStyle={{ background: '#61dafb', color: '#fff', zIndex: 3 }}
                icon={<FaBriefcase />}
              >
                <div className="bg-gray-800 p-2 md:p-4 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full">
                  <div className="flex flex-col md:flex-row items-center mb-4">
                    <img
                      height="50"
                      width="50"
                      src={experience.logo}
                      alt='logo'
                      className="mb-2 md:mb-0 mr-0 md:mr-2 rounded-full"
                    />
                    <div>
                      <h2 style={{ color: 'white', textAlign: 'center' }} className="text-xl md:text-2xl font-bold mb-2">
                        {experience.position}
                      </h2>
                      <h3 style={{ color: 'white', textAlign: 'center' }} className="text-md md:text-lg font-semibold mb-2">{experience.company}</h3>
                    </div>
                  </div>
                  <ul className="text-gray-300">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="mb-1">
                        {responsibility}
                      </li>
                    ))}
                    <div className="flex flex-wrap gap-2 mb-2 mt-4">
                {experience.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs shadow-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };
export default WorkExperiencePage;
