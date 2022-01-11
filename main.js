const flipSound = new Audio("flip.mp3");
let array = [];
let flip;
let cardNum = 0;// Index in array
let index = 0; // Z Index
let counter = 52;

for (i = 1; i < 53; i++) {
    array.push(i);
}

// Call Shuffle
const shuffle = () => {
    document.getElementById("butt").style.visibility = "hidden";
    cardNum = 0;
    counter = 52;
    index = 0;
    shuffleArray(array)
    flip = setInterval(flipC,700)
};


// Shuffle Cards in random array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


// Flipping Cards
function flipC() {
        counter -= 1; 
        document.getElementById("counter").innerHTML = "Cards Left: " + counter; // Cards Left
        index += 1; // Z Index
        flipSound.play()
        id = "card" + array[cardNum];
        console.log(id + " - Flipped")
        cardNum += 1;
        document.getElementById(id).style.top = "250px";
        document.getElementById(id).style.zIndex = index;

        if (counter == 0) {
            clearInterval(flip);
            cardNum = 52; // Just to remove first card
            document.getElementById("back").style.visibility = "hidden";
            setTimeout(function() {
                backInDeck = setInterval(backC, 100)
            }, 1000)
            index = 0;

        }
}

function backC() {
    counter += 1;
    document.getElementById("counter").innerHTML = "Cards Left: " + counter;
    cardNum -= 1;
    index += 1;
    
    if (counter == 52) {
        clearInterval(backInDeck)
        document.getElementById("butt").style.visibility = "visible";
        document.getElementById("back").style.visibility = "visible";
    }

    id = "card" + array[cardNum];
    console.log(id + " - Back")
    document.getElementById(id).style.top = "20px";
    document.getElementById(id).style.zIndex = index;

    

}