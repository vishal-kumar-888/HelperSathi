import dotenv from "dotenv";

class Environment {
    private static instance: Environment;

    private constructor() {
        dotenv.config();
    }

    static getInstance(): Environment {
        if (!Environment.instance) {
            Environment.instance = new Environment();
        }

        return Environment.instance;
    }

    get mongoUri(): string {
        const uri = process.env.MONGO_URI;

        if (!uri) {
            throw new Error("MONGO_URI is not defined");
        }

        return uri;
    }

    get port(): string {
        const port = process.env.PORT;
        if (port === undefined) {
            throw new Error("PORT is not defined");
        }
        return port;
    }
}

export default Environment;
