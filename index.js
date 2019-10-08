const express = require('express');
const hbs = require('hbs');
const notesController = require('./controllers/notes');
const scoresController = require('./controllers/scores');
const parser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
// to allow the music notes to render with handlebars helper
// https://github.com/ericf/express-handlebars#helpers
// https://stackoverflow.com/questions/32707322/how-to-make-a-handlebars-helper-global-in-expressjs/42224612#42224612

// let hbsHelpers = hbs.create({
//     helpers: require("./public/music.js").helpers,
//     defaultLayout: 'layout',
//     extname: '.hbs'
// });
// app.engine('.hbs', hbsHelpers.engine);

app.set('view engine', 'hbs');
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride("_method"));
app.use("/assets", express.static('public'));

app.get("/", (req, res) => {
    res.redirect('/notes');
});

app.use("/scores", scoresController);
app.use("/notes", notesController);

app.set("port", process.env.PORT || 4000);

app.listen(4000, () => console.log("Get ready to make some music on port 4000"));