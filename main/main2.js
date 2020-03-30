// Gioco dei dadi
// 1 Generare numero random da 1 a 6, sia per pc che per giocatore

var user = Math.floor(Math.random() * 6) + 1;
console.log(user);

var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

var vincita;
var message;

if (vincita = user>computer) {
  message='Ha vinto il giocatore'
  console.log('Ha vinto il giocatore')
} 
else if (vincita = computer>user) {
  message='Ha vinto il computer'
  console.log('Ha vinto il computer')
}
else {
  message='Pareggio'
  console.log('Pareggio')
}

document.getElementById('message2').innerHTML=message;

// 2 Stabilire il vincitore in base a chi fa il punteggio piu alto