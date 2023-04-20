import httpStatus from "http-status";

const errorStatusCode = {
  ConflitError: httpStatus.CONFLICT,
  UnauthorizedError: httpStatus.UNAUTHORIZED,
  NotFoundError: httpStatus.NOT_FOUND,
};

function errorMiddleware(err, req, res, next) {
  const errorMessage = err.message || "Internal Server Error";
  const statusCode =
    errorStatusCode[err.name] || httpStatus.INTERNAL_SERVER_ERROR;

  return res.status(statusCode).send(errorMessage);
}

export default errorMiddleware;
