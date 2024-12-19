import React, { useState, useEffect, useRef } from "react";
import { Github, Instagram, MehIcon, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ setActiveSection }) => {
  const [showProfilesDropdown, setShowProfilesDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarBlurred, setIsNavbarBlurred] = useState(false); // Track scroll position for blur

  // References for detecting clicks outside the dropdowns
  const projectsDropdownRef = useRef(null);
  const profilesDropdownRef = useRef(null);

  // Close dropdowns if clicked outside
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

  // Close dropdowns and mobile menu on link click
  const handleLinkClick = () => {
    setShowProfilesDropdown(false);
    setShowProjectsDropdown(false);
    setIsMenuOpen(false);
  };

  // Scroll effect to trigger navbar blur
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
      className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className={`w-full fixed text-[#919191] top-0 left-0 z-50 shadow-md ${isNavbarBlurred ? 'bg-black bg-opacity-70' : 'backdrop-blur-none'}`}>
      <div className="flex p-3 justify-between md:backdrop-blur-none backdrop-blur-sm w-full items-center">
        <Link to='/'><div className="text-2xl text-white flex items-center gap-2 cursor-pointer font-semibold">
          <MehIcon size={40} strokeWidth={2} stroke="#705ADD" />
          Prashant
        </div></Link>


        <button className="md:hidden cursor-pointer text-xl" onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <div className="hidden md:flex justify-between w-[65%]">
          <ul className="flex items-center">
            <li className="cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out mx-3">
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out mx-3">
              <a href="/#introduction" onClick={handleLinkClick}>Introduction</a>
            </li>
            <li className="cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out mx-3">
              <a href="/#skills" onClick={handleLinkClick}>Skills</a>
            </li>

            <div className="relative" ref={projectsDropdownRef}>
              <button onClick={() => setShowProjectsDropdown((prev) => !prev)} className="relative mx-3 cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out flex text-center justify-between items-center">
                Projects
                <DropdownIcon isOpen={showProjectsDropdown} />
              </button>
              {showProjectsDropdown && (
                <div className="absolute cursor-pointer w-[33vw] top-12 -left-44 rounded-lg backdrop-blur-sm p-1 shadow-lg">
                  <div className="grid grid-cols-3 gap-x-2 gap-y-2 pb-4 w-full">
                    <li className="py-2 flex justify-start text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all items-center gap-2">
                      <a href="/projects/consultancy-web" className="flex gap-2" onClick={handleLinkClick}><Code2 /> Consultancy</a>
                    </li>
                    <li className="py-2 flex justify-start text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all items-center gap-2">
                      <a href="/projects/consultancy-web" className="flex gap-2" onClick={handleLinkClick}><Code2 /> Burger House</a>
                    </li>
                    <li className="py-2 flex justify-start text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all items-center gap-2">
                      <a href="/projects/consultancy-web" className="flex gap-2" onClick={handleLinkClick}><Code2 /> Weather App</a>
                    </li>
                    <li className="py-2 flex justify-start text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all items-center gap-2">
                      <a href="/projects/consultancy-web" className="flex gap-2" onClick={handleLinkClick}><Code2 /> To-do App</a>
                    </li>
                    <li className="py-2 flex justify-start text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all items-center gap-2">
                      <a href="/projects/consultancy-web" className="flex gap-2" onClick={handleLinkClick}><Code2 /> Old Portfolio</a>
                    </li>
                    <li className="py-2 flex justify-start text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all items-center gap-2">
                      <a href="/projects/consultancy-web" className="flex gap-2" onClick={handleLinkClick}><Code2 /> Tailor E-com</a>
                    </li>
                  </div>


                  <Link to="/projects" className="w-full" onClick={handleLinkClick}><div className="p-2 w-full text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all text-[#705ADD] rounded-lg">
                    View All Projects
                  </div></Link>
                </div>
              )}
            </div>

            <li className="mx-3 cursor-pointer font-light text-md hover:text-white transition-all duration-300 ease-in-out">
              <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>

          <div className="relative" ref={profilesDropdownRef}>
            <button onClick={() => setShowProfilesDropdown((prev) => !prev)} className="relative cursor-pointer border p-2 rounded-full flex text-center w-full justify-between items-center">
              <img src="https://avatars.githubusercontent.com/u/130303397?v=4" alt="" className="h-6 w-6 rounded-full mr-2" />
              Profiles
              <DropdownIcon isOpen={showProfilesDropdown} />
            </button>
            {showProfilesDropdown && (
              <ul className="absolute cursor-pointer bg-transparent backdrop-blur-sm text-center text-white top-16 rounded-lg w-[15vw] right-0 p-2 shadow-lg">
                <li className="p-2 flex justify-start items-center text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all gap-2">
                  <Link to="/instagram" onClick={handleLinkClick}><Instagram /> Instagram</Link>
                </li>
                <li className="p-2 flex justify-start text-gray-400 hover:text-[#705ADD] ease-in-out duration-300 transition-all items-center gap-2">
                  <Link to="/github" onClick={handleLinkClick}><Github /> Github</Link>
                </li>
                <li className="p-2 w-full text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all text-[#705ADD] rounded-lg">
                  <Link to="/hire-me" onClick={handleLinkClick}>Hire Me</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} border-t border-gray-200 w-full bg-transparent backdrop-blur-sm h-screen text-white px-10 py-10`}>
        <ul className="flex flex-col justify-center items-center text-center gap-3">
          <li className=" border-b p-2  w-full text-center">
            <Link to="/home" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className=" border-b-2 p-2  w-full text-center">
            <Link to="/introduction" onClick={handleLinkClick}>Introduction</Link>
          </li>
          <li className=" border-b-2 p-2  w-full text-center">
            <Link to="/skills" onClick={handleLinkClick}>Skills</Link>
          </li>

          <li className="relative border-b-2 p-2 w-full text-center flex flex-col items-center justify-between" onClick={() => setShowProjectsDropdown((prev) => !prev)}>
            <span>Projects</span>
            {showProjectsDropdown && (
              <div className="w-full flex flex-col items-center mt-2 gap-2">
                <Link to="/consultancy-web" onClick={handleLinkClick}>Consulancy-web</Link>
                <Link to="/burger-house" onClick={handleLinkClick}>Burger-house</Link>
                <a href="/tailor-ecom" onClick={handleLinkClick}>Tailor e-com</a>
                <Link to="/projects" onClick={handleLinkClick}>View All Projects</Link>
              </div>
            )}
          </li>
          <li className=" border-b p-2  w-full text-center">
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
