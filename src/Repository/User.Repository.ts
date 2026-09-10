import { CreateUserDto, LoginUserDto } from "../dtos/User.dto";
import { IUser } from "../types/User.type";
import { UserModel } from "../model/User.Model";

class UserRepository {
    async create(userData: CreateUserDto): Promise<IUser> {
        const user = await UserModel.create(userData);
        return user.toObject();
    }


    async getByEmail(email: string): Promise<IUser | null> {
        console.log("Searching email:", email);

        const user = await UserModel
            .findOne({ email })
            .lean<IUser>();

        console.log("Repository result:", !!user);

        return user;

    }
     async getalluser(): Promise<IUser[]> {
        const users = await UserModel.find().lean<IUser[]>();
        return users;
    }


}

export default UserRepository;