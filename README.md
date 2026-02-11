# Auth User Service Fullstack Demo

## 프로젝트 개요

- **목표**: JWT토큰을 활용한 회원가입 및 로그인 서버
- **백엔드**: Node.js + Express + TypeScript
- **프론트엔드**: React + TypeScript + Vite
- **주요 기능**:
  - Health Check API
  - 회원가입 / 로그인 (JWT 인증)
  - 프론트에서 JWT 토큰 확인 가능
- **구조**:
  backend/
  src/
  server.ts # 서버 실행
  app.ts # Express app 정의
  config/ # 환경변수 설정
  modules/
  health/ # Health API
  user/ # 회원가입/로그인 API
  middlewares/ # 에러 핸들러 등
  frontend/
  src/
  api/ # 백엔드 API 호출 함수
  pages/ # Register / Login
  App.tsx # 메인 컴포넌트
  main.tsx

---

## 실행 방법

### 1. 백엔드

```bash
cd backend
npm install
npm run dev
Health Check: http://localhost:3000/health

User API:

POST /user/register

{ "username": "test", "password": "1234" }
POST /user/login

{ "username": "test", "password": "1234" }
2. 프론트엔드
cd frontend
npm install
npm run dev
브라우저 접속: http://localhost:5173

회원가입 및 로그인 후 JWT 토큰 확인 가능

특징
Layered 구조: route → controller → service → model

보안 적용: bcrypt로 비밀번호 해시, JWT 토큰 발급

CORS 정책 적용: 프론트와 통신 가능

확장 가능: 모듈 구조로 API 기능 추가 용이

커밋 히스토리: 단계별 개발 과정을 Git에 기록
```
