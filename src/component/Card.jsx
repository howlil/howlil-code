// Card component
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Card = ({ projects }) => {
    return (
        <div className="flex flex-wrap justify-start max-sm:mb-12">
            {projects.map((project, index) => (
                <div key={index} className="max-sm:w-full max-sm:border md:w-1/2 lg:w-1/3 p-4 mt-3 hover:shadow-lg hover:bg-neutral-700 rounded-lg transition-all ease-in-out duration-300 ">
                    <div className="flex justify-between items-center">
                        <h1 className="text-gray-50 font-semibold text-xl">{project.title.trim()}</h1>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="text-gray-300 text-xl" />
                            </a>
                        )}
                    </div>
                    <p className="text-sm text-gray-400 text-opacity-90 text-justify leading-4 py-3">
                        {project.describtion.trim()}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tag.split(',').map((tag, index) => (
                            <span key={index} className="px-4 py-1 rounded-md border text-xs text-lime-300 m-0">
                                {tag.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
