const mongoose = require('mongoose');

mongoose.Promise = Promise;
// to allow deployment into heroku
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/drawMusic";
}

mongoose.connect('mongodb://localhost/drawMusic', { useNewUrlParser: true }, () => {
    console.log('connecting music in 3, 2, 1...');
});

module.exports = mongoose;
