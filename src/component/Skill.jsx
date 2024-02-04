import React from 'react';
import { skills } from '../data/expertData'; // Adjust the import path as necessary

const Skill = () => {
  return (
    <div className='p-8 md:mb-20'>
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skill</h2>
    <div className="flex flex-wrap justify-start items-center">
      {skills.map((skill, index) => (
        <div key={index} className="m-1">
          <img className='hover:scale-105 transition-all duration-500 ease-in-out ' src={skill.image} alt={skill.name} title={skill.name} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skill;
