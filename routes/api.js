const express = require('express');
const router = express.Router();
const db =  require('../config/connectDB.js')

router.get('/find',(req,res,next)=>{
  db.find({}).then((data)=>{
    res.json(data)
  })
})

router.post('/create',(req,res,next)=>{
  let email = req.body.email
  let username= req.body.username
  let phonenumber = req.body.phonenumber
  let password = req.body.password
  db.create({
    username:username,
    phonenumber:phonenumber,
    email:email,
    password:password
  }).then(()=>{
    res.redirect('/')
  })
})
router.put('/update',function(req,res,next){
  db.updateOne({ _id: req.body.id},{name: req.body.name,email:req.body.email})
  .then(function(data){
    res.json(data)
  }).catch((err)=>{
    res.status(500).json('err')
  })
})
router.delete('/delete',function(req,res,next){
  db.deleteOne({_id: req.body.id})
  .then(function(data){
    res.json(data)
  })
})
router.post('/singin',function(req,res,next){
  let email = req.body.email
  let password = req.body.password
  db.find({email: email,password:password}).then(function(data){
    if(data.length==0){
      res.redirect('/dangky')
    }else{
        res.redirect('/index')
    }
  })
})
module.exports = router;
