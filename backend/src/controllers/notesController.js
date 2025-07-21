 
import Note from '../models/Note.js';



// Get Method
export async function getAllNotes (req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
    
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Post Method
export async function createNote (req, res) {
  try {
    const {title,content} = req.body;
    const note = new Note({
      title,
      content
    });
    const savedNote = await note.save();
    res.status(201).json({note: savedNote});

  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal server error in Creating" });
  }
};

// Put Method
export async function updateNote (req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ note: updatedNote });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal server error in Updating" });
  }
};

export async function deleteNote (req, res) {
  res.status(200).send("Note deleted successfully");
};

