


export interface CreateUserDto {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface LoginUserDto {
  identifier: string;
  password: string;
}