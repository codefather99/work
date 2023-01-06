const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req,res){
    res.render("home");
});

app.get("/about", function(req,res){
    res.render("about");
});

app.get("/blog", function(req,res){
    res.render("blog");
});


app.get("/post", function(req,res){
        res.render("post");
});






app.listen("3000", function() {
    console.log("server started on port 3000");
});