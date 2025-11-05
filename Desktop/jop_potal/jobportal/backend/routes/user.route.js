import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { updateProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/profile/update").post(isAuthenticated, updateProfile);

export default router;
