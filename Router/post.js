const express = require("express");
const moment = require("moment");
const router = express.Router();



router.use(express.urlencoded())

router.post('/',(req,res, next)=>{
    if (req.body.Name==='duy' && req.body.Password==='12345678') {
      res.redirect('/test')
    } else {
        res.redirect('/index')
        
    }
  
})

module.exports = router;




