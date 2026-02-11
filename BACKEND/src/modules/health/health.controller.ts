import { Request, Response } from "express";

// Health 체크 컨트롤러
export const getHealth = (req: Request, res: Response) => {
  res.json({ status: "ok" });
};
