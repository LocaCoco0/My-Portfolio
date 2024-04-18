function streetGreeting() {
  console.log("*head nod*");
}

streetGreeting();

function friendGreeting(friend) {
  console.log("Hey "+friend+"!");
}

friendGreeting("Tico");
friendGreeting("Kyser");

function awkwardGreeting(yourName, friendsName) {
  console.log(`Hey ${friendsName}, It's me, ${yourName}`);
}

awkwardGreeting("Vanessa", "Carla");