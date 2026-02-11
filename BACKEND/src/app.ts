import express from "express";
import { healthRouter } from "./modules/health/health.routes";

const app = express();

// JSON body 처리
app.use(express.json());

// 라우터 연결
app.use("/health", healthRouter);

export default app;
