
 /*Jeremy Martin
SDI Section 2
Functions Assignment
09-23-2015
 */

 //alert ("this is a test to see if connected.");

 var length = prompt("Lets find out how many gallons of water a pool will hold.\nWhat is the length of the pool rounded to the nearest foot?");
 var width = prompt("What is the width of the pool rounded to the nearest foot?");
 var depth = prompt("What is the average depth of the pool rounded to the nearest foot?");
 var totalVolume = volCalc (length, width, depth);
 function volCalc (l, w, d){
     var volume = l * w * d;
     return volume;
 }
 console.log("The volume of the pool in cubic feet is " + totalVolume + ". \nNow let's figure out how many gallons of water that is.");
 var galCalc = function (v){
     var gallons = v * 7.5;
     return gallons;
 };
 var totalGallons = galCalc(totalVolume);
 console.log("The total number of gallons of water needed to fill the pool is " + totalGallons + ".")