import { users, User } from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/env";

let idCounter = 1; // 자동 증가 id

export class UserService {
  // 회원가입
  static async register(username: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    const user: User = { id: idCounter++, username, password: hashed };
    users.push(user);
    return { id: user.id, username: user.username };
  }

  // 로그인
  static async login(username: string, password: string) {
    const user = users.find((u) => u.username === username);
    if (!user) throw new Error("사용자를 찾을 수 없습니다.");
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("비밀번호가 틀렸습니다.");

    // JWT 발급
    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" },
    );
    return { token };
  }
}
