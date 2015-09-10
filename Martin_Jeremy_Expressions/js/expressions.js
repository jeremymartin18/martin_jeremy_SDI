/*Jeremy Martin
SDI Section 2
Expressions Assignment
09-08-2015
 */

//Define variables for pay calculation
var payRate = [.5, 1.5];

//Welcome the user and prompt for their name.
var name = prompt("Welcome to the Payroll Calculator.\nPlease enter your name.");

//Ask the user what their base rate of pay is.
var basePay = prompt("What is your base rate of pay?");

//Ask the user how many hours they worked this week.
var lastWeek = prompt("How many hours did you work last week?");

//Ask the user how many hours they worked last week.
var thisWeek = prompt("How many hours did you work this week?");

//Calculate the total hours worked for both weeks
hoursWorked = lastWeek + thisWeek;

//Output total hours worked to the console
console.log(hoursworked);

//Ask the user how many hours of overtime were worked.
var overtime = prompt("How many hours of overtime did you work?");

//Calculate base pay for overtime hours
overtimeRate = basePay * payRate[0];

//Calculate extra pay for overtime hours
overtimePay = overtimeRate * overtime;

//Ask the user how many hours worked during a holiday.
var holiday = prompt("How many hours did you work during a holiday?");

//Calculate base pay for holiday hours
holidayRate = basePay * payRate[1];

//Calculate extra pay for holiday hours
holidayPay = holidayRate * holiday;

