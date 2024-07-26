import React from "react";
import Footer from "../Components/Footer";
import NavBarHome from "../Components/NavBarHome";
import NavOrganize from "../Components/NavOrganize";
import { useNavigate } from "react-router-dom";

const Technology = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBarHome />
      <NavOrganize />

      <div className="container mx-auto px-4">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center border-b border-gray-300 py-12">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Built for Today, to Support the Experiences of Tomorrow
            </h2>
            <p className="mb-4 text-gray-600">
              Modern tools that make building any event a breeze.
            </p>
            <button
              onClick={() => navigate("/Register")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              alt="tech"
              src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/6494d09d39a415c4b1802b73_Tech%20Hero-p-800.png"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center py-12">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Sell Tickets Directly On Your Site
            </h3>
            <p className="mb-4 text-gray-600">
              Allow customers to purchase tickets directly from your website
              with no redirects and no third parties. Completely white-label
              your event.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              alt="fv"
              src="https://www.ecompliance.com/wp-content/uploads/2018/06/JUN_2018_Controls_A.png"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Third Section - Updated to match the first section layout */}
        <div className="flex flex-col md:flex-row items-center py-12">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Discovery</h2>
            <h4 className="text-2xl font-semibold mb-2 text-gray-700">
              Powerful Event Discovery, Checkouts, and Experiences
            </h4>
            <ul className="list-disc list-inside mb-4 text-gray-600">
              <li>
                Lightning-fast checkouts with advanced payment integrations like
                Affirm.
              </li>
              <li>
                Cutting-edge event discovery with new event categories and
                search functionalities.
              </li>
              <li>Secure events with robust fraud and scalper protections.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://i.pinimg.com/564x/86/d9/ee/86d9ee910e294f635fa658b1be08d038.jpg"
              alt="event discovery"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Technology;
