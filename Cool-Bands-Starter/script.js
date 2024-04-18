// 1. Create an array of bands/artists (strings) named myBands. Be sure to use all lowercase letters.
// Not big music fans? Feel free to use the array supplied in your README!
let coolBands = ["capstan", "sza", "hot mulligan", "father john misty", "janelle monae", "talking heads", "chu kosaka", "tribal gaze", "mom jeans", "modern baseball", "knuckle puck", "neck deep", "gloss", "vince staples", "leonard cohen", "the beatles", "prince", "lil nas x"];


// 2a. Use the prompt() function to get the user's favorite band and store it in a variable called userChoice.

let userChoice = prompt("What is your favorite band?");

// 2b. Convert the user's answer to lowercase.

userChoice = userChoice.toLowerCase();


// 3a. Check the myBands array to see if it contains the user's answer.
if (!coolBands.includes(userChoice)) {
// 3b. If the user's band is not in the array, alert "Never heard of them!"
  alert("Never heard of them!");
  alert("I'll have to check them out!");
  coolBands.push(userChoice);
  console.log(coolBands);

} else {
// 3c. If the user's band is in the array, alert "OMG! I love them too!"
  // var index = coolBands.indexOf(userChoice);
  // if (coolBands.indexOf(userChoice) === -1) {
  alert("OMG! I love them too!");
  //}// this is needed to close the if statement
} // this is needed to close the else statement


// Hint: You'll need to research the indexOf() method and find out what it returns if the argument you supply isn't found in the target array.


// 🧠 LevelUp:
// If the user's band is not in the array, alert "I'll have to check them out!" and add the band to the array. Then console.log the array to confirm that the new item is present.
 
  // alert("I'll have to check them out!");
  // coolBands.push(userChoice);
  // console.log(coolBands);
  