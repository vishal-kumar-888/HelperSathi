import { Types } from "mongoose";

export enum WorkerType {
    ELECTRICIAN = "ELECTRICIAN",
    PLUMBER = "PLUMBER",
    CARPENTER = "CARPENTER",
    PAINTER = "PAINTER",
    MASON = "MASON",
    TILER = "TILER",
    ROOFER = "ROOFER",
    HVAC_TECHNICIAN = "HVAC_TECHNICIAN",
    LANDSCAPER = "LANDSCAPER",
    CLEANER = "CLEANER"
}
export interface IWorker {
    userId: Types.ObjectId; // Reference to the User model
    serviceCategory: WorkerType;
    skills: string[];
    experience: number; // in years
    bio: string;
    serviceAreas: string[]; // List of areas where the worker provides services
    availability: {
        days: string[]; // e.g., ["Monday", "Tuesday"]
        timeSlots: { start: string; end: string }[]; // e.g., [{ start: "09:00", end: "17:00" }]
    };
    verificationStatus: VerificationStatus;
    
}

export enum VerificationStatus {
    PENDING = "PENDING",
    VERIFIED = "VERIFIED",
    REJECTED = "REJECTED"
}