import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarHome = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-12 ml-8"
            src="https://i.pinimg.com/564x/f6/55/7f/f6557fc009e28a100d30ea419bd8556b.jpg"
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li className="relative group">
            <button
              className="text-white hover:text-blue-500 focus:outline-none"
              onClick={() => navigate("/Experince")}
            >
              Organizers
            </button>
          </li>
          <li className="relative group">
            <button
              className="text-white hover:text-blue-500 focus:outline-none"
              onClick={() => navigate("/Seasonal")}
            >
              Industry
            </button>
          </li>
          <li className="relative group">
            <button
              className="text-white hover:text-blue-500 focus:outline-none"
              onClick={() => navigate("/Price")}
            >
              Pricing
            </button>
          </li>
        </ul>

        {/* Action Buttons */}
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4 transition duration-200"
            onClick={() => navigate("/ExploreEvent")}
          >
            Explore Event
          </button>
          <button
            onClick={() => navigate("/ExploreEvent/Request")}
            className="bg-white text-blue-500 hover:text-blue-600 font-semibold py-2 px-4 rounded border border-blue-500 transition duration-200"
          >
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBarHome;
