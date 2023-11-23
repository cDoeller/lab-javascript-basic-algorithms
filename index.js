// Iteration 1: Names and Input

let hacker1 = "Christian";
let hacker2 = "Natalia";

console.log (`The driver's name is ${hacker1}`);
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// spaces

let hacker1Spaces = "";

for (let i = 0; i < hacker1.length; i++){
    if (i < hacker1.length-1){
        hacker1Spaces += hacker1 [i] + " ";
    } else {
        hacker1Spaces += hacker1 [i];
    }
}

console.log (hacker1Spaces.toUpperCase());


// reverse

let reverse = "";

for (let j = hacker2.length-1; j >= 0; j --){
    reverse += hacker2[j];
}

console.log (reverse);


// localeCompare

if (hacker1.localeCompare(hacker2)==1){
    console.log ("Yo, the navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2)==-1){
    console.log ("The driver's name goes first.");
} else {
    console.log ("What?! You both have the same name?");
}