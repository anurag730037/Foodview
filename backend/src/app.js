// create server

const express = require("express");

const cors = require("cors");

const app = express();

const cookieParser = require("cookie-parser");

const authRoutes = require("../src/routes/auth.routes");
const foodRoutes = require("../src/routes/food.routes");

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: true, // your frontend URL
    credentials: true,
  }),
);

app.use("/api/auth", authRoutes);

app.use("/api/food", foodRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
