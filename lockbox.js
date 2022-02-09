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
}
else{
    console.log("you cracked the pin, but I dont have any money... Sorry")
};






