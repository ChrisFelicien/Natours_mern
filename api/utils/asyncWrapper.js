const asyncWrapper = (cb) => {
  return (req, res, next) => cb(req, res, next).catch(next);
};

export default asyncWrapper;
