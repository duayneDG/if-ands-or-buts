let prompt = require("prompt-sync")()

/*
## `bill-splitter.js`

You've once again been contracted to write a program, this time for an app that helps two people split a bill at a restaurant evenly.

Write a program called `bill-splitter.js` that prompts the user for how much Person 1 paid, then for how much Person 2 paid. It should then log out the message, 'Person 1 owes $_____' or 'Person 2 owes $_____' depending on who owes who.
*/

let person1 = Number(prompt("Please enter how much you paid, Person 1 "));
let person2 = Number(prompt("Please enter how much you paid, Person 2)"));

let thesplit = (person1 + person2) /2;
if ((person1 - thesplit) < 0 ){
    let owed_amount = Math.abs(person1 - thesplit)
    console.log (`Person 2 owes person 1 $${owed_amount}`)
}

if ((person1 - thesplit) > 0 ){
    let owed_amount = Math.abs(person1 - thesplit)
    console.log(`Person 1 owes person 2 $${owed_amount}`)
}