//Declaring variables
const cards = document.querySelectorAll('.flip-card-inner');
let hasFlipped = false; //verify if the card has flipped or not
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; // avoid cards to remain flipped
    //this keyword refers to the object it belongs to. 
    //this refers to the global object.
    this.classList.add('flip');
    //to verify if card has flipped using the let variables
    if (!hasFlipped) {
        //firstCard
        hasFlipped = true;
        firstCard = this;
        return; //if it's true will stop the execution here
    }
    //second click
    secondCard = this;

    checkForMatch();
}

//checking if cards do match or not
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards(); //conditional (ternary) operator used for if else
}
// Disable cards function
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
//not-flipped function
function unflipCards() {
    lockBoard = true;
    //if they don't match flip/hide back side again
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false; //make sure that you can't click any card without confirming setTimeout()
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlipped, lockBoard] = [false, false]; //using ES6 assignment
    [firstCard, secondCard] = [null, null];
}
//Shuffling
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12); //Math.floor for integer
        card.style.order = randomPos;

    })
}());
//listen to detect the click event
cards.forEach(card => card.addEventListener('click', flipCard));