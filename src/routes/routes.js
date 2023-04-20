import { Router } from "express";
import userRoutes from "./user.routes.js";
import transactionsRoutes from "./transactions.routes.js";

const routes = Router();

routes.use([userRoutes, transactionsRoutes]);

export default routes;
