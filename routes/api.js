var express = require('express');
var router = express.Router();
var db = require('../sevices/user.sevice');
var rd = 0

router.get('/', async function (req, res, next) {
    const MaSo = await db.findMD(rd);
    if (MaSo == undefined) {
        rd = 0
    }
    res.send(MaSo)
    rd++
});

module.exports = router;