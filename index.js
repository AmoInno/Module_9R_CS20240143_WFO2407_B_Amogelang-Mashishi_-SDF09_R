let firstCard = 6
let secondCard = 10
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = "Do you want a new card? 🤔"
} else if (sum === 21){
    message = "Woohoo! You've got Blackjack! 😁"
    hasBlackJack = true;
}else {
    message = "You are out of the game! 😓"
    isAlive = false;
}

console.log(message)