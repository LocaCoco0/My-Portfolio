General to dos:
  * We need the day of the week (day code) to determine which flavor should be displayed
  * create an onClick to call the function
  * loop through the array of days to find the appropriate flavor
  * replace place holder image to reveal the flavor picture
  * Update the cupcake name for the correct flavor for the day


Psuedocode:
1. Clicking on the placeholder img calls another non-existent function (ex. showFlavorOfDay)
     * Write the function to determine the day and store the associated flavor
2. We will run the findFlavorObject function to determine what today is and which flavor is assigned
   * loop to determine which flavor for which day it is
   * store that flavor as a variable
   * test our code!
3. Use DOM manipulation to update the image to the appropriate flavor
   * target the img tag (id: "featured-cupcake-img") to update the img src with the flavor for the day
   * call new image in place of the placeholder
4. Update the flavor name
   * update the text of the strong element to refelct the correct flavor's name (id: "featured-cupcake-name")