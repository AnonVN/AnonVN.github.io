const express = require("express");
const path = require('path');
const linh = express()
const port = 3000;

linh.use('/static', express.static(path.join(__dirname, 'views')))
console.log(__dirname);
linh.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/views/index.html'))
})
linh.get('/Contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, './static/views/Contact.html'))
})
linh.get('/services', (req, res, next) => {
    res.sendFile(path.join(__dirname, './static/views/services.html'))
})
linh.get('/Portfolio', (req, res, next) => {
    res.sendFile(path.join(__dirname, './static/views/Portfolio.html'))
})


linh.listen(port, () => {
    console.log(`listen on ${port}`);
})