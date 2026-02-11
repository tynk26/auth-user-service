import express from "express";

const app = express();
const PORT = 3000;

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`[backend] running on ${PORT}`);
});
