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
let firstCard, secondCard;

function flipCard() {
    console.log(this)
    this.classList.add('flip');
    //to verify if card has flipped using the let variables
    if (!hasFlipped) {
        //firstCard
        hasFlipped = true;
        firstCard = this;
    } else {
        hasFlipped = false;
        secondCard = this;
    }
}
cards.forEach(card => card.addEventListener('click', flipCard)); //listen to detect the click event