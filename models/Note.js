const mongoose = require('../db/connetion');

const NoteSchema = new mongoose.Schema({
    pitch: String,
    rhythm: String,
    accidentals: String,
    rest: { type: Boolean, default: 'false' }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;