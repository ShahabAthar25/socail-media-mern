const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB, () => {
  console.log("Connected to database");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server running at http://localhost:5000");
});
