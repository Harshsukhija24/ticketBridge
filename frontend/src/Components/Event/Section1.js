import React, { useState, useEffect } from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const navigate = useNavigate();
  const [host, setHost] = useState(false);
  const [session, setSession] = useState(null); // State to store session data

  const toggleDropdown = () => {
    setHost((prevState) => !prevState);
  };

  useEffect(() => {
    // Fetch session data from API
    const fetchSessionData = async () => {
      try {
        const response = await fetch("http://localhost:8000/Ticket/session"); // Replace with your API endpoint
        const data = await response.json();
        if (data.username && data.email) {
          setSession(data); // Set session data if available
        }
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    fetchSessionData();

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
            <div className="flex items-center space-x-2">
              {session ? (
                // If session exists, show username and logout button
                <>
                  <div className="text-gray-700">
                    {session.username} ({session.email})
                  </div>
                  <button
                    onClick={() => {
                      fetch("/api/logout", { method: "POST" }) // Add logout API call
                        .then(() => {
                          setSession(null); // Clear session on logout
                          navigate("/Login"); // Navigate to login page
                        })
                        .catch((error) =>
                          console.error("Error logging out:", error)
                        );
                    }}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none flex items-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                // If no session, show login and create account buttons
                <>
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
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Section1;
