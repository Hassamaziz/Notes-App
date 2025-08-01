import express from "express";
import dotenv from 'dotenv';
import cors from "cors";


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();


const app = express();

const PORT = process.env.PORT || 5001;


// Middleware to enable CORS functionality 
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from the frontend
}));

app.use(express.json());// Middleware to parse JSON bodies

app.use(rateLimiter); // Apply rate limiting middleware



// This is a simple custom middleware to log requests
// app.use((req, res, next)=>{
//   console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//   next();
// })

app.use("/api/notes", notesRoutes);


// Connect to the database
connectDB().then(()=>{
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
})


