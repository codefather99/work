const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fileUpload = require("express-fileupload");
const _ = require('lodash');
const mongoose = require('mongoose');

const app = express();


app.use(fileUpload(
    {
        limits: {
            fileSize: 10000000, // prevents image file from being more than 10MB
        },
        abortOnLimit: true,
    }
));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/blogpostDB", {useNewUrlParser: true});
mongoose.set('strictQuery', true);

const blogpostsSchema = {
    name : String
};

const Blogpost = mongoose.model("Blogpost", blogpostsSchema)

const item1 = {
    name : "bola"
};
const item2 = {
    name : "tinubu"
}

let posts = [];
let images =[];

Blogpost.insertMany(posts, function(err){
    if(err) {console.log(err);} 
    else{console.log("successfully added to database");}
})





app.get("/", function(req,res){
    res.render("home");
});

app.get("/about", function(req,res){
    res.render("about");
});

app.get("/blog", function(req,res){
    Blogpost.find({}, function(err, foundblogpost){
        console.log(foundblogpost);
    });
    res.render("blog", {posts:posts, images:images});
    // console.log(posts[0].image.name);
});

app.get("/debug", function(req,res){
    res.render("debug");
});




app.get("/posts/:postName", function(req,res){
    const requestedTitle = _.lowerCase(req.params.postName);

    posts.forEach(function(post){
        const storedTitle = _.lowerCase(post.title);

        if (storedTitle === requestedTitle){
            console.log('success');
            res.render("debug", {
               
            });
        }
    });   
});


app.get("/compose", function(req,res){
    res.render("compose");
});


app.post("/compose", function(req,res){
    const {postImage} = req.files;
     postImage.mv (__dirname + "/public/uploads/" + postImage.name);

     if (!postImage) return res.sendStatus(400);

     // If does not have image mime type prevent from uploading
     if (/^postImage/.test(postImage.mimetype)) return res.sendStatus(400);
    
    const post = {
        title : req.body.postTitle,
        content : req.body.postBody,
        date : req.body.postDate,
        author : req.body.postAuthor,
        image : postImage
    };
    

    posts.push(post);
    images.push(post.image);
   
    res.redirect("/blog");
});

app.post("/upload", function(req,res){
    

    console.log(postImage);
    
});



app.listen("3000", function() {
    console.log("server started on port 3000");
});