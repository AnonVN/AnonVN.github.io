const express = require("express");
const path = require('path');
const linh = express()
const port = 3000;
// const post = require('../Node2/html/post.js');
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise


// linh.use('/login',post)

linh.use('/static', express.static(path.join(__dirname, '../Node2')))
console.log(__dirname);
linh.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Node2/html/index.html'))
})
linh.get('/Contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Node2/html/Contact.html'))
})
linh.get('/services', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Node2/html/services.html'))
})
linh.get('/Portfolio', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../Node2/html/Portfolio.html'))
})


linh.listen(port, () => {
    console.log(`listen on ${port}`);
})