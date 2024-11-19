const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL || 8000);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect Mongodb", err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
