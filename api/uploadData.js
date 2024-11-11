import mongoose from "mongoose";
import Tour from "./models/tour.model.js";
import path from "path";
import { readFileSync } from "fs";

const url =
  "mongodb+srv://filungakalenga:vworN1nAtZD6I9ke@cluster0.gkmik.mongodb.net/natours?retryWrites=true&w=majority&appName=Cluster0";

const __direName = path.resolve();

console.log(__direName);

await mongoose.connect(url).then(() => console.log("Connected to DB"));

const data = JSON.parse(
  readFileSync(`${__direName}/dev_data/tours-simple.json`)
);

await Tour.insertMany(data);

console.log(`All tours added`);
