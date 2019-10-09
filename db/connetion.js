const mongoose = require('mongoose');

mongoose.Promise = Promise;
// to allow deployment into heroku
// let mongoURI = "";
// if (process.env.NODE_ENV === "production") {
//     mongoURI = process.env.DB_URL;
// } else {
//     mongoURI = "mongodb://localhost/drawMusic";
// }

// mongoose.connect('mongodb://localhost/drawMusic', { useNewUrlParser: true }, () => {
//     console.log('connecting music in 3, 2, 1...');
// });

// From Gabe to try and connect my database to Heroku

global.Promise = require('bluebird');

async function test() {
    // No unhandled rejection!
    await Promise.reject(new Error('test'));
}

// Prints "false"
console.log(test().catch(() => {}) instanceof require('bluebird'));



let mongoURI = "let mongoURI = mongodb+srv://test:o9cx6hSYf6ic6d3b@test-2jjim.mongodb.net/test?retryWrites=true&w=majority";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/drawMusic";
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .catch(error => console.log("connection failed", error));

module.exports = mongoose;
