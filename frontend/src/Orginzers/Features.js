import React from "react";
import Footer from "../Components/Footer";
import NavBarHome from "../Components/NavBarHome";
import NavOrganize from "../Components/NavOrganize";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBarHome />
      <NavOrganize />
      <div className="space-y-8">
        {/* Section 1 */}
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">
              See Why 30,000+ Event Organizers Trust Showpass
            </h3>
            <span className="text-lg">
              Experience the best in event ticketing with every feature you
              could think of, all in one software.
            </span>
          </div>
          <img
            className="w-1/2"
            src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/6499e78fbd58c06ddb4d19da_Features-p-1080.png"
            alt="Features"
          />
        </div>

        {/* Section 2 */}
        <div className="bg-blue-800 text-white p-8">
          <h3 className="text-center text-2xl">Feature</h3>
          <span className="block text-center mb-4">
            No One Said Event Management Is Easy, But Our Powerful Features Will
            Let You Organize Events in a Breeze
          </span>
          <div className="grid grid-cols-2 gap-4">
            <ul className="list-disc pl-5">
              <li>Box Office Tools</li>
              <li>Network Management</li>
              <li>Assigned Seating</li>
              <li>Timed Entries</li>
            </ul>
            <ul className="list-disc pl-5">
              <li>Memberships</li>
              <li>Ticket Packages</li>
              <li>Donations</li>
              <li>Branded Event Page</li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex items-center">
          <div className="flex-1 text-center">
            <span>
              If that sounds like a lot, that's because it is. Let TicketBridge
              tools do the heavy lifting so you can run events seamlessly.{" "}
            </span>
            <button
              onClick={() => navigate("/ExporeEvent/Request")}
              className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded block mx-auto"
            >
              BOOK a Demo
            </button>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex items-center justify-between">
          <div>
            <h6 className="text-lg font-semibold">Testimonial</h6>
            <h4 className="text-xl font-bold">Organizers With Complex Needs</h4>
            <span>
              From top-rated attractions to all-out festivals, Showpass is built
              to support your unique event.
            </span>
            <h4 className="mt-4">
              "TicketBridge is by far the best ticketing company we have ever
              had the pleasure of partnering with. After working with many other
              companies over the years, we have seen a comprehensive range of
              what the industry has to offer and TicketBridge stands head and
              shoulders above them all."
            </h4>
          </div>
          <img
            className="w-1/3"
            alt="Testimonial"
            src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/6495b70b3043fba53ea1f4d0_abf3.jpeg"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Features;
