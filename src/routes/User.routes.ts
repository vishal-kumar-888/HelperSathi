import { Router } from "express";
import UserController from "../controller/User.controller.js";
import UserService from "../Services/User.Service.js";
import UserRepository from "../Repository/User.Repository.js";
import {authMiddleware} from "../ middleware/auth.middleware.js";

const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/getprofile", authMiddleware, userController.getprofile);
<<<<<<< HEAD
router.get("/getalluser", userController.getalluser);
=======
router.get("/getalluser", authMiddleware, userController.getalluser);
>>>>>>> 53e5bfe (commit)

export default router;