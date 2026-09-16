
import { JobModel } from "../model/Jobs.Model";
import { ICreateJobDTO } from "../dtos/Job.dto";
import { IJob } from "../types/Jobs.type";
import { Types } from "mongoose";

class JobRepository {

    async createJob(
        customerId: Types.ObjectId,
        jobData: ICreateJobDTO
    ): Promise<IJob> {

        const job = await JobModel.create({
            ...jobData,
            customerId
        });

        return job.toObject();
    }

    async getJobById(
        jobId: Types.ObjectId
    ): Promise<IJob | null> {

        const job = await JobModel.findById(jobId);

        return job ? job.toObject() : null;
    }

    async getJobsByCustomerId(
        customerId: Types.ObjectId
    ): Promise<IJob[]> {

        const jobs = await JobModel.find({
            customerId
        });

        return jobs.map((job) => job.toObject());
    }

    async updateJob(
        jobId: Types.ObjectId,
        jobData: Partial<ICreateJobDTO>
    ): Promise<IJob | null> {

        const updatedJob = await JobModel.findByIdAndUpdate(
            jobId,
            jobData,
            { new: true }
        );

        return updatedJob ? updatedJob.toObject() : null;
    }
}

export default JobRepository;

