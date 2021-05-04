const express = require("express");
const cors = require("cors");
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("users").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

// insert new highscore
app.get("/insert/:name/:code", (request, response) => {
	console.log("Ny bruger: " + request.params.name + ", " + request.params.kode);

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: request.params.name, kode: request.params.kode};
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;

      console.log("Inserted: " + JSON.stringify(myobj))
      response.header("Access-Control-Allow-Origin", "*");
      response.json(myobj);
      db.close();
    });
  });
});

/*
https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
*/