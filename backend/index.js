const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ limit: "50kb", extended: true }));
app.use(cors);
app.use(morgan("common"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
