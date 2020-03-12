const express = require("express");
const path = require('path');
const app = express()
const port = 3000;
const apiRouter = require('./routes/api');

const bodyPaser = require("body-parser")
app.use(bodyPaser.urlencoded({extended:false}))
app.use(bodyPaser.json())

const passport = require('passport'),
FacebookStrategy = require('passport-facebook').Strategy;

app.use(passport.initialize());


passport.use(new FacebookStrategy({
    clientID: '2679285842308625',
    clientSecret:'9949:5802f5becbcf006eca0c14865c3',
    callbackURL: "https://3d7bd8ff.ngrok.io/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   console.log('get ok');
      done(null, profile);
  }
));


passport.serializeUser(function  (user , done) {
    console.log('serializeUser', user);
    done(null,user)
})

passport.deserializeUser(function  (id, done) {
    console.log('deserializeUser', user);
    done(null,user)
});



app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/index',
                                      failureRedirect: '/' }));


app.use('/api', apiRouter);
app.use('/static', express.static(path.join(__dirname, 'public')))
console.log(__dirname);
app.get('/index', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})
app.get('/Contact', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/Contact.html'))
})
app.get('/services', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/services.html'))
})
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.get('/dangky', (req, res, next) => {
    res.sendFile(path.join(__dirname, './views/dangky.html'))
})


app.listen(port, () => {
    console.log(`listen on ${port}`);
})