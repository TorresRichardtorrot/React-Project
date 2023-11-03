import fs from "fs/promises";
import { DIRNAME } from "../config.js";
const ruta = `${DIRNAME}/public/img`;

export async function removeImgFile(nameImage) {
  if (!nameImage) return;
  try {
    await fs.unlink(`${ruta}/${nameImage}`);
  } catch (error) {
    console.log(error);
    return;
  }
}
