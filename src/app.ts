import  express, { Express } from "express";

class App {
  public app: Express;

  constructor() {
    this.app = express();


  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
  }
}

export default App;