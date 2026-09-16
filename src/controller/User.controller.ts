import UserService from "../Services/User.Service";
import { Request, Response } from "express"

class UserController {

    constructor(
        private userService: UserService,
    ) { }


    register = async (req: Request, res: Response): Promise<Response> => {
        const { name, email, phone, password,role } = req.body;

        if (!name || !email || !phone || !password || !role) {
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
            role,
        });

        return res.status(201).json({
            message: "User created successfully",
            success: true,
            user,
        });
    };



    login = async (req: Request, res: Response): Promise<Response> => {
        const { identifier, password } = req.body;
        console.log("Identifier:", identifier);

        const user = await this.userService.login({
            identifier: identifier,
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
       const userId = req.user!.userId; // Assuming the email is stored in req.user after authentication

        if (!userId) {
            return res.status(400).json({
                message: "User ID is required",
                success: false,
            });
        }

        const user = await this.userService.getUserById(userId);
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
    UpdateUserProfile = async (req: Request<{ userId: string }>, res: Response): Promise<Response> => {
        const userId = req.params.userId;
        const updateData = req.body;

        const updatedUser = await this.userService.UpdateUserProfile(userId, updateData);

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "User profile updated successfully",
            success: true,
            user: updatedUser,
        });
    };

    getUserById = async (req: Request<{ userId: string }>, res: Response): Promise<Response> => {
        const userId = req.params.userId;

        const user = await this.userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "User retrieved successfully",
            success: true,
            user,
        });
    };

}

export default UserController;