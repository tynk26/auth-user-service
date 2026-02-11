import { Router } from "express";
import { getHealth } from "./health.controller";

export const healthRouter = Router();

// GET /health
healthRouter.get("/", getHealth);
