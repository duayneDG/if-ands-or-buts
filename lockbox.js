let prompt = require("prompt-sync")()
/*
## `lock-box.js`

You've been contracted to write the software for a lock box. 

Write a program called `lock-box.js` that stores the pin code to the lock box in a variable at the top of your program (i.e.: `const pinCode = '1234';`). 

After that, use `prompt-sync` to prompt the user for the passcode. If the user gets the passcode exactly correct, log a success message containing the word, "success". If not, log a failure message containing the word, "failure".
*/

let pinCode = 1020;

let guessed_pinCode = Number(prompt("Please guess a passcode, do not excced 4 digits "))

if(guessed_pinCode < 1000 || guessed_pinCode > 9999){
    console.log("please enter a valid number")
    guessed_pinCode = Number(prompt("Please guess a passcode, do not excced 4 digits "))
}
if (guessed_pinCode !== pinCode ){
    console.log("You didn't crack this lock!! Try Again.")
}else{
    console.log("you cracked the pin, but I dont have any money... Sorry")
}


/*
## `bill-splitter.js`

You've once again been contracted to write a program, this time for an app that helps two people split a bill at a restaurant evenly.

Write a program called `bill-splitter.js` that prompts the user for how much Person 1 paid, then for how much Person 2 paid. It should then log out the message, 'Person 1 owes $_____' or 'Person 2 owes $_____' depending on who owes who.
*/

// let person1 = Number(prompt("Please enter how much you paid, Person 1 "));
// let person2 = Number(prompt("Please enter how much you paid, Person 2)"));

// let thesplit = (person1 + person2) /2;
// if ((person1 - thesplit) < 0 ){
//     let owed_amount = Math.abs(person1 - thesplit)
//     console.log (`Person 2 owes person 1 $${owed_amount}`)
// }

// if ((person1 - thesplit) > 0 ){
//     let owed_amount = Math.abs(person1 - thesplit)
//     console.log(`Person 1 owes person 2 $${owed_amount}`)
// }

/*
## Extra Credit: `triple-bill-splitter.js`

Write a new program that expands on `bill-splitter.js` this program should be able to split a bill between three people! Once again, prompt the user for how much each person paid. Then, log out messages indicating who needs to pay who. 
*/

let person1 = Number(prompt("Please enter how much you paid, Person 1 "));
let person2 = Number(prompt("Please enter how much you paid, Person 2)"));
let person3 = Number(prompt("Please enter how much you paid, Person 3)"));

let p1_bill = 0;
let p2_bill = 0;
let p3_bill = 0; 

let thesplit = (person1 + person2 + person3) /3;
// console.log(`The split ${thesplit}`)

if ((person1 - thesplit) < 0 ){
    // If less than Zero, the person is owed money
    p1_bill = Math.abs(person1 - thesplit)
    console.log (`person 1 owes: $${p1_bill}`)
}

else if ((person1 - thesplit) > 0 ){
    // if greater than zero, the person owes money
    p1_bill = person1 - thesplit;
    console.log(`person 1 is owed: $${p1_bill}`)
}

if ((person2 - thesplit) < 0 ){
    // If less than Zero, the person is owed money
    p2_bill = Math.abs(person2 - thesplit);
    console.log (`person 2 owes: $${p2_bill}`)

}

else if ((person2 - thesplit) > 0 ){
    // if greater than zero, the person owes money
    p2_bill = person2 - thesplit;
    console.log(`person 2 is owed: $${p2_bill}`)
}

if ((person3 - thesplit) < 0 ){
    // If less than Zero, the person is owed money
    p3_bill = Math.abs(person3 - thesplit);
    console.log(`person 3 owes: $${p3_bill}`)
}

else if ((person3 - thesplit) > 0 ){
    // if greater than zero, the person owes money
    p3_bill = person3 - thesplit;
    console.log(`person 3 is owed: $${p3_bill}`)
}







