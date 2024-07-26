import React from "react";
import Footer from "../Components/Footer";
import Section1 from "../Components/Event/Section1";
import Section2 from "../Components/Event/Section2";
import Section3 from "../Components/Event/Section3";
import Section4 from "../Components/Event/Section4";

const ExploreEvent = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <div className="relative flex items-center justify-center h-screen bg-gray-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://dcm1eeuyachdi.cloudfront.net/fit-in/1920x1920/filters:quality(100):format(webp)/static/nextjs/images/homepage/organizer-pic.jpg"
            alt="Learn More"
          />
        </div>
        <div className="relative z-10 flex flex-row items-center justify-between w-full max-w-6xl p-8">
          <div className="flex-1 text-left">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Become an Organizer!
            </h2>
            <span className="block mb-4 text-gray-700">
              Want to host an event? Click on the link below to learn more about
              hosting an event with Showpass.
            </span>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExploreEvent;
