import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import path from "path";


import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 5001;


// Middleware to enable CORS
if (process.env.NODE_ENV !== "production") {
  app.use(cors({
  origin: "http://localhost:5173",
}));

}

app.use(express.json());// Middleware to parse JSON bodies

app.use(rateLimiter); // Apply rate limiting middleware



// This is a simple custom middleware to log requests
// app.use((req, res, next)=>{
//   console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//   next();
// })

app.use("/api/notes", notesRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
// Serve the frontend application

if (process.env.NODE_ENV === "production") {
 
  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend","dist", "index.html"));
});

}


// Connect to the database
connectDB().then(()=>{
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
})


