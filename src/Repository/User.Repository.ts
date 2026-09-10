import { CreateUserDto } from "../dtos/User.dto";
import { IUser } from "../types/User.type";
import { UserModel } from "../model/User.Model";

class UserRepository {
    async create(userData: CreateUserDto): Promise<IUser> {
        const user = await UserModel.create(userData);
        return user.toObject();
    }

    async getByIdentity(identity: string): Promise<IUser | null> {
        console.log("Searching email:", identity);

        const user = await UserModel.findOne({
            $or: [
                { email: identity },
                { phone: identity }
            ]
        }).lean<IUser>();

        console.log("Repository result:", !!user);

        return user;
    }

    async GetAllUsers(): Promise<IUser[]> {
        const users = await UserModel.find().lean<IUser[]>();
        return users;
    }
}

export default UserRepository;
