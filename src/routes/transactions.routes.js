import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import schemaMiddleware from "../middlewares/schema.middleware.js";
import transactionsControllers from "../controllers/transactions.controllers.js";
import transactionsSchemas from "../schemas/transactions.schemas.js";
import httpStatus from "http-status";

const transactionsRoutes = Router();

transactionsRoutes.post(
  "/",
  authMiddleware,
  schemaMiddleware(transactionsSchemas.create),
  transactionsControllers.create
);
transactionsRoutes.get("/", authMiddleware, transactionsControllers.get);
transactionsRoutes.put(
  "/:transactionId",
  authMiddleware,
  schemaMiddleware(
    transactionsSchemas.objectId,
    "params",
    httpStatus.BAD_REQUEST
  ), schemaMiddleware(transactionsSchemas.update), 
  transactionsControllers.update
);
transactionsRoutes.delete(
  "/:transactionId",
  authMiddleware,
  schemaMiddleware(
    transactionsSchemas.objectId,
    "params",
    httpStatus.BAD_REQUEST
  ),
  transactionsControllers.del
);

export default transactionsRoutes;
