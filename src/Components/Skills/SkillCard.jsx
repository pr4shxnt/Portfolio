import React, { useState } from "react";

const SkillCard = ({ skill }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="relative">
      {/* Skill Logo and Name */}
      <div
        onClick={handlePopupToggle}
        className="cursor-pointer flex flex-col items-center"
      >
        <img src={skill.logo} className="h-20 w-20" alt={skill.name} />
        <h2 className="text-white text-xl hover:text-gray-400 transition-all duration-300 ease-in-out mt-2">{skill.name}</h2>
      </div>

      {/* Background Blur and Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={handlePopupToggle} // Close popup when clicking outside
          ></div>

          {/* Popup Content */}
          <div className="z-20 flex flex-col items-center bg-gray-900 text-white p-6 rounded shadow-lg w-3/4 max-w-md">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-xl font-bold mb-4">{skill.name}</h2>
            <p className="text-sm text-gray-300 text-center">
              {skill.description}
            </p>
            <button
              onClick={handlePopupToggle}
              className="mt-4 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
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
