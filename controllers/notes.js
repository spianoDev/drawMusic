const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get("/notes", (req, res) => {
    Note.find().then(notes => {
        console.log(req.body);
        res.json(notes)
    });
});

module.exports = router;