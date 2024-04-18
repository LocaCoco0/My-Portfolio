/* 
	Using a single for loop, write a launch countdown that outputs the following:

	30 seconds until launch.
	20 seconds until launch.
	10 seconds until launch.
	5
	4
	3
	2
	1
	Liftoff!

	Hint: You’ll need to use if statements within your for loop to change the output based on the loop control variable.
*/

let count = 1

while (count <= 30) {
  if ((count % 10 == 0 && count != 0)
) {
    console.log(count + " seconds until launch.")
 } else if (count == 30) {
    console.log("Liftoff!")
 } else if (count == 1) {
    console.log(count + " seconds until launch.")
 } else {
    console.log(count + " seconds until launch.")
 }

  count--;
}
