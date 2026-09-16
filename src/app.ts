import express from "express";
import UserRoutes from "./routes/User.routes.js";
import WorkerRoutes from "./routes/Worker.routes.js";
import JobRoutes from "./routes/Jobs.routes.js";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.app.use("/users", UserRoutes);
    this.app.use("/workers", WorkerRoutes);
    this.app.use("/jobs", JobRoutes);
    this.app.get("/", (req, res) => {
      res.send("Welcome to the API");
    });
  }
}

export default App;