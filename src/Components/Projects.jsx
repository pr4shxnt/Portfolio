import React from "react";
import { Link } from "react-router-dom";
import ProjectsData from "./Data/ProjectsData";

const Projects = () => {
  return (
    <div id="projects" className="">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectsData.map((project, index) => (
            <div className="">
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              {/* Image */}
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full  object-cover transition-transform duration-300 group-hover:scale-105 md:group-hover:blur-sm"
              />
              {/* Hover Effect for Title */}
              <div className="absolute hidden inset-0 md:flex items-center justify-center bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-sm font-bold  text-gray-300 hover:text-gray-500 transition-all duration-300 px-4 py-2 rounded"
                >
                  {project.title}
                </Link>
              </div>



            </div>
             <Link
             to={`/projects/${project.id}`}
             className="text-sm font-bold md:hidden text-gray-300 transition-all duration-300 px-4 py-2 rounded"
           >
             {project.title}
           </Link>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
