
import JobService from "../Services/Job.Service";
import { Request, Response } from "express";
import { ICreateJobDTO } from "../dtos/Job.dto";
import { Types } from "mongoose";

class JobController {
    constructor(private jobService: JobService) { }

    createJob = async (
        req: Request,
        res: Response
    ): Promise<Response> => {

        const customerId = req.user!.userId;
        const customerObjectId = new Types.ObjectId(customerId);

        const jobData: ICreateJobDTO = req.body;

        if (!jobData) {
            return res.status(400).json({
                message: "Invalid job data",
                success: false
            });
        }

        const newJob = await this.jobService.createJob(
            customerObjectId,
            jobData
        );

        return res.status(201).json({
            message: "Job created successfully",
            success: true,
            job: newJob,
        });
    };

    getJob = async (
        req: Request,
        res: Response
    ): Promise<Response> => {

        const jobId = req.query.jobId as string;

        if (!jobId) {
            return res.status(400).json({
                message: "Job ID is required",
                success: false
            });
        }

        const jobObjectId = new Types.ObjectId(jobId);

        const job = await this.jobService.getJobById(jobObjectId);

        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Job retrieved successfully",
            success: true,
            job,
        });
    };
    updateJob = async (
        req: Request,
        res: Response
    ): Promise<Response> => {

        const jobId = req.query.jobId as string;

        if (!jobId) {
            return res.status(400).json({
                message: "Job ID is required",
                success: false
            });
        }

        const jobObjectId = new Types.ObjectId(jobId);

        const jobData: Partial<ICreateJobDTO> = req.body;

        if (!jobData) {
            return res.status(400).json({
                message: "Invalid job data",
                success: false
            });
        }

        const updatedJob = await this.jobService.updateJob(
            jobObjectId,
            jobData
        );

        if (!updatedJob) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Job updated successfully",
            success: true,
            job: updatedJob,
        });
    };
}

export default JobController;

