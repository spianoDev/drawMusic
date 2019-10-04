const Notes = require('../models/Note');
const Scores = require('../models/Score');
const noteSeeds = require('./notes.json');
const scoreSeeds = require('./scores.json');

Notes.remove({}).then(() => {
    Notes.insertMany(noteSeeds).then(() => {
        console.log("So many note choices!");
    }).then(() => process.exit());
});

Scores.remove({}).then(() => {
    Scores.insertMany(scoreSeeds).then(() => {
        console.log("All the fun songs...");
    }).then(() => process.exit());
});

