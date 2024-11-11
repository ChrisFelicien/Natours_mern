import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tour must have a name"],
    min: 3,
    unique: true
  },
  duration: {
    type: Number,
    required: [true, "Please provide a duration"]
  },
  maxGroupSize: {
    type: Number,
    required: [true, "Please provide a groupe size"]
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, "Please provide a tour price"]
  },
  summary: {
    type: String,
    required: [true, "Please provide a tour summary"]
  },
  description: {
    type: String,
    required: [true, "Please provide a tour description"]
  },
  imageCover: {
    type: String
  },
  images: {
    type: [String]
  },
  startDates: {
    type: [Date]
  }
});

const Tour = mongoose.model("Tour", tourSchema);

export default Tour;
