const express = require('express');
const session = require('express-session');
//const MongoStore = require('connect-mongo')(session);
//const mongoose = require('mongoose');
const path = require('path');
const app = express();
//const firebase = require('firebase');
const PORT = 3000
const bodyParser = require('body-parser');
//const interact = require('interactjs');
//const app2 = firebase.initializeApp({ ... });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/app", function(req, res){
    res.sendFile(path.join(__dirname, "/public/about-time.html"))
});

app.listen(PORT, function(){
    console.log("App listening on port Andre " + PORT)
});