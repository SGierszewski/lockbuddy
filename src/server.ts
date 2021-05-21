import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDatabase } from "./database";
import {
  deleteCredential,
  readCredential,
  readCredentials,
  saveCredentials,
} from "./utils/credentials";

if (process.env.MONGO_URL === undefined) {
  throw new Error("Missing env MONGO_URL");
}

const app = express();
const port = 5000;

// Allow CORS for every following route
// Express Middleware (Alternative to CORS module)
app.use((_request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());

// Request all credentials (Credential Collection)
app.get("/api/credentials", async (_request, response) => {
  const credentials = await readCredentials();
  response.json(credentials);
});
// Request a single credential by its service name
app.get("/api/credentials/:service", async (request, response) => {
  const credential = await readCredential(request.params.service);
  response.json(credential);
});

// Add a new credential
app.post("/api/credentials", async (request, response) => {
  await saveCredentials(request.body, "test");
  response.send("New credential saved in DB");
});
// Delete a single credential by its service name
app.delete("/api/credentials/:service", async (request, response) => {
  await deleteCredential(request.params.service);
  console.log(request.params.service);
  response.send("Credential deleted");
});
// Connect MongoDB
connectDatabase(process.env.MONGO_URL).then(() => {
  console.log("Database connected");
  app.listen(port, () => {
    console.log(`Lockbuddy listening at http://localhost:${port}`);
  });
});
