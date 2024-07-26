// SessionData.js
import React, { useEffect, useState } from "react";

const SessionData = () => {
  const [sessionData, setSessionData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/Ticket/auth/session-data/",
          {
            method: "GET",
            credentials: "include", // Include session cookies
          }
        );

        console.log("Response Status:", response.status); // Log the response status
        console.log("Response Headers:", response.headers); // Log response headers

        if (!response.ok) {
          // Handle non-2xx responses
          const errorText = await response.text();
          console.log("Error Response:", errorText);
          setError(`Failed to fetch session data: ${response.statusText}`);
          return;
        }

        const data = await response.json();
        console.log("Response Data:", data); // Log the data received from the response

        setSessionData(data.some_data);
      } catch (error) {
        console.error("Fetch Error:", error); // Log the error object
        setError("Error fetching session data");
      }
    };

    fetchSessionData();
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <h2>Session Data</h2>
      {error ? <p>{error}</p> : <p>{sessionData}</p>}
    </div>
  );
};

export default SessionData;
