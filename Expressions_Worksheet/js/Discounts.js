
 /*Jeremy Martin
SDI Section 2
Discounts Practice Assignment
09-08-2015
 */

 //Define the variables
 var price = 399.99;
 var discount = 15;
 var description = "Camera";
 var tax = 6.5;

 //Calculate the price with and without sales tax after the discount
 var woTax = price - discount / 100 * price;
 var wTax = woTax + tax / 100 * woTax;

 //Output the result to the console
 console.log("Your " + description + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + woTax + " without tax, and $" + wTax + " with tax.");