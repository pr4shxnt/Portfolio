import React, { useState, useEffect } from "react";

const SkillCard = ({ skill }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  // Prevent background scrolling and close popup on Escape key
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "auto";

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && showPopup) {
        setShowPopup(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPopup]);

  return (
    <div className="relative">
      {/* Skill Logo and Name */}
      <div
        onClick={handlePopupToggle}
        className="cursor-pointer flex flex-col items-center"
      >
        <img
          src={skill.logo}
          className="h-[55px] w-12h-[55px] md:h-20 md:w-20"
          alt={skill.name}
          loading="lazy"
        />
      </div>

      {/* Background Blur and Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center"
          role="dialog"
          aria-labelledby={`${skill.name}-popup`}
          aria-hidden={!showPopup}
        >
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handlePopupToggle} // Close popup when clicking outside
          ></div>

          {/* Popup Content */}
          <div className="z-20 flex flex-col items-center bg-gray-900 text-white p-6 rounded-3xl shadow-lg w-3/4 max-w-md">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-xl font-bold mb-4">{skill.name}</h2>
            <p className="text-sm text-gray-300 text-center">
              {skill.description}
            </p>
            <a
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm font-thin underline"
            >
              Learn from where I did
            </a>
            <button
              onClick={handlePopupToggle}
              className="p-2 w-1/2 mt-3 text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all text-[#705ADD] rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
