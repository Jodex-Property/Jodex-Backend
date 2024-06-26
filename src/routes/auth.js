import { Router } from "express";

import { errorMiddleware } from "../middleware/errors.js";
import { errorHandler } from "../error-handler.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import * as userController from "../Modules/Users/users.controller.js";
// const userController = require("../Modules/Users/users.controller.js");

const authRoutes = Router();

authRoutes.post("/signup", errorHandler(userController.register));
authRoutes.post("/login", errorHandler(userController.login));
authRoutes.get("/me", [authMiddleware], errorHandler(userController.me));

export default authRoutes;
