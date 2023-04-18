import { Router } from "express";
import userControllers from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.post("/signup", userControllers.create);

export default userRoutes;
