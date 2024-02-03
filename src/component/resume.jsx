import React from 'react';
import { edu, experience } from "../data/expertData";

const Resume = () => {
  return (
    <div className="p-8 md:mb-20 hover:bg-neutral-900 transition-all duration-500 ease-in-out rounded-xl">
        <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute w-0.5 bg-gray-300 dark:bg-gray-700 h-full left-5 md:left-3.5"></div>
          
          {experience.map((item, index) => (
          <div key={index} className="mb-8 flex">
            {/* Timeline circle */}
            <div className="z-10">
              <div className="absolute left-4 md:left-4 transform -translate-x-1/2 bg-lime-300 rounded-full h-4 w-4 mt-1.5"></div>
            </div>
            {/* Content */}
            <div className="flex-grow pl-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.position} - {item.company}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{item.description}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Expertise: {item.expertise}</p>
            </div>
          </div>
        ))}
        </div>
        </section>
        <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute w-0.5 bg-gray-300 dark:bg-gray-700 h-full left-5 md:left-3.5"></div>
          
          {edu.map((edu, index) => (
            <div key={index} className="mb-8 flex">
              {/* Timeline circle */}
              <div className="z-10">
                <div className="absolute left-4 md:left-4 transform -translate-x-1/2 bg-lime-300 rounded-full h-4 w-4 mt-1.5"></div>
              </div>
              {/* Content */}
              <div className="flex-grow pl-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.school}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{edu.field}</p>
                {edu.gpa && <p className="text-sm text-gray-700 dark:text-gray-300">GPA: {edu.gpa}</p>}
              </div>
            </div>
          ))}
        </div>
        </section>
    </div>
  );
};

export default Resume;
