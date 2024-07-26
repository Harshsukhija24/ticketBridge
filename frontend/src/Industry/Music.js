import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicketAlt,
  faHandHoldingHeart,
  faChair,
  faExchangeAlt,
  faDollarSign,
  faShareAlt,
  faUserFriends,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import Review from "../Components/Home/Review";
import NavBar from "../Components/NavBarHome";
import Footer from "../Components/Footer";
import NavIndustry from "../Components/NavIndustry";
import { useNavigate } from "react-router-dom";

const Music = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <NavIndustry />
      <div
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/0b/d4/73/0bd47386a9b3b38576a5474021b46d37.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center">
          <div className="container mx-auto text-white p-10">
            <h1 className="text-4xl font-bold mb-4">
              Cutting-Edge Ticketing Magic for Performing Arts & Theatres
            </h1>
            <p className="text-lg mb-8">
              Experience the thrill of seamless ticketing, automated discounts,
              and real-time reporting, all tailored for the stage.
            </p>
            <div>
              <button
                onClick={() => navigate("/Register")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
              >
                Get Started For Free
              </button>
              <button
                onClick={() => navigate("/ExploreEvent/Request")}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Show-Stopping Solutions For Your Performing Arts Events
          </h2>
          <ul className="grid grid-cols-3 gap-4">
            <li className="flex items-center bg-blue-500 text-white font-bold py-4 px-6 rounded">
              <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
              Auto discounts
            </li>
            <li className="flex items-center bg-green-500 text-white font-bold py-4 px-6 rounded">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="mr-2" />
              Donations
            </li>
            <li className="flex items-center bg-yellow-500 text-white font-bold py-4 px-6 rounded">
              <FontAwesomeIcon icon={faChair} className="mr-2" />
              Assigned Seating
            </li>
            <li className="flex items-center bg-red-500 text-white font-bold py-4 px-6 rounded">
              <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
              Free Exchanges
            </li>
            <li className="flex items-center bg-purple-500 text-white font-bold py-4 px-6 rounded">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              Custom fees
            </li>
            <li className="flex items-center bg-pink-500 text-white font-bold py-4 px-6 rounded">
              <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
              Ticket Transfers
            </li>
            <li className="flex items-center bg-teal-500 text-white font-bold py-4 px-6 rounded">
              <FontAwesomeIcon icon={faUserFriends} className="mr-2" />
              Memberships
            </li>
            <li className="flex items-center bg-indigo-500 text-white font-bold py-4 px-6 rounded">
              <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
              Product Add-on
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto flex items-center">
          <div className="w-1/2  ml-72   ">
            <h2 className="text-3xl font-bold mb-4">
              Solving Your Toughest Ticketing Challenges
            </h2>
            <p className="text-lg  mb-8">
              Enjoy a user-friendly box office, on-the-go app purchases, and
              effortless event scanning via mobile devices. Additionally, our
              Universal QR Code holds fans events and merchandise all in one
              place and with one scan.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need More Event Customization?
          </h2>
          <p className="text-lg text-white mb-8">
            We offer custom options for events, allowing you to personalize
            every aspect. From tailored fees and branded event pages to unique
            ticket packages, and beyond.
          </p>
          <img
            alt="Customization Options"
            src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/665de97049fc1befd6789ecd_Group%201597880428.svg"
            className="mx-auto"
          />
        </div>
      </div>
      <Review />
      <Footer />
    </div>
  );
};

export default Music;
