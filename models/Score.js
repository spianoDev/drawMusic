const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    name: String,
    clef: { type: String, default: 'treble' },
    time_signature: Number,
    key: String,
    notes: [String]
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;
