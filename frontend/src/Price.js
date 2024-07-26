import React from "react";
import NavBarHome from "./Components/NavBarHome";
import Footer from "./Components/Footer";
import Review from "./Components/Home/Review";
import { useNavigate } from "react-router-dom";

const Price = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBarHome />
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Trustworthy Plans Tailored to Professionals
        </h1>
        <p className="text-lg text-center mb-12">
          Showpass offers peace of mind with transparent pricing and tailored
          solutions for complex event needs—no hidden fees, no risk.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Essential</h2>
            <p className="text-xl mb-4">1 % + $0.59*</p>
            <button
              onClick={() => navigate("/ExploreEvent/Request")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Let`s chat
            </button>
            <ul className="list-disc pl-5">
              <li>
                For organizers needing a reliable, user-friendly, feature-rich
                ticketing solution.
              </li>
              <li>
                Create unlimited events that are customized to your brand.
              </li>
              <li>
                Sell tickets from your event page or your own website. Access
                real-time event data to make informed decisions.
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Professional</h2>
            <p className="text-xl mb-4">2.5 % + $1.69*</p>
            <button
              onClick={() => navigate("/ExploreEvent/Request")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Let's Chat
            </button>
            <ul className="list-disc pl-5">
              <li>Empowering businesses with comprehensive event tools.</li>
              <li>
                Everything in Essential, plus: Create bundle pricing with Ticket
                Packages.
              </li>
              <li>
                Design and customize Assigned Seating Maps. Access tracking
                links for all channels.
              </li>
              <li>
                Upsell and promote event add-ons including food tokens and
                merchandise.
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Premium</h2>
            <p className="text-xl mb-4">Custom Pricing</p>
            <button
              onClick={() => navigate("/ExploreEvent/Request")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Let's Chat
            </button>
            <ul className="list-disc pl-5">
              <li>
                Custom solutions for established businesses with complex event
                demands.
              </li>
              <li>
                Everything in Professional, plus: Accelerate ticket distribution
                with Group Sales.
              </li>
              <li>
                Sell Memberships and boost revenue with member-only perks. Buy
                Now & Pay Later payment options for your guests.
              </li>
              <li>Hardware access options. Dedicated Support.</li>
            </ul>
          </div>
        </div>
      </div>
      <Review />
      <Footer />
    </div>
  );
};

export default Price;
