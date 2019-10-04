const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/drawMusic', { useNewUrlParser: true }, () => {
    console.log('connecting music in 3, 2, 1...');
});

module.exports = mongoose;
