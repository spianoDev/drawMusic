const express = require('express');
const hbs = require('hbs');
const notesController = require('./controllers/notes');
const scoresController = require('./controllers/scores');
const parser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
// to allow the music notes to render


app.set('view engine', 'hbs');
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride("_method"));
app.use("/assets", express.static('public'));

app.get("/", (req, res) => {
    res.render('index', { pitch: req.params.pitch })
});

app.use("/scores", scoresController);
app.use("/notes", notesController);

app.listen(4000, () => console.log("Get ready to make some music on port 4000"));