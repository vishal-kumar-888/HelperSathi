import UserRepository from "../Repository/User.Repository";
import { CreateUserDto } from "../dtos/User.dto";
import { IUser } from "../types/User.type";
class UserService {
    constructor(
        private userRepository: UserRepository,
    ) { }

    async create(data: CreateUserDto): Promise<CreateUserDto> {
        const user = await this.userRepository.create(data)
        return user;
    }

    async getByEmail( data: Pick<CreateUserDto, "email">): Promise<IUser | null> {

        const email = data.email;

        const user = await this.userRepository.getByEmail(email);

        return user;
    }

}

export default UserService;