import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../libs/jws.js";
import { TOKEN_SECRET } from "../config.js";

//?Funcion para registra el usuario
export const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["El usuario ya existe"]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({ id: userSaved._id,role:userSaved.role });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      role:userSaved.role,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json(["Error al crear el usuario"]);
  }
};

//?Funcion para el inicio de seccion del usuario
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json(["Usuario no encontrado"]);

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json(["Credenciales incorrecta"]);

    const token = await createAccessToken({ id: userFound._id, role:userFound.role });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role:userFound.role,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json(["Error al iniciar seccion"]);
  }
};

//? Funcion para salir de la secccion
export const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

//? verificar el token de las cookies
export const verifyToken = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).json(["No autorizado"]);

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
      if (err) return res.status(401).json(["No autorizado"]);

      const userFound = await User.findById(user.id);

      if (!userFound) return res.status(401).json(["Unauthorized"]);

      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        role: userFound.role
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(["Error al veificar el token"]);
  }
};

export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id);

    console.log(userFound);

    if (!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      role:userFound.role,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.log(error);
  }
};
