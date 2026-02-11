import express from "express";
import { healthRouter } from "./modules/health/health.routes";
import { userRouter } from "./modules/user/user.routes";
const app = express();
app.use(express.json());

app.use("/health", healthRouter);
app.use("/user", userRouter); // User 모듈 연결
export default app;
