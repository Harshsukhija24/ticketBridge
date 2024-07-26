import React from "react";
import { useNavigate } from "react-router-dom";

const Page5 = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className=" bg-gray-200 py-12">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Get Started
        </h2>
        <h4 className="text-2xl text-gray-400 mb-8">
          Let's chat About your event!
        </h4>
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded"
        >
          Signup for Free
        </button>
      </div>
    </div>
  );
};

export default Page5;
