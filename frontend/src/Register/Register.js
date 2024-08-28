import React, { useState } from "react";
import Navbar from "../Components/NavBarHome";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "", // Add username field here
    email: "",
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
      const response = await fetch("http://localhost:8000/Ticket/Register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          username: formData.username, // Include username in the payload
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error response:", errorData);
        throw new Error(`Error: ${errorData.detail}`);
      }

      console.log("Account created successfully");
      setFormData({
        firstName: "",
        lastName: "",
        username: "", // Reset username field as well
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating account:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/474x/51/26/94/512694f26b255cb3f89574831bde2a41.jpg")',
        }}
      >
        <div className="mr-20 p-8 max-w-md w-full">
          <div className="text-center mb-4">
            <div className="text-2xl font-bold">TicketBridge</div>
            <h2 className="text-xl mt-2">Create Account</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <h3 className="mb-4">
              Already have an account?
              <button
                onClick={() => navigate("/login")}
                className="text-blue-500 underline ml-1"
              >
                Login
              </button>
            </h3>

            <div className="flex mb-4 space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  required
                />
              </div>
            </div>
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
                Email Address
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                type="email"
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
              Create Account
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
    </>
  );
};

export default Register;
