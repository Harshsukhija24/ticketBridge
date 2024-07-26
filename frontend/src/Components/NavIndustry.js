import React from "react";
import { useNavigate } from "react-router-dom";

const NavIndustry = () => {
  const navigate = useNavigate();
  return (
    <nav className=" py-4 border-b-2 border-black   ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-8 mr-16 ">
          <button onClick={() => navigate("/Seasonal")} className="text-black ">
            Seasonal Attraction
          </button>
          <button onClick={() => navigate("/Food")} className="text-black ">
            Food & Drinks
          </button>
          <button onClick={() => navigate("/Music")} className="text-black ">
            Performing Arts
          </button>
          <button onClick={() => navigate("/Sports")} className="text-black ">
            Sport
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavIndustry;
