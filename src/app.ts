import express from "express";
import UserRoutes from "./routes/User.routes.js";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.app.use("/users", UserRoutes);
    this.app.get("/users", (req, res) => {
      res.send("Hello, World!");
    });
  }
}

export default App;