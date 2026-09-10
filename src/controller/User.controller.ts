import UserService from "../Services/User.Service";
import { Request, Response } from "express"

class UserController {

    constructor(
        private userService: UserService,
    ) { }


    register = async (req: Request, res: Response): Promise<Response> => {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                message: "Please provide valid details",
                success: false,
            });
        }

        const user = await this.userService.create({
            name,
            email,
            phone,
            password,
        });

        return res.status(201).json({
            message: "User created successfully",
            success: true,
            user,
        });
    };



    login = async (req: Request, res: Response): Promise<Response> => {
        const { email, password } = req.body;

        const user = await this.userService.login({
            identifier: email,
            password: password,
        });
        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Login successful",
            success: true,
            user,
        });
    };
    getprofile = async (req: Request, res: Response): Promise<Response> => {
       const email = req.query.email as string;

        if (!email) {
            return res.status(400).json({
                message: "Email query parameter is required",
                success: false,
            });
        }

        const user = await this.userService.getUser(email);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "User profile retrieved successfully",
            success: true,
            user,
        });
    };
   getalluser = async (req: Request, res: Response): Promise<Response> => {
        const users = await this.userService.getalluser();
        return res.status(200).json({
            message: "All users retrieved successfully",
            success: true,
            users,
        });
    };


}

export default UserController;