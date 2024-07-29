import React from "react";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");

      const response = await fetch("http://localhost:8000/Ticket/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Logout error:", errorData);

        // Check if the error is due to an invalid token
        if (errorData.detail === "Given token not valid for any token type") {
          alert("Your session has expired. Please log in again.");
          // Redirect to the login page or perform any other necessary actions
          window.location.href = "/login";
          return;
        }

        alert(`Logout failed: ${errorData.detail}`);
        return;
      }

      // If logout is successful, remove the access token
      localStorage.removeItem("access_token");

      // Redirect to the login page or perform any other necessary actions
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred while logging out.");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
