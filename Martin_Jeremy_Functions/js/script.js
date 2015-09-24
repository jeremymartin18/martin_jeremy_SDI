
 /*Jeremy Martin
SDI Section 2
Functions Assignment - Pool Volume/Gallons Calculator
09-23-2015
 */

 //alert ("this is a test to see if connected.");

 //Declare and define a variable to prompt the user for the length of the pool
 var length = prompt("Lets find out how many gallons of water a pool will hold.\nWhat is the length of the pool rounded to the nearest foot?");

 //Validate that the user did not leave the prompt blank and that the input is a number
 while(length === "" || isNaN(length)){

     //Test if prompt is left blank
     if(length === ""){

         //Reprompt the user and remind them to not leave it blank
         length = prompt("Please do not leave this blank.\nWhat is the length of the pool rounded to the nearest foot?");

         //Test if prompt is not a number
     }else if(isNaN(length)){

         //Reprompt the user and remind them to only enter a number.
         length = prompt("Please only enter a number.\nWhat is the length of the pool rounded to the nearest foot?");
     }
 }

 //Declare and define a variable to prompt the user for the width of the pool
 var width = prompt("What is the width of the pool rounded to the nearest foot?");

 //Validate that the user did not leave the prompt blank and that the input is a number
 while(width === "" || isNaN(width)){

     //Test if prompt is left blank
     if(width === ""){

         //Reprompt the user and remind them to not leave it blank
         width = prompt("Please do not leave this blank.\nWhat is the width of the pool rounded to the nearest foot?");

         //Test if prompt is not a number
     }else if(isNaN(width)){

         //Reprompt the user and remind them to only enter a number.
         width = prompt("Please only enter a number.\nWhat is the width of the pool rounded to the nearest foot?");
     }
 }


 //Declare and define a variable to prompt the user for the average depth of the pool
 var depth = prompt("What is the average depth of the pool rounded to the nearest foot?");

 //Validate that the user did not leave the prompt blank and that the input is a number
 while(depth === "" || isNaN(depth)){

     //Test if prompt is left blank
     if(depth === ""){

         //Reprompt the user and remind them to not leave it blank
         depth = prompt("Please do not leave this blank.\nWhat is the depth of the pool rounded to the nearest foot?");

         //Test if prompt is not a number
     }else if(isNaN(depth)){

         //Reprompt the user and remind them to only enter a number.
         depth = prompt("Please only enter a number.\nWhat is the depth of the pool rounded to the nearest foot?");
     }
 }

 //Declare a variable that will call the function to action and store the output of the variable.
 //Will use the input from the user for the variables length, width, and depth as the arguments
 var totalVolume = volCalc (length, width, depth);

 //Setup the function, name it, and define what will be used as the parameters for the arguments.
 function volCalc (l, w, d){

     //Declare and define a variable to hold the calculated volume
     var volume = l * w * d;

     //Return the output of the function back in to the main code and have it stored in the "totalVolume" variable.
     return volume;
 }

 //Output to the user what the total volume of the pool is in cubic feet.
 console.log("The volume of the pool in cubic feet is " + totalVolume + " cubic feet. \nNow let's figure out how many gallons of water is needed to fill that.");

 //Setup the anonymous function with a v as the parameter
 var galCalc = function (v){

     //Declare and define a variable to hold the calculated total number of gallons needed.
     var gallons = v * 7.5;

     //Return the output of the function back in to the main code and have it stored in the "totalGallons" variable.
     return gallons;
 };

 //Declare a variable that will call the function to action and store the output of the variable
 var totalGallons = galCalc(totalVolume);

 //Output to the user what the total number of gallons needed to fill the pool.
 console.log("The total number of gallons of water needed to fill the pool is " + totalGallons + ".")