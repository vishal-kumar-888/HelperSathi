
import { Types } from "mongoose";
import JobRepository from "../Repository/Jobs.Repository";
import { IJob } from "../types/Jobs.type";
import { ICreateJobDTO } from "../dtos/Job.dto";
import UserRepository from "../Repository/User.Repository";

class JobService {

    constructor(
        private jobRepository: JobRepository,
        private userRepository: UserRepository,
    ) {}

    async createJob(
        customerId: Types.ObjectId,
        jobData: ICreateJobDTO
    ): Promise<IJob> {

        const user = await this.userRepository.getUserById(
            customerId.toString()
        );

        if (!user) {
            throw new Error("User not found");
        }

        if (user.role !== "CUSTOMER") {
            throw new Error("Only customers can create jobs");
        }

        if (!jobData.title?.trim()) {
            throw new Error("Job title is required");
        }

        if (!jobData.description?.trim()) {
            throw new Error("Job description is required");
        }

        if (!jobData.location?.trim()) {
            throw new Error("Job location is required");
        }

        if (!jobData.serviceCategory) {
            throw new Error("Service category is required");
        }

        if (jobData.budget <= 0) {
            throw new Error("Budget must be greater than zero");
        }

        return this.jobRepository.createJob(
            customerId,
            jobData
        );
    }

    async getJobById(
        jobId: Types.ObjectId
    ): Promise<IJob | null> {

        console.log(
            "Fetching job with ID:",
            jobId.toString()
        );

        return this.jobRepository.getJobById(jobId);
    }

    async getMyJobs(
        customerId: Types.ObjectId
    ): Promise<IJob[]> {

        return this.jobRepository.getJobsByCustomerId(
            customerId
        );
    }

    async updateJob(
        jobId: Types.ObjectId,
        jobData: Partial<ICreateJobDTO>
    ): Promise<IJob | null> {

        console.log(
            "Updating job with ID:",
            jobId.toString()
        );

        return this.jobRepository.updateJob(
            jobId,
            jobData
        );
    }
}

export default JobService;

