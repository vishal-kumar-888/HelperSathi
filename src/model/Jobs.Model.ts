import { Schema, model } from "mongoose";
import { IJob, Status } from "../types/Jobs.type";

const jobSchema = new Schema<IJob>(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    serviceCategory: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    budget: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.OPEN,
    },
  },
  {
    timestamps: true,
  }
);

export const JobModel = model<IJob>("Job", jobSchema);