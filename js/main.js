// Visualizzare in pagina 5 numeri casuali.
let randomNumbers = randomNumberGenerationRange (1, 99, 5);
let messageNumber = document.querySelector("h1");
messageNumber.innerHTML = randomNumbers;
console.log(randomNumbers);

// Dichiara la variabile che gestisce i secondi
let secondCount = 0;

// Prendi L'elemento da HTML
let secondTimer = document.getElementById("second");

// Da lì parte un timer di 30 secondi.
let timer = setInterval(function(){
    secondCount++;
    secondTimer.innerHTML = secondCount;
}, 1000);

// Dopo 30 secondi i numeri scompaiono
setTimeout(function(){
    messageNumber.classList.add("remove");
    secondTimer.classList.add("remove");
    clearInterval(timer);
}, 1000 * 30);


const listNumberUser = [];
setTimeout(function(){
    // e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    for (let i = 0; i < randomNumbers.length; i++){
        numberUser = parseInt(prompt("Inserisci uno alla volta i numeri che hai visto"));
        
        if (randomNumbers.includes(numberUser)) {
            // Se il numero è incluso, aggiungilo all'array correctNumbers
            listNumberUser.push(randomNumbers[i]);
        }
    }

    const resultMessage = document.getElementById('result');
    resultMessage.innerHTML = `Hai indovinato ${listNumberUser.length} numeri: ${listNumberUser}`;
}, 1000 * 31);



