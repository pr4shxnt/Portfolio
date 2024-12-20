import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const ProjectMainLayout = () => {
  // State for sidebar toggle
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const sidebarProps = {
    sidebarToggle,
    setSidebarToggle,  // Pass the setter function too
  };

  return (
    <div>
      <div className="pt-16 px-3 md:px-32 container relative flex flex-col gap-3">
        <div className="hidden md:flex items-center justify-center ">
          <img src="https://media.licdn.com/dms/image/D4D12AQHs2FlTkKUUag/article-cover_image-shrink_720_1280/0/1695093973945?e=2147483647&v=beta&t=V60MWTTQyOEZRApsib1UDT4T0c6jVU8rK63NZHGqEj8" className="" alt="" />
        </div>
        <div className="flex">
          {/* Sidebar toggle */}
          <div className={`${sidebarToggle ? "fixed  block" : "hidden"} lg:block h-full`}>
            <Sidebar toggleHandle={sidebarProps} /> {/* Pass the whole sidebarProps */}
          </div>
          <Outlet context={sidebarProps} />
        </div>
      </div>
    </div>
  );
}

export default ProjectMainLayout;
