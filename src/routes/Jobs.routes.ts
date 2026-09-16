import JobController from "../controller/Jobs.controller";
import JobService from "../Services/Job.Service";
import JobRepository from "../Repository/Jobs.Repository";
import UserRepository from "../Repository/User.Repository";
import { Router } from "express";
import { authMiddleware } from "../ middleware/auth.middleware";

const jobRepository = new JobRepository();
const userRepository = new UserRepository();
const jobService = new JobService(jobRepository, userRepository);
const jobController = new JobController(jobService);

const router = Router();    

router.post("/create",authMiddleware,jobController.createJob)
router.put("/update",authMiddleware,jobController.updateJob)
router.get("/getjob",authMiddleware,jobController.getJob)

export default router;