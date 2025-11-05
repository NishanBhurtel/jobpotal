import express from "express";
import { updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router();

router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;
