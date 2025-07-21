import express from 'express';

const app = express();

app.get('/api/notes', (req, res) => {
  res.status(200).send('you got 50000 notes');
});

app.post('/api/notes', (req, res) => {
  res.status(201).send('Note created successfully');
});

app.put('/api/notes/:id', (req, res) => {
  res.status(200).send('Note updated successfully');
});
app.delete('/api/notes', (req, res) => {
  res.status(200).send('Note deleted successfully');
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});