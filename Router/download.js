const express = require("express")
const router = express.Router()
const path = require('path')

router.get('/',(req,res,next)=>{
    res.download(path.join(__dirname,'../public/img/sarah.jpg'))
})

module.exports = router;