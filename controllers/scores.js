const express = require("express");
const router = express. Router();

const Score = require('../models/Score');
const Note = require('../models/Note');

router.get("/", (req, res) => {
    Score.find({}).then(scores => {
        //console.log(scores);
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
            //console.log(req.body);
            res.render("showSong", score)
        });
});
router.delete("/:id", (req, res) => {
    Score.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            //console.log(req.params.id);
            res.redirect("/scores")
        });
});

router.post("/", (req, res) => {
    Score.create(req.body).then(newScore => {
        //console.log(req.body);
        Note.create(req.body).then(newNote => {

            newScore.notes.push(newNote.pitch + newNote.rhythm);
            newScore.notes.pop();
            newScore.save();
            //console.log(newScore);
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
           console.log(updateNote);
       Note.create(req.body).then(addNote => {
            console.log(addNote);
           updateNote.notes.push(addNote.pitch + addNote.rhythm);
           updateNote.save();
           // add a conditional to not include the empty field set in the next array
           if (addNote.pitch === undefined){
               updateNote.notes.pop();
           }
           res.redirect('/scores');
        })
    })
});


module.exports = router;