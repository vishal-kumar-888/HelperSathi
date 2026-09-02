import type { Document } from "mongoose";

export enum UserRole {
  CUSTOMER = "CUSTOMER",
  WORKER = "WORKER",
  ADMIN = "ADMIN"
}

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
  isActive: boolean;
}