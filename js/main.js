// Visualizzare in pagina 5 numeri casuali.
let randomNumber = randomNumberGenerationRange (1, 99, 5);
let messageNumber = document.querySelector("h1");
messageNumber.innerHTML = randomNumber;
console.log(randomNumber);

// Da lì parte un timer di 30 secondi.

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.