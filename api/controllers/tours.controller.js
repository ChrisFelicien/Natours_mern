import validator from "validator";
import APIError from "./../utils/APIError.js";
import asyncWrapper from "../utils/asyncWrapper.js";
import Tour from "../models/tour.model.js";

const isValidMongoId = (req, res, next) => {
  const { id } = req.params;
  const isValidId = validator.isMongoId(id);

  if (!isValidId) {
    return next(new APIError(`Sorry this id is not valid`, 400));
  }

  next();
};

export const getAllTours = asyncWrapper(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).json({
    status: "success",
    results: tours.length,
    tours
  });
});

export const createTours = asyncWrapper(async (req, res, next) => {
  const tour = await Tour.create(req.body);

  res.status(201).json({
    status: "Success",
    message: `Created`,
    tour
  });
});

export const deleteTour = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  await Tour.findByIdAndDelete(id);

  res.status(204).json();
});

export const getSingleTour = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const tour = await Tour.findById(id);

  res.status(200).json({
    status: "success",
    tour
  });
});

export const updateTour = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const tour = await Tour.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: "success",
    message: "updated",
    tour
  });
});
