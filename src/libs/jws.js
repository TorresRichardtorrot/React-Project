import { token } from "morgan";
import { TOKEN_SECRET } from "../config.js";
import Jws from "jsonwebtoken";

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    Jws.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
