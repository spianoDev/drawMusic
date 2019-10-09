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

let mongoURI = '';
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/drawMusic";
}

mongoose.connect('mongodb+srv://test:o9cx6hSYf6ic6d3b@test-2jjim.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false}, () => {
    console.log("YAY... connection established!");

})

    .catch(error => console.log("connection failed", error));

module.exports = mongoose;
