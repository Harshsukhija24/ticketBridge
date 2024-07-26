import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Section1 from "../Components/Event/Section1";
import Section2 from "../Components/Event/Section2";
import Footer from "../Components/Footer";

const ExploreFilteredEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed:", location);

    const queryParams = new URLSearchParams(location.search);
    const city = queryParams.get("Location");
    console.log("City from query params:", city);

    const fetchEvents = async () => {
      try {
        console.log(`Fetching events for city: ${city}`);
        const response = await fetch(
          `http://localhost:8000/Ticket/Event/?Location=${city}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched events:", data);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
        console.log("Loading state set to false");
      }
    };

    fetchEvents();
  }, [location]);

  if (loading) {
    console.log("Loading events...");
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );
  }

  if (error) {
    console.log("Error occurred:", error);
    return (
      <div className="flex justify-center items-center h-screen text-lg text-red-500">
        Error: {error}
      </div>
    );
  }

  console.log("Events data:", events);

  return (
    <>
      <Section1 />
      <Section2 />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Events in {new URLSearchParams(location.search).get("Location")}
        </h1>
        {events.length === 0 ? (
          <p className="text-center text-lg">No events found</p>
        ) : (
          <ul className="space-y-4">
            {events.map((event) => (
              <li
                key={event.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{event.Eventname}</h2>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative flex items-center justify-center h-screen bg-gray-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://dcm1eeuyachdi.cloudfront.net/fit-in/1920x1920/filters:quality(100):format(webp)/static/nextjs/images/homepage/organizer-pic.jpg"
            alt="Learn More"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Become an Organizer!
          </h2>
          <span className="block mb-4 text-gray-700">
            Want to host an event? Click on the link below to learn more about
            hosting an event with Showpass.
          </span>
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExploreFilteredEvents;
