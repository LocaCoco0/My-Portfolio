// write your code here
const gandalf = {
  name: "Gandalf",
  age: 11000,
  aliases: [
    "Greyhame",
    "Stormcrow",
    "Mithrandir"
  ],
  shallPass: function() {
    console.log("I am a servant of the secret fire, wielder of the flame of Anor. You cannot Pas! The dark fire will not avail you, flame of udun. Go back to the shadow! YOU SHALL NOT PASS!!! punk")
  }
}

// Accessing object properties with a dot 
console.log('My name is ${gandalf.name}');

// Accessing array items through the object 
console.log('I have more than
${gandalf.aliases.length} aliases.');

// Add a property to the existing object
gandalf.ring = "Narya";
console.log('My rings name is ${gandalf.ring}');

// Run a method from an object
gandalf.shallPass();

// Accessing object properties with bracket notation
console.log('My name is ${gandalf["name"]}')
