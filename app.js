const express = require('express')
const app = express()
const port = process.env.PORT||3000
const path = require('path')
const chim = require('./Router/popcap.js')
const download = require('./Router/download.js')
// const bodyParser = require("body-parser");
const post = require('./Router/post.js')



app.use('/login',post)

app.use('/dragon/chim',chim)

app.use('/download',download )

app.use('/static',express.static(path.join(__dirname,'./public')))

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./views/testajax.html'))
})
app.get('/test',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./views/test.html'))
})
app.get('/index',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})

app.listen(port,()=>{
    console.log('listten me');
})

// app.set("views", path.resolve(__dirname, "views"));
// app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(routes);

// app.listen(3000);



