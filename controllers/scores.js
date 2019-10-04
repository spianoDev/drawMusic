const express = require("express");
const router = express. Router();

const Score = require('../models/Score');

router.get("/scores", (req, res) => {
    Score.find({}).then(scores => {
        console.log(req.body);
        res.json(scores);
    })
});

module.exports = router;