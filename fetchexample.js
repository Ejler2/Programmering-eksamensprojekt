let url = "mongodb://localhost:27017/";

function insert() {
  fetch(url + "/insert/" + prompt("name") + "/" + prompt("code"))
  .then(response => response.json())
  .then(data => alert("ny bruger" + JSON.stringify(data)));
  console.log(prompt("name") + " " + prompt("code"));
}

function findAll() {
  fetch(url + "/findAll")
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data)));
}

function del() {
  fetch(url + "/delete/" + prompt("Name"))
  .then(response => response.json())
  .then(data => alert("Deleted: " + JSON.stringify(data)));
}

function update() {
  fetch(url + "/update/" + prompt("Name") + "/" + prompt("Score"))
  .then(response => response.json())
  .then(data => alert("Updated score: " + JSON.stringify(data)));
}
