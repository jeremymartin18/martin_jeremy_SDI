
 /*Jeremy Martin
SDI Section 2
Check The Login
09-15-2015

  Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

  Given:
  Username entered by user
  Password entered by user
  Correct username
  Correct password

  Result To Print Out:
  “Welcome, (place their username here)!”  - if the username and password is correct
  “User not found. Try again.” -if the username does not match
  “Password does not match our records.”  -if the username matches but the password does not
 */

var username = "jmartin";
var password = "P@ssw0rd";

var enterUsername = prompt("Please enter your username:");
var enterPassword = prompt("Please enter your password:");

if(enterUsername != username){
    console.log("User not found. Please Try again.");
}else if( enterPassword != password){
    console.log("Password does not match our records");
}else{
    console.log("Welcome " + enterUsername + "!");
}