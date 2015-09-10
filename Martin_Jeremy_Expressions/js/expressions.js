/*Jeremy Martin
SDI Section 2
Expressions Assignment
09-08-2015
 */

//Define variables for pay calculation
var payRate = [1.5, 2.5];

//Welcome the user and prompt for their name.
var name = prompt("Welcome to the Payroll Calculator.\nPlease enter your name.");

//Ask the user what their base rate of pay is.
var basePay = prompt("What is your base rate of pay?");

//Ask the user how many hours they worked this week.
var lastWeek = prompt("How many hours did you work last week?");

//Ask the user how many hours they worked last week.
var thisWeek = prompt("How many hours did you work this week?");

//Calculate the total hours worked for both weeks
hoursWorked = Number(lastWeek) + Number(thisWeek);

//Output total hours worked to the console
console.log(hoursWorked);

//Ask the user how many hours of overtime were worked.
var overtime = prompt("How many hours of overtime did you work over the past 2 weeks?");

//Calculate base pay for overtime hours
overtimeRate = basePay * payRate[0];

//Output the rate of overtime pay to the console
console.log(overtimeRate);

//Calculate extra pay for overtime hours
overtimePay = overtimeRate * overtime;

//Output the overtime pay to the console
console.log(overtimePay);

//Ask the user how many hours worked during a holiday.
var holiday = prompt("How many hours did you work during a holiday over the past 2 weeks?");

//Calculate base pay for holiday hours
holidayRate = basePay * payRate[1];

//Output the rate of holiday pay to the console
console.log(holidayRate);

//Calculate extra pay for holiday hours
holidayPay = holidayRate * holiday;

//Output the holiday pay to the console
console.log(holidayPay);

//Calculate the total regular hours worked
var regular = hoursWorked - overtime - holiday;

//Output the total regular hours worked to the console
console.log(regular);

//Calculate the total pay for regular hours
var regularPay = regular * basePay;

//Output the total pay for regular hours to the console
console.log(regularPay);

//Calculate the total pay for the user
var totalPay = regularPay + overtimePay + holidayPay;

