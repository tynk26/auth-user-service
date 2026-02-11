// 단순 메모리 DB 예시 (실무에서는 MongoDB/PostgreSQL 사용)
export interface User {
  id: number;
  username: string;
  password: string; // 해시된 비밀번호
}

export const users: User[] = []; // 임시 저장
