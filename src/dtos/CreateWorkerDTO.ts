import { WorkerType } from "../types/Worker.type";

export interface ICreateWorkerDTO {

    serviceCategory: WorkerType;

    skills: string[];

    experience: number;

    bio: string;

    serviceAreas: string[];

    availability: {
        days: string[];

        timeSlots: {
            start: string;
            end: string;
        }[];
    };
}