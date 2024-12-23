import React, { useState, useEffect, useRef } from "react";
import { Github, Instagram, MehIcon, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ProjectsData from "./Data/ProjectsData";

const Navbar = ({ setActiveSection }) => {
  const [showProfilesDropdown, setShowProfilesDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarBlurred, setIsNavbarBlurred] = useState(false);

  const projectsDropdownRef = useRef(null);
  const profilesDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profilesDropdownRef.current &&
        !profilesDropdownRef.current.contains(event.target)
      ) {
        setShowProfilesDropdown(false);
      }
      if (
        projectsDropdownRef.current &&
        !projectsDropdownRef.current.contains(event.target)
      ) {
        setShowProjectsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setShowProfilesDropdown(false);
    setShowProjectsDropdown(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavbarBlurred(true);
      } else {
        setIsNavbarBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const DropdownIcon = ({ isOpen }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div
      className={`w-full fixed text-[#919191] top-0 left-0 z-50 shadow-md ${
        isNavbarBlurred ? "bg-black bg-opacity-70" : "backdrop-blur-none"
      }`}
    >
      <div className="flex p-3 justify-between w-full items-center">
        <Link to="/">
          <div className="text-2xl text-white flex items-center gap-2 cursor-pointer font-semibold">
            <MehIcon size={40} strokeWidth={2} stroke="#705ADD" />
            Prashant
          </div>
        </Link>

        <button
          className="lg:hidden cursor-pointer text-xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <div className="hidden lg:flex justify-between w-[65%]">
          <ul className="flex items-center">
            <li className="cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out mx-3">
              <Link to="" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out mx-3">
              <HashLink smooth to="/#introduction" onClick={handleLinkClick}>
                Introduction
              </HashLink>
            </li>
            <li className="cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out mx-3">
              <HashLink smooth to="/#skills" onClick={handleLinkClick}>
                Skills
              </HashLink>
            </li>
            <div className="relative" ref={projectsDropdownRef}>
              <button
                onClick={() => setShowProjectsDropdown((prev) => !prev)}
                className="relative mx-3 cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out flex items-center"
              >
                Projects
                <DropdownIcon isOpen={showProjectsDropdown} />
              </button>
              {showProjectsDropdown && (
                <div className="absolute w-[33vw] top-12 -left-44 rounded-lg bg-black bg-opacity-30 backdrop-blur-sm p-1 shadow-lg">
                  <div className="grid grid-cols-3 gap-2 pb-4">
                    {ProjectsData.map((project) => (
                      <li
                        key={project.id}
                        className="py-2 text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all flex items-center gap-2"
                      >
                        <Link to={`/projects/${project.id}`}
                          onClick={handleLinkClick}
                          className="flex gap-2"
                        >
                          <Code2 />
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                  <Link to="/projects" onClick={handleLinkClick}>
                    <div className="p-2 w-full text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all text-[#705ADD] rounded-lg">
                      View All Projects
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <li className="mx-3 cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out">
              <HashLink smooth to="/#contact" onClick={handleLinkClick}>
                Contact
              </HashLink>
            </li>
          </ul>

          <div className="relative" ref={profilesDropdownRef}>
            <button
              onClick={() => setShowProfilesDropdown((prev) => !prev)}
              className="border p-2 rounded-full flex items-center"
            >
              <img
                src="https://avatars.githubusercontent.com/u/130303397?v=4"
                alt=""
                className="h-6 w-6 rounded-full mr-2"
              />
              Profiles
              <DropdownIcon isOpen={showProfilesDropdown} />
            </button>
            {showProfilesDropdown && (
              <ul className="absolute bg-black bg-opacity-30 backdrop-blur-lg text-white top-16 rounded-lg w-[15vw] right-0 p-2 shadow-lg">
                <li className="p-2 flex items-center text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all gap-2">
                  <a
                    target="_blank"
                    className="flex gap-2"
                    href="https://instagram.com/pr4xnt"
                    onClick={handleLinkClick}
                  >
                    <Instagram /> Instagram
                  </a>
                </li>
                <li className="p-2 flex items-center text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all gap-2">
                  <a
                    target="_blank"
                    className="flex gap-2"
                    href="https://github.com/pr4shxnt"
                    onClick={handleLinkClick}
                  >
                    <Github /> Github
                  </a>
                </li>
                <li className="p-2 text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all text-[#705ADD] rounded-lg">
                  <Link to="/hire-me" onClick={handleLinkClick}>
                    Hire Me
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } border-t border-gray-200 w-full bg-black bg-opacity-70 backdrop-blur-sm h-screen text-white px-10 py-10`}
      >
        <ul className="flex flex-col items-center text-center gap-3">
          <li className="border-b p-2 w-full text-center">
            <Link to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="border-b p-2 w-full text-center">
            <HashLink smooth to="/#introduction" onClick={handleLinkClick}>
              Introduction
            </HashLink>
          </li>
          <li className="border-b p-2 w-full text-center">
            <HashLink smooth to="/#skills" onClick={handleLinkClick}>
              Skills
            </HashLink>
          </li>
          <li className="border-b p-2 w-full text-center">
            <Link to="/projects" onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li className="border-b p-2 w-full text-center">
            <HashLink smooth to="/#contact" onClick={handleLinkClick}>
              Contact
            </HashLink>
          </li>
          <li className="border-b p-2 w-full text-center">
            <Link to="/hire-me" onClick={handleLinkClick}>
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
