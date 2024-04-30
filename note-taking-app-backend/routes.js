// routes.js
const express = require('express');
const router = express.Router();
const Note = require('./Note.js');

// Get all notes
router.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Create a new note
router.post('/notes', async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content });
  await note.save();
  res.status(201).json(note);
});

// Update a note
router.put('/notes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
  res.json(note);
});

// Delete a note
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.status(204).end();
});

module.exports = router;
