import WorkerService from "../Services/WorkerService";
import { Request, Response } from "express";
import { Types } from "mongoose";
import { ICreateWorkerDTO } from "../dtos/CreateWorkerDTO";

class WorkerController {
    constructor(private workerService: WorkerService) { }

    CreateProfile = async (
        req: Request, res: Response,): Promise<Response> => {
        const userId = req.user!.userId;

        if (!Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: "Invalid user ID",
                success: false,
            });
        }

        const workerData: ICreateWorkerDTO = req.body;
        const userObjectId = new Types.ObjectId(userId);

        await this.workerService.CreateJobs(userObjectId, workerData);

        return res.status(201).json({
            message: "Worker created successfully",
            success: true,
        });
    };
    GetProfile = async (req: Request, res: Response): Promise<Response> => {

        const userId = req.user!.userId;

        if (!Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: "Invalid user ID",
                success: false,
            });
        }

        const userObjectId = new Types.ObjectId(userId);
        return res.status(200).json({
            message: "success",
            success: true,
            worker: await this.workerService.getWorkerByUserId(userObjectId)

        });
    }
    UpdateWorkerProfile = async(req:Request,res:Response):Promise<Response> =>{
        const updateProfile = req.body;
        const userId = req.user!.userId;
        if (!Types.ObjectId.isValid(userId)) {
            return res.status(400).json({
                message: "Invalid user ID",
                success: false,
            });
        }
        const userObjectId = new Types.ObjectId(userId);
        return res.status(200).json({
            message: "success",
            success: true,
            worker: await this.workerService.updateWorkerProfile(userObjectId,updateProfile)

        });

    }

};


export default WorkerController;
