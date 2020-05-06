
var db = require('../models/userModel');

function findMD(name) {
    return db.find()
        .then(data => {
            return data[name].name;
        })
}

module.exports = {
    findMD,
}



