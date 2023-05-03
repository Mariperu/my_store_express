//middleware for error

function logErrors(err, req, res, next) {
  console.error(err);
  next(err); //middleware for error
}

function errorHandler(err, req, res, next) {
  //middleware for error
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  //middleware for error
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
