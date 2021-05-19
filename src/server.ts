import express from "express";

const app = express();
const port = 5000;

app.get("/api/credentials", (_request, response) => {
  response.send("All credentials requested");
});

app.post("/api/credentials", (_request, response) => {
  response.send("Add new credential");
});

app.listen(port, () => {
  console.log(`Lockbuddy listening at http://localhost:${port}`);
});
