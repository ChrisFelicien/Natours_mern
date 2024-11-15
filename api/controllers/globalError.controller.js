const globalErrorController = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Something went wrong please try again later";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    err
  });
};

export default globalErrorController;
