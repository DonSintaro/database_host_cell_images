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

// app.post("/api/create/:name", function(req, res) {
//     let buffer = req.params.name;
//     console.log(buffer);

//     let cellLink = "gs://cell-image-project.appspot.com/Cells/Neutrophils/" + buffer +".jpg, neutrophil";

//     db.create(cellLink).then(function(){
//         res.send("Success");
//     });
// });

app.post("/api/create/:name", async function({body}, res) {
    
    let cellLink = "gs://cell-image-project.appspot.com/Cells/Neutrophils/" + body +".jpg, neutrophil";

    db.create(cellLink).then(function(){
        res.send("Success");
    });
});


app.post("/api/create/:id", async function({params, body}, res){
    
    let data = await books.deleteBook(params,body)
    res.send(data);
});

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });