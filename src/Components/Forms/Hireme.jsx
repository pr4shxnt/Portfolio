import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CV from "../../assets/PrashantCV.pdf";

const Hireme = () => {
  const [showForm, setShowForm] = useState(true);
  const [org, setOrg] = useState(false);
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Prepare the template parameters with checkbox state
    const templateParams = {
      organization: org ? "Yes" : "No", // Send as Yes/No in the email
      from_name: form.current.from_name.value,
      contact_number: form.current.contact_number.value,
      from_email: form.current.from_email.value,
      role: form.current.role.value,
      message: form.current.message.value,
    };

    emailjs
      .sendForm(
        "service_v97m70m",
        "template_n5gm16i",
        form.current,
        "UMUiJfY7eow45AAN9",
        templateParams // Include templateParams here
      )
      .then(
        () => {
          alert("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

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
            aria-pressed={!showForm}
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
            aria-pressed={showForm}
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
              className="w-3/4 h-[50vh] lg:w-1/2 lg:h-screen rounded-md shadow-md"
              frameBorder="0"
            ></iframe>
            <p className="text-sm text-gray-500 text-center mt-4">
              Want to download my CV?{" "}
              <a href={CV} download className="text-blue-500 underline">
                Click here
              </a>
            </p>
          </div>
        ) : (
          /* Hire Me Form Section */
          <div className="flex flex-col items-center ">
            <form ref={form} onSubmit={sendEmail} className="space-y-4 md:w-1/2">
              {/* Organization Checkbox */}
              <label className="text-white" htmlFor="organization">
                Is this an organization?
                <input
                  type="checkbox"
                  id="organization"
                  name="organization"
                  onChange={() => setOrg(!org)}
                  className="ml-2"
                />
              </label>

              {/* Name and Contact Number Inputs */}
              <div className="flex gap-3">
                <input
                  type="text"
                  name="from_name"
                  className="w-full bg-gray-100 bg-opacity-15 text-white outline-none rounded-lg px-4 py-3"
                  placeholder={!org ? "Your Full Name" : "Company Name"}
                  required
                />
                <input
                  type="tel"
                  name="contact_number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit number"
                  className="w-full bg-gray-100 bg-opacity-15 text-white outline-none rounded-lg px-4 py-3"
                  placeholder={!org ? "Your Contact Number" : "Company's Contact Number"}
                  required
                />
              </div>

              {/* Email Input */}
              <input
                type="email"
                name="from_email"
                className="w-full bg-gray-100 bg-opacity-15 text-white outline-none rounded-lg px-4 py-3"
                placeholder={!org ? "Your Contact Email" : "Company's Contact Email"}
                required
              />

              {/* Role Dropdown */}
              <div className="text-gray-700 mb-4 w-full flex gap-5">
                <select
                  id="hire-role"
                  name="role"
                  className="w-full bg-gray-100 bg-opacity-15 outline-none rounded-lg px-4 py-3"
                  required
                >
                  <option value="">Hire me as a</option>
                  <option value="frontend-developer">Frontend Developer</option>
                  <option value="backend-developer">Backend Developer</option>
                  <option value="fullstack-developer">Fullstack Developer</option>
                  <option value="ui-ux-designer">UI/UX Designer</option>
                  <option value="web-designer">Web Designer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <textarea
                name="message"
                className="w-full bg-gray-100 bg-opacity-15 text-white outline-none rounded-lg px-4 py-3"
                placeholder="Your Message (e.g., project details or collaboration request)"
                rows="5"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="p-2 w-full text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all text-[#705ADD] rounded-md"
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
