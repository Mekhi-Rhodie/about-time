const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const firebase = require('firebase');
const PORT = 3000
const Event = require("./models/eventModel")
var bodyParser = require('body-parser');
//const app2 = firebase.initializeApp({ ... });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/app", function(req, res){
    res.sendFile(path.join(__dirname, "/public/about-time.html"))
});

mongoose.connect("mongodb://localhost:27017/userdb", { useNewUrlParser: true });

app.post("/submit", function(req, res) {
    Event.create(req.body)
      .then(function() {
        res.json();
      })
      .catch(function(err) {
        res.json(err);
      });
  });  

app.listen(PORT, function(){
    console.log("App listening on port Andre " + PORT)
});