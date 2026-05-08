const foodPartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.models");

const jwt = require("jsonwebtoken");

const authFoodPartnerMiddleware = async (req, res, next) => {
  console.log("request ", req.cookies);
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({
      message: "unauthorized access",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const verifyFoodPartner = await foodPartnerModel.findById(decoded.id);

    if (!verifyFoodPartner) {
      return res.status(401).json({
        message: "unauthorized access",
      });
    }

    //Adding that food partner to req
    req.foodPartner = verifyFoodPartner;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message: "unauthorized access",
    });
  }
};

const authUserMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "please login first" });
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    const verifyUser = await userModel.findById(decoded.id);

    if (!verifyUser) {
      return res.status(401).json({ message: "unauthorized access" });
    }

    req.user = verifyUser;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "unauthorized access" });
  }
};

module.exports = { authFoodPartnerMiddleware, authUserMiddleware };
