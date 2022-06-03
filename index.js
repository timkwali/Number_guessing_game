console.log("NUMBER GUESSING GAME!")
const username = prompt("Please enter your username")
console.log("=======\nLEVEL 1\n=======")
let limit = 2
let playerScore = 0

let userInput = prompt(`Guess a number between 1 and ${limit}`)
let random = getRandomNumber(limit)

while(userInput == random) {
  playerScore++
  limit++
  console.log(`Correct guess ${userInput}`)
  console.log(`${username} score: ${playerScore}`)
  console.log(`\n=======\nLEVEL ${limit - 1}\n=======`)
  userInput = prompt(`Guess a number between 1 and ${limit}`)
  random = getRandomNumber(limit)
}

console.log(`Wrong guess! Correct answer is ${random}`)
console.log(`\n*************\nFINAL SCORE ${playerScore}\n*************`)


function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1
}




