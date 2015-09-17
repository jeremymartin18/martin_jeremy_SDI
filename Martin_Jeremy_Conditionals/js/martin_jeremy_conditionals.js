
 /*Jeremy Martin
SDI Section 2
Conditionals Assignment
09-14-2015
 */

 //alert("this is a test to see if connected");

/*
Carpet price calculator
 */

 //Ask the user what the length of the room is
 var length = prompt("Lets see how much it will cost to recarpet your room.\nWhat is the length in feet of the room to be carpeted?");

 //Validate that the value entered is a number and the prompt is not left blank. Otherwise output the value of the variable "length" to the console.
 if(isNaN(length) || length === ""){
     length = prompt("Please only enter a number and do not leave blank.\nWhat is the length in feet of the room to be carpeted?");
 }else{
     console.log("The length of the room is " + length + " sq. ft.");
 }

 //Ask the user what the width of the room is
 var width = prompt("What is the width in feet of the room to be carpeted?");

 //Validate that the value entered is a number and the prompt is not left blank. Otherwise output the value of the variable "width" to the console.
 if(isNaN(width) || width === ""){
     width = prompt("Please only enter a number and do not leave blank.\nWhat is the width in feet of the room to be carpeted?");
 }else{
     console.log("The width of the room is " + width + " sq. ft.");
 }

 //Ask the user what the regular price of the carpet is per square foot
 var regPrice = prompt("What is the regular price per square foot of the carpet?");

 //Validate that the value entered is a numberand the prompt is not left blank. Otherwise output the value of the variable "regPrice" to the console.
 if(isNaN(regPrice) || regPrice === ""){
     regPrice = prompt("Please only enter a number and do not leave blank.\nWhat is the regular price per square foot of the carpet?");
 }else{
     console.log("The regular price per square foot of the carpet is $" + regPrice);
 }

 //Ask the user what method of payment they will be using
 var methodOfPayment = prompt("What method of payment will you be using? (cash or credit)");

 //Validate that the user entered either "cash" or "credit". Otherwise output the value of the variable "methodOfPayment" to the console.
 if(methodOfPayment === !("cash") || methodOfPayment === !("credit")){
     methodOfPayment = prompt("Please enter either 'cash' or 'credit' as your method of payment");
 }else{
     console.log("The method of payment is " + methodOfPayment);
 }

 //Calculate total square footage of the room and assign it to a variable
 var totalSqFt = length * width;

 //Output the value of the variable 'totalSqFt' to the console.
 console.log("The total square footage of the room is " + totalSqFt + " sq. ft.");

 //Determine the discount based on the size of the room
 if(totalSqFt > 500){

 }else if(totalSqFt > 250){

 }else{

 }

 //Determine the discount based on the method of payment
