let app = document.getElementById("app");

let message = document.createElement("h1");

let usr_msg = prompt("Dime tu nombre: ");

message.innerText = `Hola, ${usr_msg}!`;

app.appendChild(message);