import express from "express";
import morgan from "morgan";
import globalErrorController from "./controllers/globalError.controller.js";
import APIError from "./utils/APIError.js";
import toursRoute from "./routes/tours.routes.js";
import userRoute from "./routes/user.Router.js";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use("/api/v1/tours", toursRoute);
app.use("/api/v1/users", userRoute);
app.all("*", (req, res, next) => {
  next(
    new APIError(
      `This routes ${req.originalUrl} is not find in this server `,
      404
    )
  );
});
app.use(globalErrorController);

export default app;
