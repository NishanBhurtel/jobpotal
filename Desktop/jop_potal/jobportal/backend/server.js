import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Job Portal Backend Running Successfully!');
});
