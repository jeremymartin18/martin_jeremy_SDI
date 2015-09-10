
 /*Jeremy Martin
SDI Section 2
Discounts Practice Assignment
09-08-2015
 */

 //Define the variables
 var weekly = [39.52, 143.89, 224.99, 91.65, 111.23];

 //Calculate the total spent on groceries over the 5 weeks
 var total = weekly[0] + weekly[1] + weekly[2] + weekly[3] + weekly[4];

 //Calculate the average spent each week
 var average = total / 5;

 //Output the result to the console.
 console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week.");