var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
var Name = "Noah   ";
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: Name};
  dbo.collection("users").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("document deleted");
    db.close();
  });
});