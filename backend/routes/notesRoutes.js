import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("you got 50000 notes");
});

router.post("/", (req, res) => {
  res.status(201).send("Note created successfully");
});

router.put("/:id", (req, res) => {
  res.status(200).send("Note updated successfully");
});

router.delete("/:id", (req, res) => {
  res.status(200).send("Note deleted successfully");    
});

export default router;











// app.get('/api/notes', (req, res) => {
//   res.status(200).send('you got 50000 notes');
// });

// app.post('/api/notes', (req, res) => {
//   res.status(201).send('Note created successfully');
// });

// app.put('/api/notes/:id', (req, res) => {
//   res.status(200).send('Note updated successfully');
// });
// app.delete('/api/notes', (req, res) => {
//   res.status(200).send('Note deleted successfully');
// });

