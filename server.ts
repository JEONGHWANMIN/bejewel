import express, { Express, Request, Response } from "express";
import cors from "cors";
import { db } from "./db";

const app: Express = express();
app.use(cors());

const port = 8080;

app.get("/products", (req: Request, res: Response) => {
  res.json(db);
});

app.post("/product", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.patch("/product", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.delete("/product", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
