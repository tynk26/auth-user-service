import express from "express";
import cors from "cors"; // ← 추가
import { healthRouter } from "./modules/health/health.routes";
import { userRouter } from "./modules/user/user.routes";

const app = express();

// JSON body 처리
app.use(express.json());

// ⚡ CORS 설정
app.use(
  cors({
    origin: "http://localhost:5173", // 프론트 Vite dev 서버
    credentials: true, // 필요하면 쿠키 전송 허용
  }),
);

// 라우터 연결
app.use("/health", healthRouter);
app.use("/user", userRouter);

export default app;
