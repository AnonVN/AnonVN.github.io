const express = require("express");
const path = require('path');
const app = express()
const port = 3000;


app.use('/static', express.static(path.join(__dirname, 'public')))
console.log(__dirname);
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})


app.listen(port, () => {
    console.log(`listen on ${port}`);
})