import { Schema, model } from "mongoose";
import { IWorker, WorkerType, VerificationStatus } from "../types/Worker.type";

const workerSchema = new Schema<IWorker>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        serviceCategory: {
            type: String,
            enum: Object.values(WorkerType),
            required: true,
        },

        skills: {
            type: [String],
            required: true,
        },

        experience: {
            type: Number,
            required: true,
        },

        bio: {
            type: String,
            required: true,
        },

        serviceAreas: {
            type: [String],
            required: true,
        },

        availability: {
            days: {
                type: [String],
                required: true,
            },

            timeSlots: [
                {
                    start: {
                        type: String,
                        required: true,
                    },
                    end: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },

        verificationStatus: {
            type: String,
            enum: Object.values(VerificationStatus),
            default: VerificationStatus.PENDING,
        },      
    },
    {
        timestamps: true,
    }
);

export const WorkerModel = model<IWorker>("Worker", workerSchema);