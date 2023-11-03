import express from "express";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

app.use(
    cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRouter);
app.use("/api", productRouter);
app.use(express.static(join(__dirname, "public")));

export default app;
