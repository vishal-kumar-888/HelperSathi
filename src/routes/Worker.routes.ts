import {Router} from "express";
import WorkerController from "../controller/Worker.controller";
import WorkerService from "../Services/WorkerService";
import WorkerRepository from "../Repository/Worker.Repository";
import { authMiddleware } from "../ middleware/auth.middleware";

const workerRepository = new WorkerRepository();
const workerService = new WorkerService(workerRepository);
const workerController = new WorkerController(workerService);

const router = Router();



router.post("/worker/", authMiddleware, workerController.CreateProfile);
router.get("/worker/", authMiddleware, workerController.GetProfile);
router.put("/worker/update/",authMiddleware,workerController.UpdateWorkerProfile);

export default router;