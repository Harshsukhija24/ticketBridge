import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import ExploreEvent from "./ExploreEvent/ExploreEvent";
import DetailPage from "./ExploreEvent/DetailPage";
import Request from "./RequestAdemo/Request";
import SupportPage from "./RequestAdemo/Support";
import Technology from "./Orginzers/Technology";
import Features from "./Orginzers/Features";
import Experiences from "./Orginzers/Experinces";
import Seasonal from "./Industry/Seasonal";
import Food from "./Industry/Food";
import Sports from "./Industry/Sports";
import Music from "./Industry/Music";
import Price from "./Price";
import ExploreFilteredEvents from "./ExploreEvent/Result";
import CreateEvent from "./ExploreEvent/CreateEvent";
import Book from "./bookTicket/book";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ExploreEvent" element={<ExploreEvent />} />
        <Route path="/ExploreEvent/:id" element={<DetailPage />} />
        <Route
          path="/ExploreEvent/Filtered"
          element={<ExploreFilteredEvents />}
        />
        <Route path="/ExploreEvent/Request" element={<Request />} />
        <Route path="/ExploreEvent/Support" element={<SupportPage />} />
        <Route path="/Tech" element={<Technology />} />
        <Route path="/Feature" element={<Features />} />
        <Route path="/Experince" element={<Experiences />} />
        <Route path="ExploreEvent/Create" element={<CreateEvent />} />
        <Route path="/Seasonal" element={<Seasonal />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Book/:id" element={<Book />} />
        <Route path="/Price" element={<Price />} />
      </Routes>
    </div>
  );
};

export default App;
