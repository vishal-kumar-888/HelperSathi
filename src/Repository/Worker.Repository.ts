import { WorkerModel } from "../model/Worker.Model";
import { ICreateWorkerDTO } from "../dtos/CreateWorkerDTO";
import { IWorker } from "../types/Worker.type";
import { Types } from "mongoose";

class WorkerRepository {
    async create(userId: Types.ObjectId, workerData: ICreateWorkerDTO): Promise<IWorker> {
        const worker = await WorkerModel.create({
            userId,
            ...workerData
        });
        return worker.toObject();
    }
    async getWorkerByUserId(userId: Types.ObjectId): Promise<IWorker | null> {
        const worker = await WorkerModel.findOne({ userId });
        return worker ? worker.toObject() : null;
    }
    async updateWorkerProfile(userId: Types.ObjectId, updateData: Partial<IWorker>): Promise<IWorker | null> {
        const updatedWorker = await WorkerModel.findOneAndUpdate({ userId }, updateData, { new: true });
        return updatedWorker ? updatedWorker.toObject() : null;
    }
}

export default WorkerRepository;