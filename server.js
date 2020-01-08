const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/insdex.html"));
});

app.get("/app", function(req, res){
    res.sendFile(path.join(__dirname, "/public/about-time.html"))
});

app.listen(PORT, function(){
    console.log("App listening on port Andre " + PORT)
});