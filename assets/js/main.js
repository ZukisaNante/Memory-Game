/* //Declaring variables
var cards_memory = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
var values_memory = [];
var tile_id_memory = [];
var flip_tiles = 0;
//Defining an array to flip th cards
Array.prototype.tile_memory_shuffle = function() {
        var i = this.length,
            j, temp;
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
        }
    }
    // Generate a new card by flipping the open back
function new_Card() {
    flip_tiles = 0;
    var output = "";
    cards_memory.tile_memory_shuffle();
    for (var i = 0; i < cards_memory.length; i++) {
        output += '<div id = "tile_' + i + '" onclick = "memoryFlipTile(this,\'' + cards_memory[i] + '\')"> </div>';
    }
    document.getElementById('memory_board').innerHTML = output;
} */

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
    firstCard.remove.addEventListener('click', flipCard);
    secondCard.remove.addEventListener('click', flipCard);

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
        let randomPos = Math.floor(Math.random() * 30); //Math.floor for integer
        card.getElementsByClassName.randomPos;
    })
}());
//listen to detect the click event
cards.forEach(card => card.addEventListener('click', flipCard));