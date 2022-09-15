const notFound = (req, res, next) => {
  const e = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(e);
};

const errorHandler = (err, req, res, next) => {
  //   console.log(req.originalUrl);

  //   next();

  const statusCode = res.status === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
