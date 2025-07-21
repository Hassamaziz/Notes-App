import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from "./config/db.js";


const app = express();

const PORT = process.env.PORT || 5001;


// Middleware to parse JSON bodies
app.use(express.json());

app.use((req, res, next)=>{
  console.log("we just got a request");
  next();
})


connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

//  database password   5xEUC4JRRk7ENuPl
