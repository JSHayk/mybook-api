import express from "express";
import generalRouter from "./general.router.js";

const router = express();
// Routes
router.use(generalRouter);

export default router;
