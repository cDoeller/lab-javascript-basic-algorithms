// Iteration 1: Names and Input

let hacker1 = "Christian";
let hacker2 = "Natalia";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// spaces

let hacker1Spaces = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i < hacker1.length - 1) {
    hacker1Spaces += hacker1[i] + " ";
  } else {
    hacker1Spaces += hacker1[i];
  }
}

console.log(hacker1Spaces.toUpperCase());

// trying another way

let hacker1SpacesV2 = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1SpacesV2 += hacker1[i] + " ";
}
console.log(hacker1SpacesV2.slice(0, -1).toUpperCase());

// reverse

let reverse = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  reverse += hacker2[j];
}

console.log(reverse);

// localeCompare

if (hacker1.toUpperCase().localeCompare(hacker2.toUpperCase()) == 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1.toUpperCase().localeCompare(hacker2.toUpperCase()) == -1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet erat at massa condimentum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque sed bibendum magna, sit amet efficitur enim. Proin iaculis justo at quam egestas consectetur. Nulla viverra lorem id purus tristique fermentum. Morbi nulla ligula, efficitur ut posuere et, venenatis et ex. Etiam sed tempor ex, quis commodo arcu.

Duis sed venenatis eros, nec finibus diam. Curabitur bibendum tellus sit amet venenatis mollis. Pellentesque feugiat augue molestie dolor ullamcorper, ut ultrices libero varius. Cras quis venenatis ligula. Sed non sapien sapien. Sed a nisi dignissim, viverra nulla in, convallis libero. Proin pharetra fringilla risus, in consequat orci scelerisque quis. Donec tincidunt varius lacinia. Sed eros ex, rhoncus vitae condimentum eget, venenatis in nunc. Aliquam erat volutpat. Morbi arcu orci, varius quis sagittis ut, mollis sed lacus. Sed et enim maximus, venenatis est id, posuere ipsum. Pellentesque id quam nunc. Fusce volutpat massa sed urna vestibulum, id commodo nisi accumsan. Etiam accumsan, urna eu aliquet ultrices, libero tortor laoreet lacus, vitae lacinia eros odio vitae est.

Proin congue, felis sit amet bibendum tincidunt, ligula magna varius arcu, sed condimentum velit arcu id dolor. Fusce tempus in magna in suscipit. Donec in tristique ex. In hac habitasse platea dictumst. Fusce velit magna, imperdiet ac accumsan sed, dapibus sed risus. Nam sagittis sapien mi, lacinia sagittis leo auctor in. Nunc volutpat varius nulla nec blandit. In sollicitudin, nibh vitae ornare hendrerit, leo risus venenatis odio, vel porta neque justo vel felis. Maecenas tortor nulla, finibus ac laoreet quis, rutrum ut eros. Maecenas at magna pretium, auctor est sit amet, scelerisque lacus. Nulla vel blandit tortor, vehicula rutrum lorem. Sed iaculis massa ac dolor suscipit, et rhoncus turpis imperdiet. Cras neque nisl, consectetur aliquet elementum vitae, euismod posuere magna. Pellentesque vehicula leo lorem, in vehicula nisi posuere at. Integer lobortis eros quis tellus viverra luctus. Pellentesque id turpis vitae ipsum lobortis imperdiet.

`;

let wordCount = 1; // set to 1, because " " always -behind- words, not before.
let numParagraphs = 3; // the number of paragraphs. their ends do not contain a " " behind the word

// 3 paragraphs means 2 times no " " at the end. Therefore -1
numParagraphs -= 1;

// count all " "
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordCount++;
  }
}
// add the missing 2 " "
wordCount += numParagraphs;
console.log(`the paragraphs contain ${wordCount} words.`);

// count "et"

let searchWord = " et ";
let searchWordCount = 0;

// count all " et "
for (let i = 0; i < longText.length; i++) {
  if (
    longText.substring(i, i + searchWord.length).toLowerCase() ===
    searchWord.toLowerCase()
  ) {
    searchWordCount++;
  }
}

console.log(
  `the paragraphs contain ${searchWordCount} times ${searchWord.slice(
    1,
    searchWord.length - 1
  )}`
);


// bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

// 1. remove all " " spaces
let phraseNoSpaces = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    // how to remove everything that is not a letter more reliably..?
  if (phraseToCheck[i] != " " && phraseToCheck[i] != `'` && phraseToCheck[i] != `,` && phraseToCheck[i] != `!`) {
    phraseNoSpaces += phraseToCheck[i];
  } else {
    continue;
  }
}
console.log(phraseNoSpaces);

// 2. divide phrase in half, one half in one variable

let firstHalf = "";
let secondHalf = "";

// if even number of letters
if (phraseNoSpaces.length % 2 == 0) {
  firstHalf = phraseNoSpaces.slice(0, phraseNoSpaces.length / 2);
  secondHalf = phraseNoSpaces.slice(phraseNoSpaces.length / 2);
} else {
  firstHalf = phraseNoSpaces.slice(0, phraseNoSpaces.length/2 + 0.5);
  secondHalf = phraseNoSpaces.slice(phraseNoSpaces.length / 2);
}
console.log(firstHalf, secondHalf);

// 3. reverse one and compare

let reverseHalf = "";

for (let j = secondHalf.length-1; j >= 0; j--) {
    reverseHalf += secondHalf[j];
}
console.log (reverseHalf);

if (firstHalf.toLowerCase() === reverseHalf.toLocaleLowerCase()){
    console.log ("yes, it is a palindrome!");
} else {
    console.log ("no palindrome.");
}