const mongoose = require('mongoose');

const apicred = mongoose.Schema({
    username: {type: String},
    password: {type: String},
});

const Apicred = new mongoose.model('Apicred', apicred);

module.exports = Apicred; 