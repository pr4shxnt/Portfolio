import React, { useState, useRef } from 'react';
import SocialCard from './SocialCard';
import Socials from '../Data/Socials';
import { Instagram, Twitter, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const form = useRef();

  const buttons = ['Instagram', 'Github', 'Twitter(X)'];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hwb2owp', 'template_1g9pwgk', e.target, {
        publicKey: 'UMUiJfY7eow45AAN9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Reset the form fields after a successful email submission
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
          e.target.reset(); // Clear the actual form fields
          setIsSubmitted(true); // Show success message
          setTimeout(() => setIsSubmitted(false), 3000); // Hide popup after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const renderContent = () => {
    const currentSocial = Socials[activeButton];
    if (!currentSocial) return <div>Select a button to see content.</div>;

    return (
      <SocialCard
        name={currentSocial.name}
        username={currentSocial.username}
        followers={currentSocial.followers}
        link={currentSocial.link}
        icon={currentSocial.icon}
      />
    );
  };

  return (
    <div id="contact" className="pt-16">
      <div className="text-center my-5 w-full">
        <h1 className="text-3xl font-semibold text-white">Contact Me</h1>
        <p className="font-light text-gray-400">
          Contact me through the form or given links
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Social Buttons */}
        <div>
          <div className="flex justify-center items-center mb-2">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={() => setActiveButton(index)}
                className={`relative px-4 py-2 mx-2 text-lg transition-all ${
                  activeButton === index ? 'font-bold text-white' : 'text-gray-500'
                }`}
              >
                {button}
                {activeButton === index && (
                  <div className="absolute bottom-0 rounded-full left-0 w-full h-1 bg-gray-500"></div>
                )}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-lg shadow">{renderContent()}</div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col w-full lg:w-4/12 p-4 gap-5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-wrap w-full text-center justify-center items-center p-4 gap-3"
          >
            <h1 className="text-2xl relative text-center font-normal text-white">
              Form
              <div className="absolute top-8 rounded-full left-0 w-full h-1 bg-gray-500"></div>
            </h1>

            <div className="flex gap-3 w-full">
              <input
                id="firstName"
                name="from_firstname"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="w-1/2 bg-gray-100 bg-opacity-15 outline-none text-white rounded-lg px-4 py-3"
                type="text"
              />
              <input
                id="lastName"
                name="from_lastname"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="w-1/2 bg-gray-100 bg-opacity-15 outline-none text-white rounded-lg px-4 py-3"
                type="text"
              />
            </div>
            <input
              id="email"
              name="from_email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email"
              className="w-full bg-gray-100 bg-opacity-15 text-white outline-none rounded-lg px-4 py-3"
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
              className="w-full bg-gray-100 bg-opacity-15 text-white outline-none rounded-lg px-4 py-3"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="p-2 w-full text-center border border-[#705ADD] hover:bg-[#705ADD] hover:text-white ease-in-out duration-300 transition-all text-[#705ADD] rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {isSubmitted && (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Email Sent Successfully!</h2>
            <p>Your message has been sent. We'll get back to you shortly.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
