/* The following function will run every time the dark mode button is clicked. */

function toggleDarkMode() {
  // Sanity check with a console log
  console.log("yooo")
  // Target the elements
  const body = 
document.querySelector("body")

  const darkModeButton = 
document.querySelector("#dark-mode-button");
  // Toggle the dark classes on and off 

  body.classList.toggle("dark");
  // conditionally render the button the text 
  if (body.classList.contains("dark")) {
    darkModeButton.innerHTML = "LightMode"
  } else {
    darkModeButton.innerText = "DarkMode"
  }
}