import React, { useState } from "react";
import Section1 from "../Components/Event/Section1";
import Footer from "../Components/Footer";

const SupportPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/Ticket/Support/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Message: message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.detail}`);
      }

      setSubmitted(true);
      // Reset form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Section1 />
      <div className="mt-10">
        <div
          className="relative bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/474x/51/26/94/512694f26b255cb3f89574831bde2a41.jpg")',
          }}
        >
          <div className="container mx-auto p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Support</h1>
            <p className="mb-6">
              Welcome to the TicketBridge support page! If you have any
              questions or need assistance, you can find answers to common
              queries below or contact us directly.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Frequently Asked Questions
            </h2>
            <div className="mb-6">
              <h3 className="font-bold">1. How do I book a ticket?</h3>
              <p>
                You can book a ticket by selecting the event you want to attend,
                choosing your seats, and completing the checkout process.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold">
                2. What payment methods do you accept?
              </h3>
              <p>
                We accept all major credit cards, PayPal, and other secure
                payment methods.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-bold">
                3. Can I cancel or change my booking?
              </h3>
              <p>
                Yes, you can cancel or change your booking up to 48 hours before
                the event. Please refer to our cancellation policy for more
                details.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any other questions or need further assistance, please
              fill out the form below:
            </p>

            {submitted && (
              <div className="bg-green-200 text-green-800 p-4 rounded mb-4">
                Thank you for your message! We will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SupportPage;
