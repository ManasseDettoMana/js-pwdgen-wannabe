console.log("prova console");

var nome = prompt("Qual'è il tuo nome? ");
var cognome = prompt("Qual'è il tuo congnome? ");
var colorePreferito = prompt("Qual'è il tuo colore preferito? ");

document.getElementById("password").innerHTML = nome + cognome + colorePreferito + Math.floor(Math.random() * 101);

// potrei salvare tutto dentro una variabile ed assegnarla
// successivamente allo span
