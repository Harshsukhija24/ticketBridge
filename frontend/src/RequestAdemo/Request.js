import React, { useState } from "react";
import NavBarHome from "../Components/NavBarHome";
import Footer from "../Components/Footer";

const Request = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    company: "",
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
      const response = await fetch("http://localhost:8000/Ticket/Request/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          First_name: formData.firstName,
          Last_name: formData.lastName,
          Email: formData.email,
          Contact: formData.contact,
          company: formData.company,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.detail}`);
      }

      console.log("Request submitted successfully");
      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        company: "",
      });
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  return (
    <>
      <NavBarHome />
      <div className="flex flex-col md:flex-row items-center justify-center mt-14 min-h-screen">
        <div className="md:w-1/2 p-8">
          <img
            alt="request"
            src="https://thesybarite.co/img_cache/containers/assets/magazine/danny-howe-zzxs1_uupoq-unsplash.jpg/023e55432a0afb81f9b18e64f29b4b00.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 ">
          <h3 className="text-2xl font-bold mb-4">Request A Demo</h3>
          <p className="text-gray-600 mb-8">
            Our team is happy to answer your questions. Fill out the form and
            we'll be in touch as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Company</label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Request;
