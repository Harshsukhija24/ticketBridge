import React from "react";
import Footer from "../Components/Footer";
import NavBarHome from "../Components/NavBarHome";
import NavIndustry from "../Components/NavIndustry";
import { useNavigate } from "react-router-dom";

const Seasonal = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBarHome />
      <NavIndustry />
      <div>
        <div className="bg-white py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://i.pinimg.com/564x/e1/a9/48/e1a94832283e56e72dc0370fcc09432a.jpg"
                  alt="Seasonal Attractions"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  Transform Your Daily Attractions and Seasonal Experiences
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Streamlined ticketing, membership management, real-time
                  reporting & more!
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => navigate("/Register")}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
                  >
                    Get Started For Free
                  </button>
                  <button
                    onClick={() => navigate("/ExploreEvent/Request")}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md"
                  >
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              The All-In-One Solution for Your Attractions
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Exchanges
                </h3>
                <p className="text-gray-700">
                  Seamlessly handle weather changes, time-slot adjustments, and
                  more—minimizing refunds and saving time for your team.
                </p>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Hardware/Scanning
                </h3>
                <p className="text-gray-700">
                  Streamline your entry process with cutting-edge scanning
                  technology.
                </p>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Real-time Reporting
                </h3>
                <p className="text-gray-700">
                  Stay on top of your sales and attendance with real-time data
                  and analytics.
                </p>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Memberships
                </h3>
                <p className="text-gray-700">
                  Manage your membership program with ease, including renewals
                  and benefits.
                </p>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Gift Cards
                </h3>
                <p className="text-gray-700">
                  Offer gift cards for your attractions, perfect for special
                  occasions.
                </p>
              </li>
              <li className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Event Calendars
                </h3>
                <p className="text-gray-700">
                  Keep your visitors informed about upcoming events and special
                  promotions.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-800 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white mb-8">
              Solving Your Toughest Ticketing Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Visitor Flexibility
                </h3>
                <p className="text-gray-400 mb-8">
                  Our Free Exchanges feature puts control in your visitors
                  hands. Seamlessly handle weather changes, time-slot
                  adjustments, and more—minimizing refunds and saving time for
                  your team.
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/6658de00f85491a0bd4eb10c_Visitor%20Flexibility.svg"
                  alt="Visitor Flexibility"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white mb-8">
              Take it for a Ride! Explore Showpass for Amusement Parks and
              Attractions
            </h2>
            <p className="text-gray-300 mb-8">
              Explore our interactive demo page to see firsthand how Showpass
              integrates seamlessly with your website. No redirects and no third
              parties. Completely white-label.
            </p>
          </div>
        </div>

        <div className="bg-blue-950 py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white mb-8">
              Having Issues With Custom Promotions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-8">
                  Automatically apply personalized discounts based on basket
                  contents, boost sales and customer satisfaction with savings
                  at checkout. You can even tailor discounts to specific events,
                  memberships, or products.
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/648a83569e2d83664c0c5912_card%20promotions.png"
                  alt="Custom Promotions"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Seasonal;
