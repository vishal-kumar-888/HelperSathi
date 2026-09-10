import { CreateUserDto, LoginUserDto } from "../dtos/User.dto";
import { IUser } from "../types/User.type";
import { UserModel } from "../model/User.Model";

class UserRepository {
    async create(userData: CreateUserDto): Promise<IUser> {
        const user = await UserModel.create(userData);
        return user.toObject();
    }


<<<<<<< HEAD
    async getByEmail(email: string): Promise<IUser | null> {
        console.log("Searching email:", email);

        const user = await UserModel
            .findOne({ email })
            .lean<IUser>();
=======
    async getByEmail(identity: string): Promise<IUser | null> {
        console.log("Searching email:", identity);

     const user =  await UserModel.findOne({
            $or: [
                { email: identity },
                { phone: identity }
            ]
        }).lean<IUser>();

        console.log("Repository result:", !!user);
>>>>>>> 53e5bfe (commit)

        console.log("Repository result:", !!user);

        return user;

    }
<<<<<<< HEAD
     async getalluser(): Promise<IUser[]> {
=======
    async getalluser(): Promise<IUser[]> {
>>>>>>> 53e5bfe (commit)
        const users = await UserModel.find().lean<IUser[]>();
        return users;
    }

}

export default UserRepository;