// src/index.ts
import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import middleware from './middleware';
import { baristaInstance, baristaTeamInstance } from './barista';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Example Middleware - will expound on this later if needed
app.use('/middleware', middleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Basic Get Barista Team with Team ID in Path
app.get("/baristaTeam/:baristaTeamId", (req: Request, res: Response) => {  
  console.log("Getting Barista Team with ID: " + req.params.baristaTeamId);

  
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
