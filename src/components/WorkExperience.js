import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
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
  },
  {
    id: 2,
    position: 'Lead Developer',
    company: 'AAROHI VNIT Nagpur',
    location: 'Nagpur, Maharashtra',
    startDate: 'June 2018',
    endDate: 'December 2019',
    logo: "https://i.ibb.co/rbPtMnp/aarohi-logo.png",
    responsibilities: [
        "Led a team to create a responsive online registration portal for institute events",
        "Developed QR code generation and mailing logic for event registrations using Express.js",
        "Secured the platform with admin authorization and user authentication via JWT"        
    ],
  },
  {
    id: 3,
    position: 'Full Stack Developer',
    company: 'AXIS VNIT Nagpur',
    location: 'Nagpur, Maharashtra',
    startDate: 'June 2018',
    endDate: 'December 2019',
    logo: "https://i.ibb.co/0XX7C9j/logo.png",
    responsibilities: [
        "Recognized by the Director of Institute for leading a team towards exceptional work on the AWS-based full-stack web platform",
        "Developed RESTful APIs for seamless event registrations and integrated Razorpay API for online payments",
        "Implemented OAuth third-party authentication and designed a highly effective referral system"        
    ],
  },
  // Add more work experiences as needed
];

const WorkExperiencePage = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-950 via-gray-700 to-gray-900 text-white p-8">
        <div className="max-w-3xl px-6 text-left">
          <h1 className="text-4xl md:text-6xl text-center font-bold mb-12 mt-16">
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
                <div className="bg-gray-800 p-4 md:p-8 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full">
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                      height="60"
                      width="60"
                      src={experience.logo}
                      alt='logo'
                      className="mb-4 md:mb-0 mr-0 md:mr-4 rounded-full"
                    />
                    <div>
                      <h2 style={{ color: 'white', textAlign: 'center'}} className="text-2xl md:text-2xl font-bold mb-2">
                        {experience.position}
                      </h2>
                      <h3 style={{ color: 'white', textAlign: 'center'}} className="text-lg md:text-xl font-semibold mb-4">{experience.company}</h3>
                    </div>
                  </div>
                  <ul className="text-gray-300">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="mb-2">
                        {responsibility}
                      </li>
                    ))}
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
