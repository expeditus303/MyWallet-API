import httpStatus from "http-status";

function schemaMiddleware(
  schema,
  field = "body",
  status = httpStatus.UNPROCESSABLE_ENTITY
) {
  return (req, res, next) => {
    const reqValues = req[field];
    const { error: errorMessages } = schema.validate(reqValues, {
      abortEarly: false,
    });

    if (errorMessages) {
      const error = errorMessages.details.map((detail) => detail.message);
      return res.status(status).send(error);
    }

    next();
  };
}

export default schemaMiddleware;
