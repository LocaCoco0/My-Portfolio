console.log(openStations);
console.log(wishlist);

// ☠️ CAREFUL - THIS WILL CRASH YOUR BROWSER
// Should render all open stations to the page one by one
// Should render the last items in the array first
function addStations(stations) {
  for (let i = stations.length-1; i >= 0; i--) { // thank chatgbt
    addStationElement(stations[i]);
    console.log(stations[i]);
  }
}+
addStations(openStations)

// Should render all wishlist items to the page one at a time
function addWishlistItems(wishlist) {
  for (let i = 0; i < wishlist.length; i++) {
    addWishlistElement(wishlist[i]);
  }
  // TODO
  
}
addWishlistItems(wishlist);

// Should return an array of station strings that include the user's query
// This will automatically be called when a user clicks the search button
function filterByCity(query, stations) {
  let matches = stations.filter(station => station.toLowerCase().includes(query.toLowerCase()));
    return matches;
 // TODO 
  
}
