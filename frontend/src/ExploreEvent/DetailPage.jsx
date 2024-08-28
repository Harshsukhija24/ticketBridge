import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Section1 from "../Components/Event/Section1";
import Footer from "../Components/Footer";

const DetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    console.log("Fetching data for event ID:", id);
    const fetchData = async () => {
      try {
        console.log("Starting data fetch...");
        const response = await fetch(
          `http://localhost:8000/Ticket/Event/${id}`
        );

        console.log("Received response:", response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Data fetched successfully:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        console.log("Fetch data process completed.");
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    console.log("Data is loading...");
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    console.log("No data available.");
    return (
      <div className="container mx-auto py-8">
        <p className="text-center text-lg text-gray-600">No event found.</p>
      </div>
    );
  }

  console.log("Rendering event details for:", data);

  return (
    <>
      <Section1 />
      <div className="container mx-auto py-8 px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
          <img
            src={data.image}
            alt={data.title}
            className="w-full md:w-1/2 h-64 object-cover"
          />
          <div className="p-6 md:w-1/2">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              {data.Eventname}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Performer:</span> {data.performer}
            </p>
            <p className="text-gray-500 mb-1">
              <span className="font-semibold">Date:</span> {data.Date}
            </p>
            <p className="text-gray-500 mb-1">
              <span className="font-semibold">Time:</span> {data.EventTime}
            </p>
            <p className="text-gray-500 mb-4">
              <span className="font-semibold">Location:</span> {data.Location}
            </p>
            <span className="text-xl font-semibold text-gray-800 mb-2">
              Price: {data.TicketPrice}
            </span>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Contact Info:</span>{" "}
              {data.ContactInfo}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition duration-200 ease-in-out">
              Book a Ticket
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
