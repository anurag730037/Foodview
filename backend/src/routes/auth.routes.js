const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
} = require("../controllers/auth.controller");
const authRouter = express.Router();

// user Auth API's
authRouter.post("/user/register", registerUser);
authRouter.post("/user/login", loginUser);
authRouter.post("/user/logout", logoutUser);

// food-partner auth API's
authRouter.post("/food-partner/register", registerFoodPartner);
authRouter.post("/food-partner/login", loginFoodPartner);
authRouter.post("/food-partner/logout", logoutFoodPartner);

module.exports = authRouter;
