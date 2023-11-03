import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

export const MONGO_URI_KEY = process.env.MONGO_URI_KEY;

export const PORT = process.env.PORT;

export const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const DIRNAME = __dirname;
