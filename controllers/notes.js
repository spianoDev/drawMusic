const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get("/", (req, res) => {
    Note.find({}).then(notes => {
        console.log(req.body);
        res.json(notes)
    });
});
router.get('/:id', (req, res) => {
    Note.findOne( { _id: req.params.id }, req.body)
        .then(note => res.json(note));
});

router.post('/', (req, res) => {
    Note.create(req.body)
        .then(note => res.json(note));
});

router.put('/:id', (req, res) => {
    Note.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(note => res.json(note));
});

router.delete('/:id', (req, res) => {
    Note.findOneAndDelete( { _id: req.params.id })
        .then(note => res.json(note));
});

module.exports = router;