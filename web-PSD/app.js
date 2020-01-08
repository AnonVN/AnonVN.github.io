const express = require("express");
const path = require('path');
const app = express()
const port = 3000;
// const post = require('../Node2/html/post.js');
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise


// linh.use('/login',post)

app.use('/static', express.static(path.join(__dirname, 'public')))
console.log(__dirname);
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})
app.get('/Contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/Contact.html'))
})
app.get('/services', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/services.html'))
})
app.get('/Portfolio', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/Portfolio.html'))
})


app.listen(port, () => {
    console.log(`listen on ${port}`);
})