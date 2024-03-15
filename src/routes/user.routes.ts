import { Router } from "express";
import { emailVerify, loginUser, registerUser } from "../controllers/user.controller";
import { loginValidation, userValidation } from "../service/zod.validation";
import { hashedPassword } from "../service/bcrypt.service";

const userRoutes=Router();

userRoutes.route("/user").post(userValidation,hashedPassword,registerUser);
userRoutes.route("/login").post(loginValidation,loginUser);
userRoutes.route("/mail/verify").get(emailVerify);


export default userRoutes;