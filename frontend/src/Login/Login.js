import React, { useState } from "react";
import Navbar from "../Components/NavBarHome";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/Ticket/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error response:", errorData);
        throw new Error(`Error: ${errorData.detail}`);
      }

      const data = await response.json();
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      console.log("Login successful");
      navigate("/");
      // Redirect or handle successful login here
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/474x/51/26/94/512694f26b255cb3f89574831bde2a41.jpg")',
        }}
      >
        <div className="mr-20 p-8 max-w-md w-full">
          <h3 className="text-center text-lg font-semibold mb-4">
            <div className="text-2xl font-bold">TicketBridge</div>
            Don't have an Account? Sign Up
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                type="text"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                type="password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="hidden md:block">
          <img
            className="max-w-xs md:max-w-lg"
            src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/65c110f474864492d764e0df_Tickets-4.png"
            alt="Overlapping"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
