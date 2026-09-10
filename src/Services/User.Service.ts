import UserRepository from "../Repository/User.Repository";
import { CreateUserDto, LoginUserDto } from "../dtos/User.dto";
import { IUser,ILoginResponse } from "../types/User.type";
import argon2 from "argon2";
import JwtService from "../utils/jwt";
class UserService {
    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService = JwtService.getInstance()
    ) { }

    async create(data: CreateUserDto): Promise<CreateUserDto> {

        const email = await this.userRepository.getByIdentity(data.email);


        if (email) {
            throw new Error("User with this email already exists1");
        }

        const hashedPassword = await argon2.hash(data.password);

        const user = await this.userRepository.create({
            ...data,
            password: hashedPassword
        });
        return user;
    }
    async login(data: LoginUserDto): Promise<ILoginResponse | null> {
        
        const user = await this.userRepository.getByIdentity(
            data.identifier
        );

        console.log(data.identifier)
        if (!user) {
            throw new Error("Invalid credentials");
        }
        
        const isPasswordValid = await argon2.verify(
            user.password,
            data.password
        );

        if (!isPasswordValid) {
            throw new Error("Invalid credential");
        }
        const token = this.jwtService.generateToken({
        userId: user._id.toString(),
        // role: user.role,  // if your user has role
    });

       return { user, token };
    }

    async getUser(email: string): Promise<IUser | null> {
        const user = await this.userRepository.getByIdentity(email);
        if (!user) {
            return null;
        }
        return user;
    }
   async getalluser(): Promise<IUser[]> {
        const users = await this.userRepository.GetAllUsers();
        return users;
    }
}

export default UserService;