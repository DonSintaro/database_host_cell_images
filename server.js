const express = require('express');
const db = require("./db/db.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req,res){
    res.send("database server");
});

app.get("/api/awaken", function(req, res) {
    res.send("awake");
});


app.get("/api/create/:name", function(req, res) {
    let buffer = req.params.name;
    console.log(buffer);
    
    let cellLink = "gs://cell-image-project.appspot.com/Cells/Neutrophils/" + buffer +".jpg, neutrophil";

    db.create(cellLink).then(function(){
        res.send("Success");
    });
});


app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });