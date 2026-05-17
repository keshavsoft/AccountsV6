import express from 'express';
import { router as routerFromjournals } from "./journals/end-points.js";

const router = express.Router()
router.use("/journals", routerFromjournals);;

export { router };