import { UserRole } from "../types/User.type";


export interface CreateUserDto {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
}

export interface LoginUserDto {
  identifier: string;
  password: string;
}