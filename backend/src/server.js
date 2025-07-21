import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from "./config/db.js";


const app = express();

const PORT = process.env.PORT || 5001;



app.use(express.json());// Middleware to parse JSON bodies

app.use((req, res, next)=>{
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
})


connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

//  database password   5xEUC4JRRk7ENuPl
