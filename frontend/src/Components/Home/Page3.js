import React from "react";

const Page3 = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/474x/51/26/94/512694f26b255cb3f89574831bde2a41.jpg")',
        }}
      >
        <div className="container ml-8 mx-auto flex items-center justify-between">
          <div>
            <div>
              <h2 className="text-4xl font-bold text-white mt-4">
                We Support Everyone
              </h2>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white">
                Support for every customer
              </h3>
              <p className="text-white mt-2">
                Ticketbridge is here to help with anything your guests need! If
                they have questions, our support team can be reached by phone,
                email, live chat and social media.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white">
                Live help when you need it
              </h3>
              <p className="text-white mt-2">
                Whether you need assistance setting up your event, selling
                tickets, or scanning guests in, our team of experts is always
                available to help.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://cdn.prod.website-files.com/647916a17f6008d4b7e209e0/647f4e4957342ad12b95047f_Image.png"
              alt="Support"
              className="max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
