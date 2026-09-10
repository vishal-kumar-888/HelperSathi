import jwt,{SignOptions} from "jsonwebtoken";
import Env from "../config/env";

class JwtService {
    private static instance: JwtService;

    private constructor() {}

    static getInstance(): JwtService {
        if (!JwtService.instance) {
            JwtService.instance = new JwtService();
        }

        return JwtService.instance;
    }

    generateToken(payload: object): string {
        const env = Env.getInstance();

        const options: SignOptions = {
            expiresIn: env.jwtExpiresIn as SignOptions["expiresIn"],
        };

        return jwt.sign(payload, env.jwtSecret, options);
    }

    verifyToken(token: string): object | string {
        const env = Env.getInstance();
        return jwt.verify(token, env.jwtSecret);
    }
}

export default JwtService;