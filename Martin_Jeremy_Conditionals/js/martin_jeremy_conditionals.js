
 /*Jeremy Martin
SDI Section 2
Conditionals Assignment
09-14-2015
 */

 //alert("this is a test to see if connected");

/*
Meat Temperature Calculator

Ground Beef 160
Fresh Beef 145
Poultry 165
Fish 145 OR clear flesh
 */

 //Ask the user what type of meat they are cooking
 var meatType = prompt("Let's make sure your meat is cooked to the proper temperature.\nWhat type of meat are you cooking? \n ground beef, fresh beef, poultry, or fish");

 //Test to make sure the user did not leave the prompt blank
 if(meatType === ""){
     //Prompt the user to enter what type of meat they are cooking.
     prompt("Please do not leave this blank.\nWhat type of meat are you cooking? \n ground beef, fresh beef, poultry, or fish");
 }

 //display variable in console
 console.log(" The meat type is " + meatType);

 //Ask the user what temperature the meat is currently at.
 var currentTemp = prompt("Please enter the current temperature of the meat.");

 //Test to ensure the entered value is a number
 if(isNaN(currentTemp)){
     //Reprompt the user to enter the temperature the meat is currently at.
     currentTemp = prompt("Please only enter a number.\nPlease enter the current temperature of the meat.");
 }

 //display variable in console
 console.log("The current temp of the meat is " + currentTemp);

 //Prompt user if flesh color of fish is clear or not
 if(meatType === "fish"){
     var fishFlesh = prompt("Is the color of the flesh clear? (yes or no)");

     //Reprompt user to enter yes or not for answer.
     if(fishFlesh === !("yes") || !("no")){
         fishFlesh = prompt("Please only enter 'yes' or 'no'. \nIs the color of the flesh clear? (yes or no)");
     }
 }

 //display the variable in console
 console.log("The color of the fish flesh is " + fishFlesh);

 
