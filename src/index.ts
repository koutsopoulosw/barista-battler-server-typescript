// src/index.ts
import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import middleware from './middleware';
import { baristaInstance, baristaTeamInstance } from './barista';
import { getBaristaTeamInstance } from "./data";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Example Middleware - will expound on this later if needed
app.use('/middleware', middleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Basic Get Barista Team with Team ID in Path
app.get("/baristaTeam/:baristaTeamId", async (req: Request, res: Response) => {  
  console.log("Getting Barista Team with ID: " + req.params.baristaTeamId);

  const response = await getBaristaTeamInstance(req.params.baristaTeamId);
   res.send(response);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
