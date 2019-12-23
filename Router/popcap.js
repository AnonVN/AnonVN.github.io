const express = require("express")
const router = express.Router()


router.get('/:number1/:number2',(req,res,next)=>{
    var sum = parseInt(req.params.number1)+parseInt(req.params.number2)
    res.send('Sum la:'+sum)
})

module.exports = router;