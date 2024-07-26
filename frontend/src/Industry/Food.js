import React from "react";
import Footer from "../Components/Footer";
import NavBarHome from "../Components/NavBarHome";
import NavIndustry from "../Components/NavIndustry";
import { useNavigate } from "react-router-dom";

const Food = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBarHome />
      <NavIndustry />
      <div className=" mt-0">
        {/* First Section */}
        <div
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/f6/46/a8/f646a8785edf39e4b70a4a8ebd301890.jpg')",
          }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0  p-8 ">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
              Boost Your Food & Drink Festival With Cutting-Edge Technology
            </h3>
            <h5 className="text-lg text-black mb-6">
              Unlock the potential of your festival with real-time reporting,
              group sales, and automated discounts.
            </h5>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/Register")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
              >
                Get Started For Free
              </button>
              <button
                onClick={() => navigate("/ExploreEvent/Request")}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md"
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-gray-100 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8">
                The All-In-One Solution for Your Culinary Festivals
              </h3>
              <ul className="list-disc list-inside space-y-4">
                <li className="text-lg text-gray-800">Group Sales</li>
                <li className="text-lg text-gray-800">Memberships</li>
                <li className="text-lg text-gray-800">Timed Entries</li>
                <li className="text-lg text-gray-800">Ticket Transfers</li>
                <li className="text-lg text-gray-800">Universal Barcode</li>
                <li className="text-lg text-gray-800">Auto-Discounts</li>
                <li className="text-lg text-gray-800">Real-Time Reporting</li>
                <li className="text-lg text-gray-800">Product Add-ons</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/667b09a021884f971fa41393_Realtime%20reporting.svg"
                alt="Culinary Solutions"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="bg-gray-500 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl font-extrabold text-white mb-4">
                Solving Your Toughest Ticketing Challenges
              </h3>
              <h5 className="text-lg text-gray-200 mb-6">
                Need daily insights? Experience comprehensive insights
                on-the-go. From sales to scanning to merchandise, enable
                informed decision-making while your event is in full swing.
              </h5>
            </div>
            <div className="md:w-1/2">
              <img
                alt="Real-Time Reporting"
                src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/667b09a021884f971fa41393_Realtime%20reporting.svg"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="bg-blue-950 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="text-3xl font-extrabold text-white mb-4">
              Try A Sample! Explore Showpass for Food & Drink Festivals
            </h4>
            <span className="text-lg text-gray-300 mb-6">
              Explore our interactive demo page to see firsthand how Showpass
              integrates seamlessly with your website. No redirects and no third
              parties. Completely white-label.
            </span>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
              Test It Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Food;
