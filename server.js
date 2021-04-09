const express = require("express");
const cors = require("cors");
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("brugere").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

// insert new highscore
app.get("/insert/:name/:kode", (request, response) => {
	console.log("Ny bruger: " + request.params.name + ", " + request.params.kode);

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: request.params.name, kode: request.params.kode};
    dbo.collection("brugere").insertOne(myobj, function(err, res) {
      if (err) throw err;

      console.log("Inserted: " + JSON.stringify(myobj))
      response.header("Access-Control-Allow-Origin", "*");
      response.json(myobj);
      db.close();
    });
  });
});