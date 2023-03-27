const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const _ = require('lodash');
const mongoose = require('mongoose');
const $ = require('jquery');

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

mongoose.connect("mongodb://localhost:27017/blogpostDB");


const blogpostsSchema = {
    title : String,
    content : String,
    date : Date,
    author : String,
    image : String
};

const Blogpost = mongoose.model("Blogpost", blogpostsSchema);


const directoriesSchema = {
    firstname : String,
    lastname : String,
    title : String,
    phone : String,
    email : String,
    image : String
};

const Directory = mongoose.model("Directory", directoriesSchema);

const gallerySchema = {
    image : String,
    text: String
};

const Gallery = mongoose.model("Gallery", gallerySchema);


const foldersSchema = {
    name : String,
    lastname : String,
    items : [directoriesSchema]
};

const Folder = mongoose.model("Folder", foldersSchema);



app.get("/", function(req,res){
    res.render("home");
});


app.get("/directory", function(req,res){
    Directory.find({}, function(err, founddirectories){ 
        res.render("directory", {dicts:founddirectories});
    });
});

app.get("/gallery", function(req,res){
    Gallery.find({},  function(err, foundimages){ 
        res.render("gallery", {images:foundimages});
    });
});

app.get("/admin", function(req,res){
    res.render("admin");
});

app.get("/createdirectory", function(req,res){
    res.render("createdirectory");
});

app.get("/addgallery", function(req,res){
    res.render("addgallery");
});

app.get("/blog", function(req,res){
    Blogpost.find({}, function(err, foundblogposts){ 
        const newDate = foundblogposts;
        // console.log(newDate[15].date);
        res.render("blog", {posts:foundblogposts, dates : newDate });
    
    }); 
});

app.get("/compose", function(req,res){
    res.render("compose");
});

// app.get("/:directoryfolder", function(req,res){
//    const createdFolder = req.params.directoryfolder;
//    Folder.findOne({name:createdFolder}, function(err,foundfolder){
//     if(!foundfolder){
//         const folder = new Folder({
//             name : createdFolder,
//             items : directoriesSchema
//            });
//            folder.save();
//     } else{
//         res.render("directory", {foldername: foundfolder.name, folderitems:foundfolder.items});
//     }
//    })
   
// });


app.post("/deletedirectory", function(req,res){
 const deletedItem = req.body.deleteDict;
 Directory.findByIdAndRemove(deletedItem, function(err){ 
    if(err){console.log(err);}
});
res.redirect("/directory");
});

app.post("/deletepost", function(req,res){
    const deletedItem = req.body.deletePost;
    Blogpost.findByIdAndRemove(deletedItem, function(err){ 
       if(err){console.log(err);}
       res.redirect("/blog");
   });
   
   });

   app.post("/deleteimage", function(req,res){
    const deletedItem = req.body.deleteimage;
    Gallery.findByIdAndRemove(deletedItem, function(err){ 
       if(err){console.log(err);}
       res.redirect("/gallery");
   });
   
   });

app.post("/compose", function(req,res){
    const {postImage} = req.files;
     postImage.mv (__dirname + "/public/uploads/" + postImage.name);

     if (!postImage) return res.sendStatus(400);

     // If does not have image mime type prevent from uploading
     if (/^postImage/.test(postImage.mimetype)) return res.sendStatus(400);
    

    const post = new Blogpost({ title : req.body.postTitle,
        content : req.body.postBody,
        date : req.body.postDate,
        author : req.body.postAuthor,
        image : postImage.name
    });
    
   
    post.save(function(err){
        if(!err){
            res.redirect("/blog");
        }
    });
});

app.post("/createdirectory", function(req,res){
    const {dictImage} = req.files;
     dictImage.mv (__dirname + "/public/dictimages/" + dictImage.name);

     if (!dictImage) return res.sendStatus(400);

     // If does not have image mime type prevent from uploading
     if (/^dictImage/.test(dictImage.mimetype)) return res.sendStatus(400);
    

    const dict = new Directory({ firstname : req.body.dictFirstName,
        lastname : req.body.dictLastName,
        title : req.body.dictPost,
        phone : req.body.dictPhone,
        email : req.body.dictEmail,
        image : dictImage.name
    });
    
   
    dict.save(function(err){
        if(!err){
            res.redirect("/directory");
        }
    });
});

app.post("/addgallery", function(req,res){
    const {galleryImage} = req.files;
     galleryImage.mv (__dirname + "/public/gallary/" + galleryImage.name);

     if (!galleryImage) return res.sendStatus(400);

     // If does not have image mime type prevent from uploading
     if (/^galleryImage/.test(galleryImage.mimetype)) return res.sendStatus(400);
    

    const pic = new Gallery({ 
        image : galleryImage.name,
        text: req.body.galleryDesc
    });
    
   
    pic.save(function(err){
        if(!err){
            res.redirect("/gallery");
        }
    });
});



app.get("/post/:postId", async function(req,res){
    const requestedPostid = req.params.postId;

    const post = await Blogpost.findById({_id : requestedPostid})
    
    res.render("post", {
        title : post.title,
        content : post.content,
        date : post.date,
        author : post.author,
        image : post.image
    });

});




app.listen("3000", function() {
    console.log("server started on port 3000");
});