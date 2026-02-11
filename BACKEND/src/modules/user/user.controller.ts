import { Request, Response } from "express";
import { UserService } from "./user.service";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const result = await UserService.register(username, password);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const result = await UserService.login(username, password);
    res.json(result);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
