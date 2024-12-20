import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectsData from '../Data/ProjectsData';
import { X } from 'lucide-react';

const Sidebar = ({ toggleHandle }) => {
  const { sidebarToggle, setSidebarToggle } = toggleHandle; // Destructure the prop

  return (
    <div>
      <div className="bg-gray-800 h-full md:min-h-[106vh] w-60 rounded p-4">
        <div className="flex justify-between mb-4 items-center">
          <h2 className="text-white text-lg">Projects</h2>
          <div className='lg:hidden'>
          <X onClick={() => setSidebarToggle(false)} color="white" /></div>
        </div>
        <div className="flex flex-col space-y-2">
          {ProjectsData.map((p) => (
            <NavLink
            onClick={()=>{
                setSidebarToggle(false);

            }}
              key={p.id}
              to={`/projects/${p.id}`}
              className={({ isActive }) =>
                `p-2 text-sm rounded ${
                  isActive
                    ? 'bg-gray-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {p.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
