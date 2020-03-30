// Cerca in un Array

// 1 Chiedi all'utente la sua mail 

var list = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
console.table(list);

var userMail = prompt('Inserisci la tua mail').toLowerCase();
var userFound = false;
var message;


// 2 Controlla che sia nella lista di chi può accedere

for (var i = 0; i < list.length; i++) {
    var item = list[i];
    console.log(userMail, item)
    if (userMail === item) {
      userFound = true;
      
    }
}

// Messaggio

if (userFound == true) {
  console.log('Utente trovato')
  message= 'Utente trovato';
} else {
  console.log('Utente non trovato')
  message= 'Utente non trovato';
}

document.getElementById('message').innerHTML=message;
