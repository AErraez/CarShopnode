const Apicred = require('../schemas/apicred');





function getUser(username,cb) {
    Apicred.findOne({username: username})
    .then((elem) => {
        return cb(null, elem);
    })
    .catch((error) => {
        console.log('Error:', error);
        return cb(error);
    })
}

exports.getUser= getUser