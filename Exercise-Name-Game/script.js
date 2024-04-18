ijnn let firstName = "Vanessa";
let middleName = "Rosas";
let lastName = "Buenosaires";

// concatenation 
let fullName = firstName + " " + middleName + " " + lastName;
// console.log("Hello " + fullName + "!");

// interpolation 
console.log(`Hello ${fullName}!`);

// length 
console.log(fullName.length);
console.log(`Your full name is ${fullName.length} characters long.`);

// index 
let initials = firstName[0] + middleName[0] + lastName[0];
console.log(`Your initials are ${initials}.`);

// slice
console.log("sup " + firstName.slice(0, 3) + "!");

// reverse 
console.log(firstName[7].toUpperCase+firstName[6]+firstName[5]+firstName[4]+firstName[3]+firstName[2]+firstName[1]+firstName[0].toLowerCase());




