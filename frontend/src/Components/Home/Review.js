import React from "react";

const Review = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/474x/51/26/94/512694f26b255cb3f89574831bde2a41.jpg")',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 flex justify-center text-gray-700 ">
          Testimonials
        </h2>
        <h3 className="text-2xl flex justify-center font-bold mb-4 text-gray-700">
          Hear what people are saying about ticketbridge.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" p-6 ">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-2">⭐⭐⭐⭐</span>
              <p className="text-gray-600 font-bold"></p>
            </div>
            <p className="text-gray-700">
              "Showpass was the best choice of ticketing software I could have
              gone with, as I was quickly able to create the events I needed to
              and was onsale in no time. The Showpass staff are knowledgeable
              and friendly."
            </p>
          </div>
          <div className=" p-6  ">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-2">⭐⭐⭐⭐⭐</span>
              <p className="text-gray-600 font-bold"></p>
            </div>
            <p className="text-gray-700">
              "Quality customer support has always been a struggle, but we were
              pleasantly surprised with the quick and concise feedback received
              from their service reps. Highly recommend!"
            </p>
          </div>
          <div className=" p-6 ">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-2">⭐⭐⭐⭐⭐</span>
              <p className="text-gray-600 font-bold"></p>
            </div>
            <p className="text-gray-700">
              "We've been with Showpass since the beginning - and we have been
              so happy to work with them every step of the way! They are
              professional, responsive, creative and give incredible customer
              service to both us and our customers."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
