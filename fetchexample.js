let url = "mongodb://localhost:27017/";

GetUser = Userlog;
Bankupdate = 0;

//ny bruger
function insert() {
  fetch(url + "/insert/" + prompt("name") + "/" + prompt("code"))
  .then(response => response.json())
  .then(data => alert("ny bruger" + JSON.stringify(data)));
  console.log(data);
}

//Login af bruger
function Login() {
  fetch(url + "/insert/" + prompt("name") + "/" + prompt("code"))
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

//Finder alle brugere (Admin ting)
function findAll() {
  fetch(url + "/findAll")
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

//Fjerner bruger
function Fjern() {
  fetch(url + "/delete/" + prompt("name") + "/" + prompt("code"))
  .then(response => response.json())
  .then(data => alert("Deleted: " + JSON.stringify(data)));
}

//Opdatere banken
function update() {
  fetch(url + "/update/" + Bankupdate)
  .then(response => response.json())
  .then(data => alert("Updated score: " + JSON.stringify(data)));
}

//Opdatere banken
function Bankinfo() {
  fetch(url + "/Sebank/")
  .then(response => response.json())
  .then(data => alert("bank: " + JSON.stringify(data)));
}

