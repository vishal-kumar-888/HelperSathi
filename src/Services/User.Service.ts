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
    async getUserById(userId: string): Promise<IUser | null> {
        const user = await this.userRepository.getUserById(userId);
        if (!user) {
            return null;
        }
        return user;
    }
    async UpdateUserProfile( userId: string, updatedData: Partial<IUser> ): Promise<IUser | null> {
        if(!updatedData || !userId){
            throw new Error("Invalid input data");
        }
        const name = updatedData.name;
        if(name && (name.length < 3)) {throw new Error("Invalid name");}
        
        const password = updatedData.password;
        if (password) {
            const hashedPassword = await argon2.hash(password);
            updatedData.password = hashedPassword;
        }
        const number = updatedData.phone;
        if(number && (number.length > 10 || number.length < 10)){
            throw new Error("Invalid phone number");
        }
        
        const user = await this.userRepository.UpdateUserProfile( userId, updatedData);
        if (!user) {
            return null;
        }
        return user;
    }
    
    // async deleteUser(userId: string): Promise<IUser | null> {
    //     const user = await this.userRepository.deleteUser(userId);
    //     if (!user) {
    //         return null;
    //     }
    //     return user;
    // }
    // async deactivateUser(userId: string): Promise<IUser | null> {
    //     const user = await this.userRepository.deactivateUser(userId);
    //     if (!user) {
    //         return null;
    //     }
    //     return user;
    // }
    // async activateUser(userId: string): Promise<IUser | null> {
    //     const user = await this.userRepository.activateUser(userId);
    //     if (!user) {
    //         return null;
    //     }
    //     return user; 
    // }
}

export default UserService;