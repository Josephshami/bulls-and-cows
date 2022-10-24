// // Bulls and Cows
// // Get library for user input
// // we need to keep the next line, so we can prompt the user for input
// const prompt = require("prompt-sync")({ sigint: true });

// // storing variables

// // storing variables
// // storing variables
// let rules = `One of the players comes up with a secret number, and the other player tries to guess it.
// The secret number must consist of 4 digits and each digit must be **unique**.
// For example:
// - 1112 would **not** be an acceptable secret number
// - 1234 on the other hand is an acceptable value for the secret number, since each digit is unique
// After each guess, the player will get a hint to help them guess better next time around.
// The hint tells the player how many bulls and how many cows there were. What are bulls and cows?
// - If there are any matching digits and they are in their right positions, they are counted as *"bulls"*.
// - If in different positions, they are counted as *"cows"*.
// For example, with a secret number 4271:
//     Player's try: 1234    
//     Hint: 1 bull and 2 cows`;

// let level = "";
// let name = prompt("would you like to tell me  your name:  ?   other wise you can press enter to play as stranger :");

// //1st function generate a random number without repetitive number the length of the number is given from the user

// function getrandomNumber(level) { // this function will be used on line number 126 / play the Game
//     let numberPick = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // this is the collection of the  random numbers that the user will enter
//     return numberPick
//         .sort(() => Math.random() - 0) //sort() method sorts the elements of an array in place and returns the sorted array.
//         .join("") //returns a new string by concatenating
//         .slice(0, level); //returns a shallow copy of a portion of an array into a new array object selected from 
// }
// // 7th function  pass as parameter the level of the user every time the while loop runs it count as an attempt

// function playTheGame(level) {
//     let secretNumber = getrandomNumber(level);
//     let attempts = 0;
//     console.log("");
//     while (true) {
//         attempts++;
//         guess = prompt("Number: ");
//         // if the guess is the same number as the secretNumber then you won message will be print and also the attempts
//         if (secretNumber === guess) {
//             console.log(
//                 attempts === 1
//                     ? `you won at your first attempt well done ${name}`
//                     : `You won after ${attempts} attempts very well done ${name} `
//             );
//             break;
//         }
//         // calling the function that check for the user input if follow the rules of the game
//         if (!validGuess(guess, secretNumber)) {
//             continue;
//         }
//         // cows it will be right number // bulls it will be right posoiton
//         let cows = 0;
//         let bulls = 0;
//         for (let i = 0; i < secretNumber.length; i++) {
//             for (let j = 0; j < guess.length; j++) {
//                 if (secretNumber[i] === guess[j]) {
//                     if (i === j) {
//                         bulls++;
//                     } else {
//                         cows++;
//                     }
//                 } else continue;
//             }
//         }
//         if (bulls === 0 && cows === 0) {
//             console.log("");
//         }
//         console.log(
//             cows === 1 ? `You found ${cows} cow &&` : `You found ${cows} cows &&`,
//             bulls === 1 ? `You found ${bulls} bull` : `You found ${bulls} bulls `
//         );

//     }
// }
// ///     Extra part
// // 2nd function specifies the level of the game the level value will be used in the 1st function
// function selcet() {
//     level = prompt("How many numbers would you like to gueess ? from 1 / 9 :  ");
//     if (level.toLowerCase() === "1") {
//         level = 1;
//         console.log(`So easy level then guess a ${level} digit number!!Good luck ${name}`);
//     } else if (level.toLowerCase() === "2") {
//         level = 2;
//         console.log(`a bit more difficult level then guess a ${level} digit number!!Good luck ${name}`);
//     } else if (level.toLowerCase() === "3") {
//         level = 3;
//         console.log(`a bit more difficult then guess a ${level} digit number!!Good luck ${name}`);
//     } else if (level.toLowerCase() === "4") {
//         level = 4;
//         console.log(`a bit more difficult then guess a ${level} digit number!!Good luck ${name}`);
//     } else if (level.toLowerCase() === "5") {
//         level = 5;
//         console.log(`So medium level then guess a ${level} digit number!!Good luck ${name}`);
//     } else if (level.toLowerCase() === "6") {
//         level = 6;
//         console.log(`a bit more difficult then guess a ${level} digit number!!Good luck ${name}`);
//     } else if (level.toLowerCase() === "7") {
//         level = 7;
//         console.log(`a bit more difficult then guess a ${level} digit number!!Good luck ${name}`);
//     } else if (level.toLowerCase() === "8") {
//         level = 8;
//         console.log(`a bit more difficult then guess a ${level} digit number!!Good luck ${name}`);
//     } else if (level.toLowerCase() === "9") {
//         level = 9;
//         console.log(`So extreme level then guess a ${level} digit number!!you are brave ${name}`);
//     } else {
//         level = false;
//         console.log(
//             "the level should be: from 1 to / 9 , 1 is 1 digit number and as you go upper it will become diffcult!"
//         );
//     }
//     return level;
// }

// // 3rd function will ask the user if knows the rules

// function askForTheRules() {
//     let question = prompt(`Do you know the rules of the game ${name} Y/N: `);
//     console.clear(); // The console.clear() method clears the console if the environment allows it.
//     if (question.toUpperCase() === "N") {
//         console.log(`${rules}Let´s go ${name}`);
//     } else {
//         console.log(`Let's go ${name}`);
//     }
// }



// // function number 4 to play again
// function playAgain() {
//     let playAgainTheGame = "";
//     while (
//         !(
//             playAgainTheGame.toUpperCase() === "Y" || // to Uppercase it wonÄt be matter if y is small or big
//             playAgainTheGame.toUpperCase() === "N"
//         )
//     ) {
//         playAgainTheGame = prompt("Do you want to play again? Y/N: ");
//         if (playAgainTheGame.toUpperCase() === "Y") {
//             return start();
//         } else if (playAgainTheGame.toUpperCase() === "N") {
//             console.log(` Thanks for playing ${name} `);
//             return
//         } else {
//             console.log(
//                 `Please check the input for Y for yes and N for no,any other input is not valid `
//             );
//         }

//     }

// }

// // 5th if the number repetitive and if the numbers fits with a choosen selcet()


// function validGuess(guess, randomNumber) {
//     let uniqe = guess.split("").sort((a, b) => a - b);
//     let duppel = false;
//     for (let k = 0; k < uniqe.length - 1; k++) {
//         if (uniqe[k] === uniqe[k + 1]) {
//             duppel = true;
//         }
//     }
//     if (duppel === true) {
//         console.log("Check your number!!Remember each number should be unique");
//         return false;
//     }
//     if (randomNumber.length !== guess.length) {
//         console.log(`Not valid number,you need ${level} digit number!!!Let's go ${name}`);
//         return false;
//     }
//     return true;
// }


// // calling the functions and start the game
// function start() {

//     let level = selcet();
//     while (level === false) {
//         level = selcet();
//     }
//     playTheGame(level);
//     playAgain();

// }
// askForTheRules();

// start();








const animal = {
    type: "cat",
    name: "animal",
    color: "black",
};

console.log(Object.keys(animal))