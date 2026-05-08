//  db Connection function

const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected 🚀");
  } catch (error) {
    console.error("DB Error:", error);
    process.exit(1);
  }
}

module.exports = connectDB;
