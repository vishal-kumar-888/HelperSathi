import { Request, Response, NextFunction } from "express";
import JwtService from "../utils/jwt";

const jwtService = JwtService.getInstance();

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Authorization token required",
                success: false,
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Invalid authorization format",
                success: false,
            });
        }

        const decoded = jwtService.verifyToken(token);

        if (typeof decoded === "string") {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        req.user = decoded as {
            userId: string;
        };

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false,
        });
    }
};