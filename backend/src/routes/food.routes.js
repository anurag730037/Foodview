const express = require("express");
const {
  authFoodPartnerMiddleware,
  authUserMiddleware,
} = require("../middleware/auth.middileware");
const { createFood, getFoodItems } = require("../controllers/food.controller");
const multer = require("multer");

const foodRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});

foodRouter.get("/test", (req, res) => {
  res.json({ message: "testing" });
});

// this Should be Protected only for Food partner
foodRouter.post(
  "/add",
  authFoodPartnerMiddleware,
  upload.single("video"),
  createFood,
);

foodRouter.get("/", authUserMiddleware, getFoodItems);

module.exports = foodRouter;
