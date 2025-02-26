import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";

const Homemain = ({ setActiveSection }) => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // List of background images
  const backgroundImages = [
    "https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg", // Image 1
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww", // Image 2
    "https://img.aestheticwallpaperai.com/wallpapers/de13ece4-8eb1-49c4-b110-28ffe0781a10.webp", // Image 3
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fading out
      setTimeout(() => {
        setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(false); // Fade back in
      }, 500); // Wait for fade-out before switching the image
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup
  }, [backgroundImages.length]);

  // Initialize Typed.js
  useEffect(() => {
    const element = document.querySelector(".element");
    if (element) {
      const options = {
        strings: ["Front-end Engineer", "Student", "Freelancer", "Designer"],
        typeSpeed: 40,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      };

      const typed = new Typed(element, options);
      return () => typed.destroy();
    } else {
      console.error('Typed.js: Element with class "element" not found.');
    }
  }, []);

  // Handle Navigation
  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div id="home" className="h-full relative">
      {/* Background image container */}

      <div
        className={`absolute inset-0 z-0 ${
          fade ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 ease-in-out`} // Smooth opacity transition
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImages[backgroundImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content container */}
      <div className="h-full w-screen items-center flex flex-col justify-center text-center relative z-10">
        <div className="flex justify-center w-full text-center">
          <h1 className="text-3xl font-bold text-[#705ADD]">
            <p className="text-white text-2xl">I am a </p>
            <span className="element font-bold "></span>
          </h1>
        </div>
        <div className="flex justify-center w-full text-center">
          <p className="text-white w-full px-4 md:px-52 lg:px-96 text-center justify-center mt-2">
          Welcome to Prashant's portfolio! Dive into a world of innovation where creativity meets expertise. Explore diverse projects showcasing skills in full-stack development, the MERN stack, and tailored solutions. Let's build something remarkable together. And dont forget to check out my work, skills, and accomplishments.
          </p>
        </div>
        <NavLink to="/hire-me">
        <button
          className="px-5 py-2 mt-3 text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all text-[#705ADD] rounded-lg"
          onClick={() => handleNavigation("hire")}
        >
          Hire Me
        </button></NavLink>
      </div>
    </div>
  );
};

export default Homemain;
