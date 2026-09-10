import App from "./app.js";
import Environment from "./config/env.js";
import Database from "./config/Database.js";

class Server {
  private app: App;

  constructor() {
    this.app = new App();
  }

  public async start(): Promise<void> {
    const env = Environment.getInstance();
    const database = Database.getInstance();

    await database.connect();

    this.app.app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
    });
  }
}


const server = new Server();

server.start();