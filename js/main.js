// Visualizzare in pagina 5 numeri casuali.
let randomNumber = randomNumberGenerationRange (1, 99, 5);
let messageNumber = document.querySelector("h1");
messageNumber.innerHTML = randomNumber;
console.log(randomNumber);

// Dichiara la variabile che gestisce i secondi
let secondCount = 0;

// Prendi L'elemeto da HTML
let secondTimer = document.getElementById("second");

// Da lì parte un timer di 30 secondi.
let timer = setInterval(function(){
    secondCount++
    secondTimer.innerHTML = secondCount;
}, 1000);

// Dopo 30 secondi i numeri scompaiono
setTimeout(function(){
    messageNumber.classList.add("remove");
    secondTimer.classList.add("remove");
    clearInterval(timer);
}, 30000);

// e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.