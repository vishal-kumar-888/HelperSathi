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
        const { identifier, password } = req.body;

        const user = await this.userService.login({
            identifier,
            password,
        });

        return res.status(200).json({
            message: "Login successful",
            success: true,
            user,
        });
    };


}