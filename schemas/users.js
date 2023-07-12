const mongoose = require('mongoose');

const users = mongoose.Schema({
    name: {type: String},
    username: {type: String},
    password: {type: String},
    role:{type: String}
});

const Users = new mongoose.model('Users', users);

module.exports = Users;