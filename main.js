#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = 27;
const answer = await inquirer.prompt([
    { name: "userguessedNumber",
        type: "number",
        message: "please Guess a Number between 1-30."
    },
]);
if (answer.userguessedNumber === randomNumber) {
    console.log("congragulation! you gussed right number.");
}
else {
    console.log("you guessed wrong number.");
}
