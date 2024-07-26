// Section1.js
import React, { useState, useEffect } from "react";
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SessionData from "../SessionData"; // Import SessionData component

const Section1 = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [host, setHost] = useState(false);

  const toggleDropdown = () => {
    setHost((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".host-dropdown") === null) {
        setHost(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    // Simulate fetching user data from an API or local storage
    const user = { isLoggedIn: true, username: "harsh" }; // Replace with actual login check

    if (user.isLoggedIn) {
      setIsLoggedIn(true);
      setUsername(user.username);
    }
  }, []);

  const handleLogout = () => {
    // Simulate logout process
    setIsLoggedIn(false);
    setUsername("");
    // Redirect or perform other actions after logout if needed
  };

  return (
    <div>
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-gray-900 font-bold text-2xl">
            <a href="/ExploreEvent" className="flex items-center">
              TicketBridge
            </a>
          </div>

          <div className="flex items-center space-x-2 relative">
            <button
              onClick={toggleDropdown}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none flex items-center"
            >
              <AiOutlinePlusCircle className="mr-2" />
              Host Event
            </button>
            {host && (
              <div className="absolute bg-white shadow-lg rounded mt-44 gap-x-6 z-20 p-2 left-[-20px] host-dropdown">
                <button
                  onClick={() => navigate("/ExploreEvent/Create")}
                  className="block text-left w-full px-4 py-2 hover:bg-gray-100"
                >
                  Create An Event
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="block text-left w-full px-4 py-2 hover:bg-gray-100"
                >
                  Why TicketBridge
                </button>
                <button
                  onClick={() => navigate("/ExploreEvent/Support")}
                  className="block text-left w-full px-4 py-2 hover:bg-gray-100"
                >
                  Support
                </button>
              </div>
            )}
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-900">Hello, {username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none flex items-center"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
                <SessionData /> {/* Display session data when logged in */}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigate("/Login")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none flex items-center"
                >
                  <FaSignInAlt className="mr-2" />
                  Login
                </button>
                <button
                  onClick={() => navigate("/Register")}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none flex items-center"
                >
                  <FaUserPlus className="mr-2" />
                  Create Account
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Section1;
