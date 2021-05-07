const express = require("express");
const cors = require("cors");
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
var Userlogin = "";
var Userpass = "";
var Userbank = 0;

// Oprettelse af ny bruger
app.get("/insert/:name/:code", (request, response) => {
	console.log("Ny bruger: " + request.params.name + ", " + request.params.code);
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: request.params.name, code: request.params.code, bank: 100};
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;

      console.log("Inserted: " + JSON.stringify(myobj))
      response.header("Access-Control-Allow-Origin", "*");
      response.json(myobj);
      db.close();
    });
  });
});

// Hvor meget har man i banken
app.get("/Sebank", (request, response) => {
	console.log("balance for bruger: " + Userlogin);
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: Userlogin };
    dbo.collection("users").findOne(myobj, function(err, res) {
      if (err) throw err;

      console.log("Bank is: " + JSON.stringify(myobj.bank))
      response.header("Access-Control-Allow-Origin", "*");
      response.json(myobj.bank);
      db.close();
    });
  });
});

// Login
app.get("/Login/:name/:code", (request, response) => {
	console.log("balance for bruger: " + request.params.name);
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: request.params.name };
    dbo.collection("users").findOne(myobj, function(err, res) {
      if (err) throw err;

      //Ser om objektets navn og kode matcher
      if (myobj.code = request.params.code){
        console.log("login success")
        Userlogin = myobj.name;
        Userpass = myobj.code;
        Userbank = myobj.bank;
      } else {
        console.log("forkert, prøv igen")
      }
      response.header("Access-Control-Allow-Origin", "*");
      response.json(myobj);
      db.close();
    });
  });
});

// Update bank
app.get("/Update/:bank", (request, response) => {
	console.log("Update bank for: " + Userlogin);
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    
    // Når man har logget ind sætter vi Userlogin til det 'name' objektet har, dette værende for at få fat i objektet hurtigt.
    var myobj = { name: Userlogin };

    //Tager en intenger og sætter den i stedet for den anden intenger i bank
    var newvalues = { $set: {bank: request.params.bank } };
    
    //Updater databasen
    dbo.collection("users").updateOne(myobj, newvalues, function(err, res) {
      if (err) throw err;
    
    response.header("Access-Control-Allow-Origin", "*");
    response.json(myobj);
    db.close();
    });
  });
});

//finder alle brugere
app.get("/findAll", (request, response) => {
	console.log("finder brugere");

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("users").find({}).toArray(function(err, result) {
      if (err) throw err;

      console.log(result);
    });
  });
});

//fjerner brugere
app.get("/del/:name/:code", (request, response) => {
	console.log("slet");

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { name: require.params.name };
    
    if (myquery.code === require.params.code) {dbo.collection("customers").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log(myquery.name + "deleted");
      db.close();
    });
    } else {
      console.log("FEJL, ikke slettet")
      db.close();
    }
  });
});

const port = 5500;
app.listen(port, () => console.log("Listening on port " + port));

/*
https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
*/