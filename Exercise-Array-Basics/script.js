let favoriteShows = ["The Legend of Korra", "The White Lotus", "The Crown"]; 

console.log(favoriteShows);
favoriteShows.sort();
console.log(favoriteShows);
favoriteShows.push("Avatar The Last Airbender");
console.log(favoriteShows);
// let smallList = favoriteShows.slice(0, 3);
// console.log(smallList);
favoriteShows.splice(2, 1);
console.log(favoriteShows);