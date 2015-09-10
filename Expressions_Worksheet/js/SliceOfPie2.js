
 /*Jeremy Martin
SDI Section 2
Slice Of Pie 2 Practice Assignment
09-08-2015
 */

 //Define the variables

 //Number of slices of pizza per pizza
 var slices = 8;

 //Number of people at the party
 var people = 21;

 //Number of pizzas ordered
 var pizzas = 12;

 //Calculate the number of slices of pizza per person
 var slicesRemaining = slices * pizzas % people;

 //Output how many slices of pizza each person ate.
 console.log("Sparky got to eat " + slicesRemaining + " slices of pizza at the party.");