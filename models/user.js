const Users = require('../schemas/users');





function getUser(username,cb) {
    Users.findOne({username: username})
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}

function createUser(b, cb) {  //b tiene que ser un objeto que cumpla con el schema
    new Users(b)
    .save()
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    });
}

exports.getUser = getUser;
exports.createUser= createUser