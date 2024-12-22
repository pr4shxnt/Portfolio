import React, { useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import ProjectsData from "../Data/ProjectsData";
import { ArrowBigRight } from "lucide-react";

const ProjectCard = () => {
  const { sidebarToggle, setSidebarToggle } = useOutletContext();

  const { projectId } = useParams();

  // Find the project by ID
  const project = ProjectsData.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="bg-black h-full flex text-white rounded-lg shadow">
      {sidebarToggle === true ? (
        ""
      ) : (
        <div
          onClick={() => setSidebarToggle(true)}
          className="sm:lft-0 rounded-full bg-gray-600 opacity-50 p-1 fixed lg:hidden"
        >
          <ArrowBigRight />
        </div>
      )}
      <div className="flex flex-col lg:flex-row pt-6  gap-10 justify-between space-x-6">
        {/* Project Thumbnail */}

        <div className="lg:hidden flex flex-col gap-4">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="  object-cover rounded-lg"
          />

          <ul className="flex items-start space-x-4 flex-col">

            <div className="">

              <h2 className="text-lg font-semibold mb-2">Tech Stack:</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li
                  key={tech.name}
                  className="flex gap-2 items-center text-center"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 mb-1"
                  />
                  <span className="text-sm text-gray-600">{tech.name}</span>
                </li>
              ))}
            </div>

          </ul>

          <p className="text-lg mt-4">
            <span className="font-semibold">Status:</span> {project.status}
          </p>
          <div className="my-2 flex text-center justify-center">
            <a href={project.link} className="">
              <button className="py-2 rounded block md:hidden font-light px-2  text-center  bg-[#705ADD]  text-[white] ">
                Open the Project in github
              </button>
            </a>
          </div>
        </div>
        <div className="md:w-full">
          {/* Project Title and Description */}
          <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 mb-4">{project.description}</p>

          <div className="my-2 flex text-center justify-start">
            <a href={project.link} className="">
              <button className="py-2 hidden md:block rounded font-light px-2  text-center  bg-[#705ADD]  text-[white] ">
                Open the Project in github
              </button>
            </a>
          </div>

          {/* Tech Stack */}

          {/* Project Status */}
        </div>
        <div className="hidden lg:flex flex-col gap-4">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="  object-cover w-96 h-40 rounded-lg"
          />

          <ul className="flex items-start space-x-4 flex-col">
            <div className="">
              <h2 className="text-lg w-80 font-semibold mb-2">Tech Stack:</h2>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {project.techStack.map((tech) => (
                <li
                  key={tech.name}
                  className="flex gap-2 items-center text-center"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 mb-1"
                  />
                  <span className="text-sm text-gray-600">{tech.name}</span>
                </li>
              ))}
            </div>
          </ul>

          <p className="text-lg mt-4">
            <span className="font-semibold">Status:</span> {project.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
