import React from "react";
const Section2 = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://dcm1eeuyachdi.cloudfront.net/fit-in/1920x1920/filters:quality(100):format(webp)/static/nextjs/images/discover/discover-banner.jpg')",
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold">Chase That Feeling</h3>
        </div>
      </div>
    </div>
  );
};

export default Section2;
