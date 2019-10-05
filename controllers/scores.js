const express = require("express");
const router = express. Router();

const Score = require('../models/Score');
const Note = require('../models/Note');

router.get("/", (req, res) => {
    Score.find({}).then(scores => {
        console.log(req.body);
        res.json(scores);
    })
});
router.get('/:id', (req, res) => {
    Score.findOne( { _id: req.params.id }, req.body)
        .then(score => res.json(score));
});
router.post('/', (req, res) => {
    Score.create(req.body).then(newScore => res.json(newScore));
});

// router.post('/new', (req, res) => {
//
//     Score.findById(req.params.id).then(addToScore => {
//         Note.create(req.body.notes).then(newNote => {
//         // push the new note into score.notes array
//         addToScore.notes.push(newNote);
//         //save the note in the array
//         newNote.save();
//         addToScore.save();
//         console.log(newNote);
//         console.log(addToScore);
//         res.json(newNote);
//         res.json(addToScore);
//     })
//     })
// });
// update a note inside a score
router.put('/:id', (req, res) => {
    const scoreId = req.params.id;
    const addNote = req.body;
    Score.findByIdAndUpdate({ _id: scoreId}, req.body.pitch).then(updateNote => {
        Note.create(addNote).then(newNote => {
            console.log(updateNote);
            console.log(updateNote.notes);
            console.log(addNote.pitch);
            updateNote.notes.push(addNote.pitch);
            newNote.save();
            updateNote.save();
            res.json(newNote);
            console.log(updateNote);
        })
    })
});

router.delete("/:id", (req, res) => {
    Score.findOneAndDelete({ _id: req.params.id })
        .then(deleted => res.json(deleted));
});

module.exports = router;