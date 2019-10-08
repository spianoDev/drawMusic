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
router.get('/edit/:id', (req, res) => {
    Score.findOne({ _id: req.params.id })
        .then(score => {
            // res.json(score));
            res.render("editSong", score)
        });
});
router.get('/:id', (req, res) => {
    Score.findOne( { _id: req.params.id }, req.body)
        .then(score => {
            // res.json(score));
            console.log(req.body);
            res.render("showSong", score)
        });
});
router.delete("/:id", (req, res) => {
    Score.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            console.log(req.params.id);
            res.redirect("/scores")
        });
});

router.post("/", (req, res) => {
    Score.create(req.body).then(newScore => {
        console.log(req.body);
        Note.create(req.body).then(newNote => {

            newScore.notes.push(newNote.pitch + newNote.rhythm);
            // req.body.pitch.filter(input => {return input === ""});
            // req.body.rhythm.filter(input => {return input === ""});
            newScore.save();
            console.log(newScore);
            res.redirect("/scores");
        })
    })
});

// update a note inside a score
router.put('/edit/:id', (req, res) => {
    //req.body.notes = req.body.notes.filter(input => {return input.length > 0});
    const scoreId = req.params.id;
    //const takeNote = req.body.id;
    Score.findOneAndUpdate({ _id: scoreId}, req.body)
        .then(updateNote => {
       // Note.insertMany(req.body.notes).then(addNote => {
            // console.log(req.body);
            // console.log(addNote);
            // console.log(addNote.pitch);
            // console.log(addNote.rhythm);
            // console.log(addNote.pitch + addNote.rhythm);
            //console.log(takeNote.pitch.rhythm);
           // updateNote.notes.push(addNote.pitch + addNote.rhythm);
           //newNote.save();
           updateNote.save();
           res.redirect('/scores/edit');
          //console.log(updateNote);
        // })
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


module.exports = router;