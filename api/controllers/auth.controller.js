import asyncWrapper from "../utils/asyncWrapper.js";
import User from "./../models/user.model.js";
import APIError from "../utils/APIError.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_IN
  });
};

export const signUpUser = asyncWrapper(async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    return next(new APIError("The email is already used", 400));
  }

  const user = await User.create({ name, email, password, confirmPassword });

  const token = generateToken(user._id);

  res.status(201).json({
    status: "success",
    token,
    user
  });
});

export const signInUser = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new APIError(`Please provide email and password`, 400));
  }

  const userExist = await User.findOne({ email }).select("+password");

  if (
    !userExist ||
    !(await userExist.comparePassword(password, userExist.password))
  ) {
    return next(new APIError("Invalid email or password", 401));
  }

  const user = userExist;

  const token = generateToken(user._id);

  res.status(200).json({
    status: "success",
    token,
    user
  });
});

export const protectedRoute = asyncWrapper(async (req, res, next) => {
  let token;

  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer")) {
    return next(new APIError("Please login to proceed", 401));
  }
  token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return next(new APIError(`Your token is not valid please login`, 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_IN
  });

  const currUser = await User.findById(decoded.id);

  if (!currUser) {
    return next(
      new APIError(
        `Sorry the user with this id doesn't exist please login`,
        400
      )
    );
  }

  req.user = currUser;
  next();
});
