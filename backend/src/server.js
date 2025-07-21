import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from "../config/db.js";

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});

//  database password   5xEUC4JRRk7ENuPl
