const foodModel = require("../models/food.model");

const { uploadFile } = require("../service/storage.service");

const createFood = async (req, res) => {
  //   const { foodPartner, name, video, description } = req.body;
  console.log(req.foodPartner);
  console.log(req.body);
  console.log(req.file);

  const fileUploadResult = await uploadFile(req.file);

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodPartner._id,
  });

  res
    .status(201)
    .json({ message: "food created successfully", food: foodItem });
};

const getFoodItems = async (req, res) => {
  const foodItems = await foodModel.find({});

  res
    .status(200)
    .json({ message: "food items fetched successfully", data: foodItems });
};

module.exports = { createFood, getFoodItems };
