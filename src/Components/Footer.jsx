import { ArrowBigRightDash } from 'lucide-react';
import React from 'react';
import ProjectsData from './Data/ProjectsData';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='min-h-[70vh] mt-10 rounded-t-3xl w-full bg-[#1A1A1A] text-white flex flex-col justify-between pt-20'>
      <div className="w-full px-10 md:px-32 flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="lg:w-[70%] flex flex-col gap-6">
          <h1 className="text-5xl text-white">Feel free to raise an issue or fix an error in GitHub.</h1>
          <form action="" className='my-3 text-white relative w-full md:pr-10' >
                <input placeholder="send e-mail for requests." className='w-full  bg-gray-100 bg-opacity-15 text-white outline-none  rounded-lg px-4 py-3' type="text" />
                <button className="absolute top-0 right-0 md:right-10 rounded-r-lg bg-gray-950 bg-opacity-70 p-3 ">
                <ArrowBigRightDash />
                </button>
            </form>


        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end w-full gap-10 font-light text-gray-300">
          {/* Top Projects */}
          <div>
            <h1 className='text-sm md:text-2xl  font-semibold text-white mb-4'>Top Projects</h1>
            <ul className='text-xs md:text-sm'>
            {ProjectsData.map((project) => (
                      <li
                        key={project.id}
                      >
                        <Link
                        className='hover:underline'
                          to={`/projects/${project.id}`}
                        >

                          {project.title}
                        </Link>
                      </li>
                    ))}
                    <li className="">
                    <Link
                        className='hover:underline'
                          to={`/projects`}
                        >

                          All projects
                        </Link>
                    </li>
              </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className='text-sm md:text-2xl  font-semibold text-white mb-4'>Quick Links</h1>
            <ul className='text-xs md:text-sm'>
              <Link to="/" className='hover:underline'>
                <li>Home</li>
              </Link>
              <a href="/#introduction" className='hover:underline'>
                <li>Introduction</li>
              </a>
              <a href="/#skills" className='hover:underline'>
                <li>Skills</li>
              </a>
              <Link to="/projects" className='hover:underline'>
                <li>Projects</li>
              </Link>
              <a href="/#contact" className='hover:underline'>
                <li>Contact</li>
              </a>
              <Link to="/hire-me" className='hover:underline'>
                <li>Hire Me</li>
              </Link>
            </ul>
          </div>

          {/* Support Me */}
          <div>
            <h1 className='text-sm md:text-2xl font-semibold text-white mb-4'>Support Me</h1>
            <ul className='text-xs  md:text-sm'>
              <a target='_blank' href="https://github.com/pr4shxnt" className='hover:underline'>
                <li>Github</li>
              </a>
              <a target='_blank' href="https://x.com/pr4xnt" className='hover:underline'>
                <li>Twitter</li>
              </a>
              <a target='_blank' href="https://instagram.com/pr4xnt" className='hover:underline'>
                <li>Instagram</li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full py-5 text-center bg-[#2E2E2E] mt-10">
        <p className="text-sm text-gray-400">© 2024 Prashant Adhikari. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
