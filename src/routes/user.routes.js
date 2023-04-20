import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";
import schemaMiddleware from "../middlewares/schema.middleware.js";
import userSchemas from "../schemas/user.schemas.js"

const userRoutes = Router();

userRoutes.post("/signup", schemaMiddleware(userSchemas.signUp), userControllers.create);
userRoutes.post("/signin", schemaMiddleware(userSchemas.signIn), userControllers.authenticate)

export default userRoutes;
