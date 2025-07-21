import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


const app = express();

const PORT = process.env.PORT || 5001;

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


