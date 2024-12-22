import React, { useState, useEffect } from "react";
import { MoveRightIcon, MoveLeftIcon } from "lucide-react";
import introductions from "./Data/IntroData";

const Intro = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Function to go to the next paragraph
  const handleNext = () => {
    setTransitioning(true);
    setCurrentParagraph((prev) => (prev + 1) % introductions.length);
  };

  // Function to go to the previous paragraph
  const handlePrev = () => {
    setTransitioning(true);
    setCurrentParagraph((prev) => (prev - 1 + introductions.length) % introductions.length);
  };

  // Function to handle dot click (manual navigation)
  const handleDotClick = (index) => {
    setTransitioning(true);
    setCurrentParagraph(index);
  };

  // Auto change every 15 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 15000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Reset transition after animation ends
  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => {
        setTransitioning(false);
      }, 1000); // Wait for transition duration to reset state
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  return (
    <div id="introduction" className="flex relative flex-col gap-10 text-center min-h-[65vh] md:min-h-[45vh] lg:min-h-[500px] bg-black p-16 text-white">
      {/* Title/Header */}
      <h1 className="text-4xl font-bold mb-8">Introduction</h1>

      {/* Main Section with Image and Text */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full overflow-hidden">


        <div
          className={`bg-black bg-opacity-50 w-full md:w-1/2 lg:w-1/3 transition-opacity duration-1000 ease-in ${transitioning ? "opacity-0" : "opacity-100"}`}
        >
          <p className="text-lg md:text-xl">{introductions[currentParagraph].text}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
        >
          <MoveLeftIcon size={24} color="white" />
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {introductions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full ${
                currentParagraph === index ? "bg-white w-3" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
        >
          <MoveRightIcon size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Intro;
