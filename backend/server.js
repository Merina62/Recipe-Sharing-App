require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./models/database");
const authRoutes = require("./routes/AuthRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

// Log the MongoDB URI to ensure it's being loaded
console.log("MONGOURL:", process.env.MONGOURL);
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// User Authentication
app.use("/api/auth", authRoutes);

// Fetch Recipe Datas
app.use("/api/recipes", recipeRoutes);

//start server, listen to port 8080
app.listen(8080, () => {
  console.log("Server running at port 8080");
});
