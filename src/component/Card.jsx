
import { useState } from "react";
import { dataProject } from "../data/dataProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Project from "../pages/Project";


const Card = () => {

  return (
   <div className="  flex flex-wrap justify-start  ">
    {dataProject.map((Project,index)=>(
      <div key={index} className="max-sm:w-full max-sm:border md:w-1/2 lg:w-1/3 p-4 mt-3  hover:shadow-sm hover:bg-neutral-800 rounded-lg transition-all ease-in-out duration-500 ">
        <div className="flex justify-between  items-center">
          <h1 className="text-gray-50 font-semibold text-xl">{Project.title}</h1>
          {Project.github && (
            <a href={Project.github}>
              <FontAwesomeIcon icon={faGithub} className="text-gray-300 text-xl" />
            </a>
          )}
        </div>
        <p className="text-sm text-gray-400 text-opacity-90 text-justify leading-4 py-3 ">
            {Project.describtion}
        </p>
        <div className=" flex flex-wrap gap-2">
          {Project.tag.split(',').map((tag,index)=>(
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
