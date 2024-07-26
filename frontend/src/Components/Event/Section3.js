import React from "react";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  const navigate = useNavigate();

  const cities = [
    {
      name: "Delhi",
      image:
        "https://i.pinimg.com/736x/18/c2/77/18c2779e66d8d389b6c866d1789348f3.jpg",
    },
    {
      name: "Mumbai",
      image:
        "https://i.pinimg.com/474x/73/7c/ac/737cacca350aed7c8593b52d797e8312.jpg",
    },
    {
      name: "Bangalore",
      image:
        "https://i.pinimg.com/564x/98/ab/cd/98abcdac19c87a58db5e588b167e8dba.jpg",
    },
    {
      name: "Kolkata",
      image:
        "https://i.pinimg.com/474x/56/8c/4f/568c4f66b5fcef0e1b082ef895a387d9.jpg",
    },
    {
      name: "Chennai",
      image:
        "https://i.pinimg.com/474x/76/91/0a/76910a51a38aa77ca986641a5c023975.jpg",
    },
    {
      name: "Hyderabad",
      image:
        "https://i.pinimg.com/474x/c8/7f/0e/c87f0e599576f304cb9a4f4ca4ab2109.jpg",
    },
    {
      name: "Ahmedabad",
      image:
        "https://i.pinimg.com/564x/c0/cb/8e/c0cb8e8f18079c9000c865973836b3d5.jpg",
    },
    {
      name: "Pune",
      image:
        "https://i.pinimg.com/564x/a2/91/2e/a2912e8f5ceff2b6b7260d624400e166.jpg",
    },
    {
      name: "Surat",
      image:
        "https://i.pinimg.com/564x/45/dc/fa/45dcfabecc35b47cd872651863b8892d.jpg",
    },
    {
      name: "Jaipur",
      image:
        "https://i.pinimg.com/564x/98/7c/0c/987c0cd75a49a85e95044887514c80c2.jpg",
    },
  ];

  const handleCityClick = (cityName) => {
    console.log("City clicked:", cityName);
    navigate(`/ExploreEvent/filtered?Location=${cityName}`);
  };
  

  console.log("Rendering Section3 component");

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Popular Cities</h1>
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex-shrink-0 cursor-pointer"
              onClick={() => handleCityClick(city.name)}
            >
              <img src={city.image} alt={city.name} className="w-40 h-40" />
              <h2 className="text-lg font-bold mt-2 text-center">
                {city.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
