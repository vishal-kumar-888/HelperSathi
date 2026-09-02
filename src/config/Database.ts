import mongoose from "mongoose";
import Environment from "./env";

class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {}

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }

    return DatabaseConnection.instance;
  }

  async connect(): Promise<void> {
    try {
        const env = Environment.getInstance();
      await mongoose.connect(env.mongoUri,{
        maxPoolSize:20,
        minPoolSize:5
      });

      console.log("MongoDB connected successfully");
    } catch (error) {
      console.error("MongoDB connection failed", error);
      process.exit(1);
    }
  }

  async disconnect(): Promise<void> {
    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  }
}

export default DatabaseConnection;