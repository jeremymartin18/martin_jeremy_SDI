
 /*Jeremy Martin
SDI Section 2
Circumference Practice Assignment
09-22-2015
 */

 /*
  Calculate the circumference of a circle.

  Parameter(s) for function:
  Radius of the circle

  Return:
  Circumference of the circle

  Result to print to the console:
  “The circumference of the circle is X”;
  */
//declare and define the variable for the radius
 var radius = 4;

 //declare a variable and set it equal to the function call using the variable radius as the argument.
 var circumference = calcCircum(radius);

 //create the function named calcCircum and define the parameter "r"
 function calcCircum (r){
     //declare a variable to catch the calculation of the circumference of the circle.
    var circ = 3.14 * r * r;

     //return the calculationback to the main block of code.
    return circ
}

 //output the result of the function.
console.log("The circumference of the circle is " + circumference + ".");