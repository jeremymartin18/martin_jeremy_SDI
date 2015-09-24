
 /*Jeremy Martin
SDI Section 2
Stung Practice Assignment
09-22-2015
 */

/*
 It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

 Given:
 Victim’s weight (in pounds)

 Parameter(s) for function:
 Victim’s weight (in pounds)

 Return:
 Number of Bee stings

 Result to print to the console:
 “It takes X bee stings to kill this animal.
 */

 //delcare and define a variable to prompt the user for the weight of the animal
 var weight = prompt("Lets see how many bee stings it will take to kill an animal based on weight.\nWhat is the weight of the animal?");

 //declare and define a variable to hold the result of the function and that calls the function using the variable weight as the argument.
 var numBeeStings = calcNumBeeStings (weight);

 //create a function to calculate the total number of bee stings using the parameter w to input the weight of the animal.
 function calcNumBeeStings (w){

     //declare and define a variable to calculate the total number of bee stings based on the input of the user.
     var totalBeeStings = w * 8.666666667;

     //return the total number of bee stings back to the main code.
     return totalBeeStings;
 }

 console.log("It takes " + numBeeStings + " bee stings to kill this animal.");