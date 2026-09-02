import { CreateUserDto, LoginUserDto } from "../dtos/User.dto";
import { IUser } from "../types/User.type";
import { UserModel } from "../model/User.Model";

class UserRepository {
    async create(userData: CreateUserDto): Promise<IUser> {
        const user = await UserModel.create(userData);
        return user.toObject();
    }


    async getByEmail(email: string): Promise<IUser | null> {
        const user = await UserModel
            .findOne({ email })
            .lean<IUser>();

        return user;
    }

    async login(userData: LoginUserDto): Promise<IUser | null> {
        const identity = userData.identifier; // This is the user's email input

        // FIX: Change { identity } to { email: identity } so MongoDB looks in the email column
        const user = await UserModel.findOne({ email: identity })
            .select('+password')
            .lean<IUser>();

        // FIX: Fixed typo from 'retutn' to 'return'
        if (!user) {
            return null;
        }

        return user;
    }


}

export default UserRepository;