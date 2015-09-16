
 /*Jeremy Martin
SDI Section 2
Last Chance For Gas
09-15-2015

  A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.


  Given:
  Gas efficiency of the car (in mpg)
  Gauge reading of the gas tank (in %)
  Car’s gas tank capacity (in gallons)

  Result To Print Out:
  “Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”
 */

 var mpg = prompt("What is the efficiency of your car rated in MPG?");
 var gasGuage = prompt("What percentage of gas is remaining in the tank?");
 var gasTankCapacity = prompt("What is the capacity of your gas tank?");
 var howFar = gasTankCapacity * gasGuage / 100 * mpg;

 console.log(howFar);

 if(howFar > 200){
    console.log("Yes, you can make it without stopping for gas!");
 }else{
     console.log("You only have " +gasTankCapacity * gasGuage / 100+ " gallos of gas in your tank, better get gas now while you can.");
 }