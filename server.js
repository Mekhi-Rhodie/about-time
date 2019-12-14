const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const firebase = require('firebase');
//const app2 = firebase.initializeApp({ ... });
const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/app", function(req, res){
    res.sendFile(path.join(__dirname, "/public/about-time.html"))
});

/*app.use(session({
    secret: 'foo',
    store: new MongoStore(options)
}));*/

mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });

app.post("/submit", function(req, res) {
    User.create(req.body)
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  });  
app.listen(PORT, function(){
    console.log("App listening on port Andre " + PORT)
});