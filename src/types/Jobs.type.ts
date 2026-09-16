import { Types } from "mongoose";
import { WorkerType } from "./Worker.type";

export enum Status{
    OPEN = "OPEN",
    ASSIGNED = "ASSIGNED",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export interface IJob {
    customerId: Types.ObjectId; // Reference to the User model (customer)

    title: string;

    description: string;

    serviceCategory: WorkerType;

    location: string;

    budget: number;

    status: Status;
}
