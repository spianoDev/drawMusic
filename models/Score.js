const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    clef: { type: String, default: 'treble' },
    time_signature: Number,
    key: String,
    notes: { type: [String], max: 4 }
});

const Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;
