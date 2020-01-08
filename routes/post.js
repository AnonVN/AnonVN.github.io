const express = require("express");
const moment = require("moment");
const router = express.Router();

router.use(express.urlencoded())

router.post('/Contact',(req,res, next)=>{
    if (req.body.Name==='duy' && req.body.Password==='12345678') {
      res.redirect('/services')
    } else {
        res.redirect('/')
        
    }
  
})

module.exports = router;

