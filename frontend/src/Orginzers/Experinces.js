import React from "react";
import Footer from "../Components/Footer";
import NavBarHome from "../Components/NavBarHome";
import NavOrganize from "../Components/NavOrganize";
import { useNavigate } from "react-router-dom";

const Experiences = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBarHome />
      <NavOrganize />

      <div className="space-y-10 p-8">
        {/* Introduction Section */}
        <section className="flex items-center space-x-8 p-6 rounded-lg">
          <div className="flex-1">
            <span className="text-lg font-bold">
              Unlock Powerful Event Experiences
            </span>
            <h4 className="mt-2 text-gray-700">
              Your partner for end-to-end success. Explore how we can help you
              at every stage, from event setup to ticket sales and beyond.
            </h4>
            <button
              onClick={() => navigate("/Register")}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Get Started for Free
            </button>
          </div>
          <img
            alt="exp"
            className="w-1/2 rounded-lg"
            src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/64a0b34403c2c188baabdfed_hotairballoons-p-500.jpg"
          />
        </section>

        {/* Organizers Section */}
        <section className="flex items-center space-x-8">
          <img
            className="w-1/2 rounded-lg"
            src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/6499ff13c4a80543ae45fd19_Post%20Event-p-800.png"
            alt="Organizers"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Organizers</h3>
            <h5 className="mt-2 text-gray-600">Start Your Event Journey</h5>
            <h1 className="mt-4 text-2xl font-bold">Get Started</h1>
            <span className="block mt-2 text-gray-700">
              Welcome to your ultimate event management tool - your Organizer
              Dashboard! With just a few clicks, you can create and manage your
              event like a pro. Additional Perks: real-time support, onboarding
              sessions, mobile dashboard app.
            </span>
          </div>
        </section>

        {/* Discovery Section */}
        <section className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Discovery</h2>
          <h4 className="mt-2 text-gray-700 text-center">
            Put your events on everyone's radar! Guests can directly find events
            on the TicketBridge discovery platform with advanced event
            categories and search functionalities. Additional Perks: Google
            integration, the Showpass discovery site, site widgets.
          </h4>
          <img
            alt="Discovery"
            className="mt-4 w-1/2 rounded-lg"
            src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/649a13c648052e335d5151fd_Attend-p-800.png"
          />
        </section>

        {/* Go Beyond the Ordinary Section */}
        <section className="flex flex-col items-center">
          <h3 className="text-xl font-semibold">Go Beyond the Ordinary</h3>
          <h4 className="mt-2 text-gray-700">
            Take event management to the next level with evolving technology.
          </h4>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-red-200 p-4 rounded-lg flex items-center">
              <span className="material-icons mr-2">group</span>
              <span>Group Sales and Distribution</span>
            </div>
            <div className="bg-green-200 p-4 rounded-lg flex items-center">
              <span className="material-icons mr-2">membership</span>
              <span>Memberships</span>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg flex items-center">
              <span>Assigned Seating</span>
            </div>
            <div className="bg-yellow-200 p-4 rounded-lg flex items-center">
              <span>Scanning</span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Experiences;
