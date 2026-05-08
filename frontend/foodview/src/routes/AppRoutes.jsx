import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FoodPartnerLogin from "../pages/foodpartner/FoodPartnerLogin";
import FoodPartnerRegister from "../pages/foodpartner/FoodPartnerRegister";
import UserLogin from "../pages/user/UserLogin";
import Home from "../pages/Home";
import UserRegister from "../pages/user/UserRegister";
import CreateFood from "../pages/foodpartner/createFood";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route
          path="/food-partner/register"
          element={<FoodPartnerRegister />}
        />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />

        <Route path="/" element={<Home />} />
        <Route path="/create-food" element={<CreateFood />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
