import { Request, Response, NextFunction } from "express";

// 전역 에러 핸들러
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
};
