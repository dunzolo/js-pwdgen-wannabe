// 1 - Chiedere all'utente di inserire il sui nome
let name_user = prompt('Inserisci il tuo nome');
console.log(name_user);

// 2 - Chiedere all'utente di inserire il suo cognome
let lastname_user = prompt('Inserisci il tuo cognome');
console.log(lastname_user);

// 3 - Chiedere all'utente di inserire il suo colore preferito
let color_user = prompt('Inserisci il tuo colore preferito');
console.log(color_user);

// 4 - Concateno uno dopo l'altro i dati inseriti dall'utente aggiungendo alla fine il numero 21
let conc = `${name_user}${lastname_user}${color_user}${'21'}`;
console.log(conc);

//5 - Inserisco il valore ottenuto nell'HTML e lo visualizzo
document.getElementById('password').innerHTML = conc;
