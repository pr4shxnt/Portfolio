import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectsData from '../Data/ProjectsData';
import { X } from 'lucide-react';

const Sidebar = ({ toggleHandle }) => {
  const { sidebarToggle, setSidebarToggle } = toggleHandle; // Destructure props

  return (
    <div className="h-full w-60 bg-gray-800 rounded p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg">Projects</h2>
        {/* Close button for mobile view */}
        <div className="lg:hidden">
          <X
            onClick={() => setSidebarToggle(false)}
            color="white"
            className="cursor-pointer"
            aria-label="Close Sidebar"
          />
        </div>
      </div>

      {/* Projects Navigation */}
      <div className="flex flex-col space-y-2">
        <NavLink
          to="/projects"
          onClick={() => setSidebarToggle(false)}
          className={({ isActive }) =>
            `p-2 text-sm rounded text-gray-300 `
          }
        >
          All Projects
        </NavLink>
        {ProjectsData.map((project) => (
          <NavLink
            key={project.id}
            to={`/projects/${project.id}`}
            onClick={() => setSidebarToggle(false)}
            className={({ isActive }) =>
              `p-2 text-sm rounded ${
                isActive ? 'bg-gray-600 text-white' : 'text-gray-300 hover:text-white'
              }`
            }
          >
            {project.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
