import httpStatus from "http-status";

const errorStatusCode = {
    ConflitError: httpStatus.CONFLICT,
    UnauthorizedError: httpStatus.UNAUTHORIZED
}

function errorMiddleware(err, req, res, next){

 const errorMessage = err.message || "Internal Server Error"
 const statusCode = errorStatusCode[err.name] || httpStatus.INTERNAL_SERVER_ERROR

 res.status(statusCode).send(errorMessage)
}

export default errorMiddleware