import { ICreateWorkerDTO } from "../dtos/CreateWorkerDTO";
import WorkerRepository from "../Repository/Worker.Repository";
import { IWorker } from "../types/Worker.type";
import {Types} from "mongoose"


class WorkerService{
    constructor(
        private workerRepository: WorkerRepository,
    ){}
    async CreateJobs(userId: Types.ObjectId, data: ICreateWorkerDTO): Promise<IWorker>{
        return this.workerRepository.create(userId, data);
    }
    async getWorkerByUserId(userId: Types.ObjectId): Promise<IWorker | null> {
        const worker = await this.workerRepository.getWorkerByUserId(userId);
        return worker;
    }
    async updateWorkerProfile(userId: Types.ObjectId, updateData: Partial<IWorker>): Promise<IWorker | null> {
        const updatedWorker = await this.workerRepository.updateWorkerProfile(userId, updateData);
        return updatedWorker;
    }
}

export default WorkerService;