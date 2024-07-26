import React from "react";
import { useNavigate } from "react-router-dom";

const NavOrganize = () => {
  const navigate = useNavigate();
  return (
    <nav className=" py-4 border-b-2 border-black   ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-8 mr-16 ">
          <button
            className="text-black "
            onClick={() => navigate("/Experince")}
          >
            The Experience
          </button>

          <button onClick={() => navigate("/Tech")} className="text-black ">
            Ticketing
          </button>
          <button onClick={() => navigate("/Feature")} className="text-black ">
            All features
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavOrganize;
