let prompt = require("prompt-sync")();


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

if ((person1 - thesplit) < 0 ){
    // If less than Zero, the person is owed money
    p1_bill = Math.abs(person1 - thesplit);
    console.log (`person 1 owes: $${p1_bill}`);
}

else if ((person1 - thesplit) > 0 ){
    // if greater than zero, the person owes money
    p1_bill = person1 - thesplit;
    console.log(`person 1 is owed: $${p1_bill}`);
}

if ((person2 - thesplit) < 0 ){
    // If less than Zero, the person is owed money
    p2_bill = Math.abs(person2 - thesplit);
    console.log (`person 2 owes: $${p2_bill}`);

}

else if ((person2 - thesplit) > 0 ){
    // if greater than zero, the person owes money
    p2_bill = person2 - thesplit;
    console.log(`person 2 is owed: $${p2_bill}`);
}

if ((person3 - thesplit) < 0 ){
    // If less than Zero, the person is owed money
    p3_bill = Math.abs(person3 - thesplit);
    console.log(`person 3 owes: $${p3_bill}`);
}

else if ((person3 - thesplit) > 0 ){
    // if greater than zero, the person owes money
    p3_bill = person3 - thesplit;
    console.log(`person 3 is owed: $${p3_bill}`);
}




