import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Section4 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await fetch("http://localhost:8000/Ticket/Event/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEventClick = (id) => {
    navigate(`/ExploreEvent/${id}`);
  };

  const filteredEvents = data.filter((event) =>
    event.Eventname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Event List</h2>
            <div className="relative mr-2">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md p-2 pl-10"
              />
              <FaSearch className="absolute left-2 top-2.5 text-gray-400" />
            </div>
          </div>
          {filteredEvents.length === 0 ? (
            <div className="text-gray-500">No events found</div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEvents.map((event) => (
                <li
                  key={event.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => handleEventClick(event.id)}
                >
                  <img
                    src={`http://localhost:8000${event.image || ""}`} // Fix URL by adding a fallback for null or undefined
                    alt={event.Eventname}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      console.error(`Error loading image: ${e.target.src}`);
                      e.target.src = "https://via.placeholder.com/150"; // Placeholder image
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">
                      {event.Eventname}
                    </h3>
                    <p className="text-gray-500 mb-2">Date: {event.Date}</p>
                    <p className="text-gray-500 mb-2">
                      Location: {event.Location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Section4;
