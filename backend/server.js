// start server
const dotenv = require("dotenv");
dotenv.config();

const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.listen(6767, () => {
  console.log("server is running on 6767 PORT");
});
