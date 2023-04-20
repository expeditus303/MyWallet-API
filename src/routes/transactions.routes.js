import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import schemaMiddleware from "../middlewares/schema.middleware.js";
import transactionsControllers from "../controllers/transactions.controllers.js"
import transactionsSchemas from "../schemas/transactions.schemas.js"

const transactionsRoutes = Router()

transactionsRoutes.get("/", authMiddleware, transactionsControllers.get)
transactionsRoutes.post("/", authMiddleware, schemaMiddleware(transactionsSchemas.create), transactionsControllers.create)

export default transactionsRoutes