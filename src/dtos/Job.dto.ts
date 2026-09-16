import { Types } from "mongoose";
import { WorkerType } from "../types/Worker.type";
import { Status } from "../types/Jobs.type";
export interface ICreateJobDTO {
    title: string;

    description: string;

    serviceCategory: WorkerType;

    location: string;

    budget: number;

}