
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
     //Output error message to console
     console.log("You did not enter the length properly!");
     //Reprompt user for length
     length = prompt("Please only enter a number and do not leave blank.\nWhat is the length in feet of the room to be carpeted?");
     //output the value of the variable "length" to the console.
     console.log("The length of the room is " + length + " sq. ft.");
 }else{
     //output the value of the variable "length" to the console.
     console.log("The length of the room is " + length + " sq. ft.");
 }

 //Ask the user what the width of the room is
 var width = prompt("What is the width in feet of the room to be carpeted?");

 //Validate that the value entered is a number and the prompt is not left blank. Otherwise output the value of the variable "width" to the console.
 if(isNaN(width) || width === ""){
     //Output error message to console
     console.log("You did not enter the width properly!");
     //Reprompt user for width
     width = prompt("Please only enter a number and do not leave blank.\nWhat is the width in feet of the room to be carpeted?");
     //Output the value of the variable 'width' to the console
     console.log("The width of the room is " + width + " sq. ft.");
 }else{
     //Output the value of the variable 'width' to the console
     console.log("The width of the room is " + width + " sq. ft.");
 }

 //Ask the user what the regular price of the carpet is per square foot
 var regPrice = prompt("What is the regular price per square foot of the carpet?");

 //Validate that the value entered is a numberand the prompt is not left blank. Otherwise output the value of the variable "regPrice" to the console.
 if(isNaN(regPrice) || regPrice === ""){
     //Output error message to console
     console.log("You did not enter the price properly!");
     //Reprompt user for price
     regPrice = prompt("Please only enter a number and do not leave blank.\nWhat is the regular price per square foot of the carpet?");
     //output the value of the variable "regPrice" to the console.
     console.log("The regular price per square foot of the carpet is $" + regPrice);
 }else{
     //output the value of the variable "regPrice" to the console.
     console.log("The regular price per square foot of the carpet is $" + regPrice);
 }

 //Ask the user what method of payment they will be using
 var methodOfPayment = prompt("What method of payment will you be using? (cash or credit)");

 //Validate that the user entered either "cash" or "credit". Otherwise output the value of the variable "methodOfPayment" to the console.
 if(methodOfPayment !== "cash" || methodOfPayment !== "credit"){
     //Output error message to console
     console.log("You did not enter the method of payment properly!");
     //Reprompt user for method of payment
     methodOfPayment = prompt("Please enter either 'cash' or 'credit' as your method of payment");
     //Output the value of the variable "methodOfPayment" to the console.
     console.log("The method of payment is " + methodOfPayment);
 }else{
     //Output the value of the variable "methodOfPayment" to the console.
     console.log("The method of payment is " + methodOfPayment);
 }

 //Calculate total square footage of the room and assign it to a variable
 var totalSqFt = length * width;

 //Output the value of the variable 'totalSqFt' to the console.
 console.log("The total square footage of the room is " + totalSqFt + " sq. ft.");

 //Determine the discount based on the size of the room
 if(totalSqFt > 500){
     //Set discount to 30% if size of room is greater than 500 sq.ft.
     var discount1 = 30;
 //Test the next option to determine the discount based on the size of the room
 }else if(totalSqFt > 250){
     //Set the discount to 15% if the size of the room is greater than 250 sq.ft. but less than 500.
     discount1 = 15;
 //Set the discount to 5% if the size of the room is less than 250 sq.ft.
 }else{
     discount1 = 5;
 }

 //Output the discount to the console
 console.log("Based on the size of the room the discount will be " + discount1 + "%");

 //Setup a variable for the second discount
 var discount2;

 //Determine the discount based on the method of payment
 (methodOfPayment === "cash") ? discount2 = 10 : discount2 = 5;

 //Output the second discount to the console
 console.log("Based on your method of payment the discount will be " + discount2 + "%");

 //Calculate what the total discount will be
 var totalDiscount = (discount1 + discount2) / 100 * regPrice;

 //Output the value of the variable 'totalDiscount' to the console
 console.log("The total discount received is $" +totalDiscount + " per sq. ft.");

 //Calculate what the price will be after the discount
 var discountPrice = regPrice - totalDiscount;

 //Output the value of the variable 'discountPrice' to the console
 console.log("The discounted price per sq. ft. is $" + discountPrice);

 //Calculate the price of carpert needed for the room after the discount
 var totalPrice = discountPrice * totalSqFt;

 //Output the value of the variable 'totalPrice' to the console
 console.log("The total price of the carpet is $" +totalPrice);

 //Alert the user what discounts they received, what their total discount was, and what the total price is.
 alert("You received a discount of " + discount1 + "% for the size of the room.\n You also recieved a discount of " + discount2 + "% for paying with " + methodOfPayment + ".\nYour total discount is $" + totalDiscount + ".\nThe total price for " + totalSqFt + " sq. ft. of carpet after your discount is $" + totalPrice + ".");

 /*
 Tested with input of 10 for length and width, .05 for price and cash as payment... output was

  The length of the room is 10 sq. ft.
  The width of the room is 10 sq. ft.
  The regular price per square foot of the carpet is $.05
  The method of payment is cash
  The total square footage of the room is 100 sq. ft.
  Based on the size of the room the discount will be 5%
  Based on your method of payment the discount will be 10%
  The total discount received is $0.0075 per sq. ft.
  The discounted price per sq. ft. is $0.0425
  The total price of the carpet is $4.25
  */

 /*
 Second test to test validation, I initially input 'hh' for all of the prompts to ensure that console messages appeared properly. I then entered 25 for length and width, 1.25 for price, and credit for payment method. below is the output in the console

  You did not enter the length properly!
  The length of the room is 25 sq. ft.
  You did not enter the width properly!
  The width of the room is 25 sq. ft.
  You did not enter the price properly!
  The regular price per square foot of the carpet is $1.25
  You did not enter the method of payment properly!
  The method of payment is credit
  The total square footage of the room is 625 sq. ft.
  Based on the size of the room the discount will be 30%
  Based on your method of payment the discount will be 5%
  The total discount received is $0.4375 per sq. ft.
  The discounted price per sq. ft. is $0.8125
  The total price of the carpet is $507.8125

  All calculations and messages are working as designed.
  */