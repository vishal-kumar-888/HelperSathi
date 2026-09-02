import dotenv from "dotenv";
import App from "./app";

dotenv.config();

class Server {
  private app: App;
  private port: number;

  constructor() {
    this.app = new App();
    this.port = Number(process.env.PORT) || 5000;
  }

  public start(): void {
    this.app.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();

server.start();