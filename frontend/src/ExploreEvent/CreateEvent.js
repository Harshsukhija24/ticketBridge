import React, { useState } from "react";
import Section1 from "../Components/Event/Section1";
import Footer from "../Components/Footer";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    Eventname: "",
    Date: "",
    Location: "",
    performer: "",
    AdultTicketPrice: "",
    ChildTicketPrice: "",
    FamilyTicketPrice: "",
    EventTime: "",
    ContactInfo: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty required fields
    const requiredFields = [
      "Eventname",
      "Date",
      "Location",
      "performer",
      "AdultTicketPrice",
      "ChildTicketPrice",
      "FamilyTicketPrice",
      "EventTime",
      "ContactInfo",
      "description",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill out the ${field}`);
        return; // Exit if any required field is empty
      }
    }

    const formDataToSend = new FormData();
    formDataToSend.append("Eventname", formData.Eventname);
    formDataToSend.append("Date", formData.Date);
    formDataToSend.append("Location", formData.Location);
    formDataToSend.append("performer", formData.performer);
    formDataToSend.append("AdultTicketPrice", formData.AdultTicketPrice);
    formDataToSend.append("ChildTicketPrice", formData.ChildTicketPrice);
    formDataToSend.append("FamilyTicketPrice", formData.FamilyTicketPrice);
    formDataToSend.append("EventTime", formData.EventTime);
    formDataToSend.append("ContactInfo", formData.ContactInfo);
    formDataToSend.append("description", formData.description);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    // Debugging: Log the form data being sent
    console.log("Form data being sent:", Object.fromEntries(formDataToSend));

    try {
      const response = await fetch("http://localhost:8000/Ticket/Event/", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      console.log("Event created successfully");
      // Handle successful response, e.g., redirect or show a success message
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <>
      <Section1 />
      <div className="flex p-4">
        <div className="flex-shrink-0 w-1/2">
          <img
            alt="Event"
            src="https://i.pinimg.com/564x/d5/2b/f0/d52bf0e5af209241a61614291b7430c3.jpg"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="flex-grow ml-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold mb-4">Create Event</h2>

            <label
              htmlFor="Eventname"
              className="block text-gray-700 font-bold mb-2"
            >
              Event Name
            </label>
            <input
              type="text"
              id="Eventname"
              onChange={handleChange}
              placeholder="Event Name"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="Date"
              className="block text-gray-700 font-bold mb-2"
            >
              Date
            </label>
            <input
              type="date"
              id="Date"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="Location"
              className="block text-gray-700 font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="Location"
              onChange={handleChange}
              placeholder="Location"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="performer"
              className="block text-gray-700 font-bold mb-2"
            >
              Performer
            </label>
            <input
              type="text"
              id="performer"
              onChange={handleChange}
              placeholder="Performer"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="AdultTicketPrice"
              className="block text-gray-700 font-bold mb-2"
            >
              Adult Ticket Price
            </label>
            <input
              type="number"
              id="AdultTicketPrice"
              onChange={handleChange}
              placeholder="Adult Ticket Price"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="ChildTicketPrice"
              className="block text-gray-700 font-bold mb-2"
            >
              Child Ticket Price
            </label>
            <input
              type="number"
              id="ChildTicketPrice"
              onChange={handleChange}
              placeholder="Child Ticket Price"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="FamilyTicketPrice"
              className="block text-gray-700 font-bold mb-2"
            >
              Family Ticket Price
            </label>
            <input
              type="number"
              id="FamilyTicketPrice"
              onChange={handleChange}
              placeholder="Family Ticket Price"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="EventTime"
              className="block text-gray-700 font-bold mb-2"
            >
              Event Time
            </label>
            <input
              type="time"
              id="EventTime"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="ContactInfo"
              className="block text-gray-700 font-bold mb-2"
            >
              Contact Info
            </label>
            <input
              type="text"
              id="ContactInfo"
              onChange={handleChange}
              placeholder="Contact Info"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            />

            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              onChange={handleChange}
              placeholder="Description"
              className="border border-gray-300 rounded-md p-2 mb-4 w-full"
            ></textarea>

            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Upload Event Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleChange}
              className="border border-gray-300 rounded-md mb-4 w-full"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateEvent;
