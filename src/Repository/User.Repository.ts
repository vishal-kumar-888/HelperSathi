import { IUser } from "../types/User.type";
import { UserModel } from "../model/User.Model";

class UserRepository {
    async create(userData: Partial<IUser>): Promise<IUser> {
        const user = await UserModel.create(userData);

        return user;
    }
}