const userModel = require("../models/user.models");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../models/foodpartner.model");

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "user already exists",
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedPass,
  });

  //Creating token

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
    process.env.JWT_SECRET,
  );

  await res.cookie("token", token);

  return res.status(201).json({
    message: "user created successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  //Generating Token

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
    process.env.JWT_SECRET,
  );

  await res.cookie("token", token);
  return res.status(200).json({
    message: "user logged in successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "user logged out successfully",
  });
}

async function registerFoodPartner(req, res) {
  const { name, email, phone, address, contactname, password } = req.body;

  const isAlreadyExists = await foodPartnerModel.findOne({ email });

  if (isAlreadyExists) {
    return res.status(401).json({
      message: "food partner already exists",
    });
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const foodPartner = await foodPartnerModel.create({
    name,
    email,
    contactname,
    phone,
    address,

    password: hashedPass,
  });

  //After successfull creation. create token

  const token = jwt.sign(
    {
      id: foodPartner._id,
      name: foodPartner.name,
      email: foodPartner.email,
    },
    process.env.JWT_SECRET,
  );

  await res.cookie("token", token);

  await res.status(200).json({
    message: "food Partner created successfully",
  });
}

async function loginFoodPartner(req, res) {
  const { email, password } = req.body;

  const user = await foodPartnerModel.findOne({ email });

  if (!user) {
    res.status(401).json({
      message: "user not registered",
    });
  }

  const isPassMatched = await bcrypt.compare(password, user.password);

  if (!isPassMatched) {
    return res.status(403).json({
      message: "Invalid email or password",
    });
  }

  // Generating Token

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);
  return res.status(200).json({
    message: "Food Partner logged in successfull",
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
  });
}

async function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Food partner logged out successfully",
  });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
