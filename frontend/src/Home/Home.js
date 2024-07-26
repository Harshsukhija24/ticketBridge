import React from "react";
import { useNavigate } from "react-router-dom"; // Correct import for navigation
import NavBarHome from "../Components/NavBarHome";
import Review from "../Components/Home/Review";
import Page2 from "../Components/Home/Page2";
import Page4 from "../Components/Home/Page4";
import Page3 from "../Components/Home/Page3";
import Page5 from "../Components/Home/Page5";
import Footer from "../Components/Footer";

const App = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <>
      <NavBarHome />

      <div
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/474x/51/26/94/512694f26b255cb3f89574831bde2a41.jpg")',
        }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b "></div>

        {/* Left side with text */}
        <div className="relative z-10 text-white px-8 md:px-16 lg:px-32 max-w-3xl">
          <h3 className="text-3xl md:text-xl font-bold mb-4">
            The Opposite of Everything You Hate About Ticketing
          </h3>
          <p className="text-lg md:text-xl">
            Deliver unforgettable events with confidence. Empowering
            professionals with complex event needs.
          </p>
          <button
            onClick={() => navigate("/register")} // Use navigate function to change route
            className="bg-sky-300 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-6"
          >
            Signup for free
          </button>
        </div>

        {/* Right side with overlapping image */}
        <div className="relative z-10 ml-auto mr-8 md:mr-16 lg:mr-32">
          <img
            className="max-w-xs md:max-w-lg"
            src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/65c110f474864492d764e0df_Tickets-4.png"
            alt="Overlapping"
          />
        </div>
      </div>
      <Page2 />
      <Review />
      <Page4 />
      <Page3 />
      <Page5 />
      <Footer />
    </>
  );
};

export default App;
