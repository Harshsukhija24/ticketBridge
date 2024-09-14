import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Section1 from "../Components/Event/Section1";
import Footer from "../Components/Footer";

const DetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/Ticket/Event/${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container mx-auto py-8">
        <p className="text-center text-lg text-gray-600">No event found.</p>
      </div>
    );
  }

  const handleBookTicket = () => {
    navigate(`/book/${id}`); // Navigate to /book with the event ID
  };

  return (
    <>
      <Section1 />
      <div className="container mx-auto py-8 px-4">
        <div className="overflow-hidden flex flex-col md:flex-row">
          {/* Image and Description Column */}
          <div className="md:w-1/2">
            <img
              src={data.image}
              alt={data.Eventname}
              className="w-full h-80 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
            />
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Description:</span>{" "}
                {data.description}
              </p>
            </div>
          </div>

          {/* Details Column */}
          <div className="p-6 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {data.Eventname}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Performer:</span> {data.performer}
            </p>
            <p className="text-gray-500 mb-2">
              <span className="font-semibold">Date:</span> {data.Date}
            </p>
            <p className="text-gray-500 mb-2">
              <span className="font-semibold">Time:</span> {data.EventTime}
            </p>
            <p className="text-gray-500 mb-4">
              <span className="font-semibold">Location:</span> {data.Location}
            </p>
            <span className="text-xl font-semibold text-gray-800 mb-4">
              Price: ₹{data.ChildTicketPrice} - ₹{data.FamilyTicketPrice}
            </span>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Contact Info:</span>{" "}
              {data.ContactInfo}
            </p>
            <button
              onClick={handleBookTicket}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition duration-200 ease-in-out"
            >
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
