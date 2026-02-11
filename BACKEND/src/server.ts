import app from "./app";

const PORT = 3000;

// 서버 실행
app.listen(PORT, () => {
  console.log(`[backend] Server running on port ${PORT}`);
});
