import React from "react";
import NavBarHome from "../Components/NavBarHome";
import Footer from "../Components/Footer";
import NavIndustry from "../Components/NavIndustry";
import { useNavigate } from "react-router-dom";

const Sports = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBarHome />
      <NavIndustry />

      {/* First Section with Background Image */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/45/a9/b1/45a9b1bd379c8c6da1e1cae7c45dd9a5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex  flex-col justify-center items-start p-8 text-white">
          <h4 className="text-2xl  font-bold">
            Revolutionize Your Sporting Events & Fan Experiences Empowering
          </h4>
          <h6 className="text-lg mt-2">
            organizers with comprehensive reporting, website integrations, and
            innovative membership tools.
          </h6>
          <span className="mt-4">
            <button
              onClick={() => navigate("/Register")}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Get Started For Free
            </button>
            <button
              onClick={() => navigate("/ExploreEvent/Request")}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Request A Demo
            </button>
          </span>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col  justify-center md:flex-row items-center p-8">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold">
            The Ultimate Solution for Your Sports Events
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <li className="bg-blue-100 border border-blue-500 p-4 text-center font-bold">
              Ticket Transfers
            </li>
            <li className="bg-green-100 border border-green-500 p-4 text-center font-bold">
              Seating Maps
            </li>
            <li className="bg-red-100 border border-red-500 p-4 text-center font-bold">
              Custom Reporting
            </li>
            <li className="bg-yellow-100 border border-yellow-500 p-4 text-center font-bold">
              Memberships
            </li>
            <li className="bg-purple-100 border border-purple-500 p-4 text-center font-bold">
              Group Sales
            </li>
            <li className="bg-orange-100 border border-orange-500 p-4 text-center font-bold">
              Digital Passes
            </li>
            <li className="bg-pink-100 border border-pink-500 p-4 text-center font-bold">
              Product Add-ons
            </li>
            <li className="bg-teal-100 border border-teal-500 p-4 text-center font-bold">
              Digital Box-Office
            </li>
          </ul>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row items-center p-8 bg-slate-600 text-white">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold">
            Solving Your Toughest Ticketing Challenges
          </h3>
          <h3 className="text-lg mt-2">Branded Sponsorship Portals</h3>
          <span>
            Reserve tickets, products, or memberships for sponsors, allowing
            customers to purchase discounted or complimentary items directly
            from a custom landing page.
          </span>
        </div>
        <img
          alt="sponsorship portals"
          src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/665df24ce279be718fb54f49_Branded%20Sponsorship.svg"
          className="md:w-1/3 mt-4 md:mt-0 md:ml-4"
        />
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col md:flex-row items-center p-8">
        <div className="md:w-1/2 flex flex-col items-center">
          <span className="text-lg font-semibold transform ">
            No Fumbles, Just Scores In Sports Event Ticketing
          </span>
          <span className="mt-2 text-center">
            Get in the game with Vancouver Giants and discover how Showpass
            helped ensure seamless fan experiences and streamlined ticketing.
          </span>
        </div>
        <img
          alt="fan experience"
          src="https://i.pinimg.com/474x/e8/33/f6/e833f647911a055b37a9d211fd6d9f41.jpg"
          className="md:w-1/4 mt-4 md:mt-0 md:ml-4"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Sports;
