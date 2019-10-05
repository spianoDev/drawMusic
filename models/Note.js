const mongoose = require('../db/connetion');

const NoteSchema = new mongoose.Schema({
    pitch: String,
    rhythm: { type: String, default: '/q' },
    accidentals: String,
    rest: { type: Boolean, default: 'false' }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;