const express = require("express");
const router = express. Router();

const Score = require('../models/Score');
const Note = require('../models/Note');

router.get("/", (req, res) => {
    Score.find({}).then(scores => {
        console.log(scores);
        // res.json(scores)
        res.render("songs", {scores})
    });
});
router.get("/newSong", (req, res) => {
    res.render("newSong");
});
router.get('/:id', (req, res) => {
    Score.findOne( { _id: req.params.id }, req.body)
        .then(score => {
            // res.json(score));
            console.log(req.body);
            res.render("songNotes", score)
        });
});

router.post("/", (req, res) => {
    Score.create(req.body).then(newScore => {
        Note.create(req.body).then(newNote => {
            newScore.notes.push(newNote.pitch + newNote.rhythm);
            newScore.save();
            console.log(newScore);
            res.redirect("/scores");
        })
    })
});
// router.post('/unknown', (req, res) => {
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
    const takeNote = req.body.id;
    Score.findByIdAndUpdate({ _id: scoreId}, req.body.pitch, req.body.rhythm).then(updateNote => {
        Note.findOne({ _id: takeNote}).then(addNote => {
            console.log(addNote);
            console.log(addNote.pitch);
            console.log(addNote.rhythm);
            console.log(addNote.pitch + addNote.rhythm);
            //console.log(takeNote.pitch.rhythm);
            updateNote.notes.push(addNote.pitch + addNote.rhythm);
           //newNote.save();
           updateNote.save();
           res.json(updateNote);
          console.log(updateNote);
        })
    })
});

router.delete("/:id", (req, res) => {
    Score.findOneAndDelete({ _id: req.params.id })
        .then(deleted => res.json(deleted));
});

module.exports = router;