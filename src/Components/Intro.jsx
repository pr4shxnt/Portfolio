import React, { useState, useEffect } from "react";
import { MoveRightIcon, MoveLeftIcon } from "lucide-react";
import introductions from "./Data/IntroData";

const Intro = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [visibleParagraph, setVisibleParagraph] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeParagraph = (newIndex) => {
    setIsFading(true); // Start fade out
    setTimeout(() => {
      setCurrentParagraph(newIndex);
      setVisibleParagraph(newIndex);
      setIsFading(false); // Start fade in
    }, 400); // Wait for fade-out to complete (same as CSS duration)
  };

  const handleNext = () => {
    changeParagraph((currentParagraph + 1) % introductions.length);
  };

  const handlePrev = () => {
    changeParagraph((currentParagraph - 1 + introductions.length) % introductions.length);
  };

  const handleDotClick = (index) => {
    changeParagraph(index);
  };

  // Auto change every 15 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 15000);
    return () => clearInterval(interval);
  }, [currentParagraph]);

  return (
    <div
      id="introduction"
      className="flex relative flex-col gap-10 text-center min-h-[65vh] md:min-h-[45vh] lg:min-h-[500px] bg-black p-16 text-white"
    >
      <h1 className="text-4xl font-bold mb-8">Introduction</h1>

      {/* Animated Text Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full overflow-hidden">
        <div
          className={`bg-black bg-opacity-50 w-full md:w-1/2 lg:w-1/3 transition-all duration-700 ease-in-out transform ${
            isFading ? "opacity-0 " : "opacity-100 "
          }`}
        >
          <p className="text-lg md:text-xl">{introductions[visibleParagraph].text}</p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
        >
          <MoveLeftIcon size={24} color="white" />
        </button>

        <div className="flex gap-2">
          {introductions.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentParagraph === index ? "bg-white w-3" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>

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
