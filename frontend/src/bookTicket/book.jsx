import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Book = () => {
  const [eventData, setEventData] = useState(null);
  const [adultTickets, setAdultTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [familyTickets, setFamilyTickets] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/Ticket/Event/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEventData();
  }, [id]);

  if (!eventData) {
    return (
      <div className="text-center mt-10">
        <p>Loading event data...</p>
      </div>
    );
  }

  const handleTicketChange = (type, increment) => {
    const maxTickets = 0;
    switch (type) {
      case "adult":
        setAdultTickets((prev) => Math.max(maxTickets, prev + increment));
        break;
      case "child":
        setChildTickets((prev) => Math.max(maxTickets, prev + increment));
        break;
      case "family":
        setFamilyTickets((prev) => Math.max(maxTickets, prev + increment));
        break;
      default:
        break;
    }
  };

  const totalPrice =
    adultTickets * parseFloat(eventData.AdultTicketPrice) +
    childTickets * parseFloat(eventData.ChildTicketPrice) +
    familyTickets * parseFloat(eventData.FamilyTicketPrice);

  const handleCheckout = () => {
    alert("Payment details will be sent to your email.");

    setTimeout(() => {
      navigate("/ExploreEvent");
    }, 3000);
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{eventData.Eventname}</h1>
        <p className="text-gray-600">
          {eventData.Date} at {eventData.EventTime}
        </p>
        <p className="text-gray-600 mb-4">{eventData.Location}</p>

        {/* Ticket Options */}
        {["adult", "child", "family"].map((type) => (
          <div className="mb-4" key={type}>
            <p className="font-semibold">
              {type.charAt(0).toUpperCase() + type.slice(1)} Ticket: $
              {
                eventData[
                  `${type.charAt(0).toUpperCase() + type.slice(1)}TicketPrice`
                ]
              }
            </p>
            <p className="text-gray-500 text-sm mb-2">
              {type === "adult" &&
                "Perfect for individuals 18 years and older."}
              {type === "child" && "Suitable for children aged 3-12 years."}
              {type === "family" &&
                "Includes 2 adults and 2 children. Great for families!"}
            </p>
            <div className="flex items-center">
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l"
                onClick={() => handleTicketChange(type, -1)}
              >
                -
              </button>
              <span className="px-4 py-1">
                {type === "adult"
                  ? adultTickets
                  : type === "child"
                  ? childTickets
                  : familyTickets}
              </span>
              <button
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r"
                onClick={() => handleTicketChange(type, 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">Total Price:</p>
          <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
        </div>

        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Book;
