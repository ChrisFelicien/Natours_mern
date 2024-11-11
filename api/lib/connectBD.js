import mongoose from "mongoose";
import asyncWrapper from "./../utils/asyncWrapper.js";

const connectDB = asyncWrapper(async (req, res, next) => {
  const URI = process.env.MONGO_URI.replace(
    /PASSWORD/,
    process.env.MONGO_PASSWORD
  );
  const connection = await mongoose.connect(URI);

  console.log(`Connection to database`);
});

export default connectDB;
