#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstNumber" },
  { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform action ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplilcation", "Division"],
  },
]);

// Conditional operators
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Substraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Multiplilcation") {
  console.log(answer.firstNumber * answer.secondNumber);
} else {
  console.log("Please select a valid operator");
}

console.log("Credit to: Ahmer Shaikh");
