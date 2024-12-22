import React, { useState } from "react";
import CV from "../../assets/PrashantCV.pdf";

const Hireme = () => {
  const [showForm, setShowForm] = useState(true);
  const [org, setOrg] = useState(false);

  return (
    <div className="w-screen py-10">
      <div className="w-full shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white">Hire Me</h1>
          <p className="text-gray-500">Let's create something special together.</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-md font-semibold ${
              !showForm
                ? "bg-[#705ADD] text-white"
                : "p-2 text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all  text-[#705ADD]"
            }`}
            onClick={() => setShowForm(false)}
          >
            Resume
          </button>
          <button
            className={`px-4 py-2 rounded-md font-semibold ${
              showForm
                ? "bg-[#705ADD] text-white"
                : "p-2 text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all  text-[#705ADD]"
            }`}
            onClick={() => setShowForm(true)}
          >
            Hire Me
          </button>
        </div>

        {/* Conditional Rendering */}
        {!showForm ? (
          /* CV Section */
          <div className="flex flex-col justify-center mx-auto items-center">
            <iframe
              src={CV}
              title="My CV"
              className="w-3/4 h-screen rounded-md shadow-md"
              frameBorder="0"
            ></iframe>
            <p className="text-sm text-gray-500 text-center mt-4">
              Want to download my CV?{" "}
              <a
                href={CV}
                download
                className="text-blue-500 underline"
              >
                Click here
              </a>
            </p>
          </div>
        ) : (
          /* Hire Me Form Section */
          <div className="flex flex-col items-center ">

            <form action="" method="post" className="space-y-4 md:w-1/2 ">
              {/* Name Input */}
              <label className="text-white" htmlFor="">is this an org ?
              <input type="checkbox" onChange={()=>{setOrg(!org)}}/> </label>


              <div className="flex gap-3">
              <input
                type="text"
                className="w-full bg-gray-100 bg-opacity-15 text-white outline-none  rounded-lg px-4 py-3"
                placeholder={!org ?  "Your Full Name" : "Company Name" }
                required
              />

              <input
                type="number"
                className="w-full bg-gray-100 bg-opacity-15 text-white outline-none  rounded-lg px-4 py-3"
                placeholder={!org ?  "Your contact number" : "Company's Contact number" }
                required
              />
              </div>

              {/* Email Input */}
              <input
                type="email"
                className="w-full bg-gray-100 bg-opacity-15 text-white outline-none  rounded-lg px-4 py-3"
                placeholder={!org ?  "Your contact email" : "Company's Contact email" }
                required
              />


<div className="text-gray-700 mb-4 w-full flex gap-5">
  <select
    id="hire-role"
    className="w-full bg-gray-100 bg-opacity-15 outline-none  rounded-lg px-4 py-3"
    required
  >
    <option className="w-full bg-black text-white outline-none  rounded-lg px-4 py-3" value="" disabled selected>
      Hire me as a
    </option>
    <option className="w-full bg-black text-gray-100 outline-none  rounded-lg px-4 py-3" value="frontend-developer">Frontend Developer</option>
    <option className="w-full bg-black text-gray-100  outline-none  rounded-lg px-4 py-3" value="backend-developer">Backend Developer</option>
    <option className="w-full bg-black text-gray-100 outline-none  rounded-lg px-4 py-3" value="fullstack-developer">Fullstack Developer</option>
    <option className="w-full bg-black text-gray-100 outline-none  rounded-lg px-4 py-3" value="ui-ux-designer">UI/UX Designer</option>
    <option className="w-full bg-black text-gray-100 outline-none  rounded-lg px-4 py-3" value="web-designer">Web Designer</option>
    <option className="w-full bg-black text-gray-100 outline-none  rounded-lg px-4 py-3" value="other">Other</option>
  </select>
</div>

              {/* Message Textarea */}
              <textarea
                className="w-full bg-gray-100 bg-opacity-15 text-white outline-none  rounded-lg px-4 py-3"
                placeholder="Your Message (e.g., project details or collaboration request)"
                rows="5"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="p-2 w-full text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all  text-[#705ADD] rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hireme;
