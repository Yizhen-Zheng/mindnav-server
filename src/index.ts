import express from "express";
import authRoutes from "./routes/auth.js";

import type { Request, Response } from "express";

const app = express();
app.use(express.json()); //parsing json bodies

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.use("/auth", authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
