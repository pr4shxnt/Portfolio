import { ArrowBigRightDash } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className='h-full mt-10 rounded-t-3xl w-full bg-[#1A1A1A] text-white flex flex-col justify-between pt-20'>
      <div className="w-full px-10 md:px-32 flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="md:w-[70%] flex flex-col">
          <h1 className="text-5xl text-white">Feel free to raise an issue or fix an error in GitHub.</h1>
          <form action="" className='my-3 text-white relative w-full md:pr-10' >
                <input placeholder="Help me with the improvement...." className='w-full  bg-gray-100 bg-opacity-15 text-white outline-none  rounded-lg px-4 py-3' type="text" />
                <div className="absolute top-0 right-0 md:right-10 rounded-r-lg bg-gray-950 bg-opacity-70 p-3 ">
                <ArrowBigRightDash />
                </div>
            </form>


        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end w-full gap-10 font-light text-gray-300">
          {/* Top Projects */}
          <div>
            <h1 className='text-sm md:text-2xl  font-semibold text-white mb-4'>Top Projects</h1>
            <ul className='text-xs md:text-sm'>
              <a href="" className='hover:underline'>
                <li>Old Portfolio</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Tailor E-com</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Itahari Medicals</li>
              </a>
              <a href="" className='hover:underline'>
                <li>To-Do Web App</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Weather Web App</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Consultancy Web</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Burger House</li>
              </a>
              <a href="/projects" className='underline text-white'>
                <li>View All Projects</li>
              </a>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className='text-sm md:text-2xl  font-semibold text-white mb-4'>Quick Links</h1>
            <ul className='text-xs md:text-sm'>
              <a href="/" className='hover:underline'>
                <li>Home</li>
              </a>
              <a href="#introduction" className='hover:underline'>
                <li>Introduction</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Skills</li>
              </a>
              <a href="/projects" className='hover:underline'>
                <li>Projects</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Contact</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Hire Me</li>
              </a>
            </ul>
          </div>

          {/* Support Me */}
          <div>
            <h1 className='text-sm md:text-2xl font-semibold text-white mb-4'>Support Me</h1>
            <ul className='text-xs  md:text-sm'>
              <a href="" className='hover:underline'>
                <li>Github</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Twitter</li>
              </a>
              <a href="" className='hover:underline'>
                <li>Facebook</li>
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
