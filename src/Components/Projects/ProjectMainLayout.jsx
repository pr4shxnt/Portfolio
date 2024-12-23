import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import banner from "../../assets/images/bannerProjects.png"

const ProjectMainLayout = () => {
  // State for sidebar toggle
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const sidebarProps = {
    sidebarToggle,
    setSidebarToggle,  // Pass the setter function too
  };

  return (
    <div className="min-h-full">
      <div className="pt-16 min-h-full px-3 md:px-32 container relative flex flex-col gap-3">
        <div className="hidden md:flex items-center justify-center">
          <img
            src={banner}
            className=""
            alt=""
          />
        </div>
        <div className="flex min-h-full">
          {/* Sidebar toggle */}
          <div className={`${sidebarToggle ? "fixed block" : "hidden"} lg:block min-h-full`}>
            <Sidebar toggleHandle={sidebarProps} /> {/* Pass the whole sidebarProps */}
          </div>
          <div className="flex min-h-full flex-1">
            <Outlet context={sidebarProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectMainLayout;
