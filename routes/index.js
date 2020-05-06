var express = require('express');
var router = express.Router();
var db = require('../sevices/user.sevice');


// /* GET home page. */
router.get('/', function (req, res, next) {
        res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
//     console.log(req.body)
    db.login(req.body.user,req.body.password)
        res.render('index', { title: 'Express' });
});
module.exports = router;
