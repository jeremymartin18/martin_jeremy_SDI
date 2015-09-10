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
console.log("The total number of hours worked are " + hoursWorked);

//Ask the user how many hours of overtime were worked.
var overtime = prompt("How many hours of overtime did you work over the past 2 weeks?");

//Calculate base pay for overtime hours
overtimeRate = basePay * payRate[0];

//Output the rate of overtime pay to the console
console.log("The overtime pay rate is $" + overtimeRate);

//Calculate extra pay for overtime hours
overtimePay = overtimeRate * overtime;

//Output the overtime pay to the console
console.log("The total amount of overtime pay is $" + overtimePay);

//Ask the user how many hours worked during a holiday.
var holiday = prompt("How many hours did you work during a holiday over the past 2 weeks?");

//Calculate base pay for holiday hours
holidayRate = basePay * payRate[1];

//Output the rate of holiday pay to the console
console.log("The holiday pay rate is $" + holidayRate);

//Calculate extra pay for holiday hours
holidayPay = holidayRate * holiday;

//Output the holiday pay to the console
console.log("The total amount of holiday pay is $" + holidayPay);

//Calculate the total regular hours worked
var regular = hoursWorked - overtime - holiday;

//Output the total regular hours worked to the console
console.log("The total amount of regular hours worked is " + regular);

//Calculate the total pay for regular hours
var regularPay = regular * basePay;

//Output the total pay for regular hours to the console
console.log("The total amount of regular pay is $" + regularPay);

//Calculate the total pay for the user
var totalPay = regularPay + overtimePay + holidayPay;

//Output a breakdown of all of the hours worked by this user as an alert.
alert(name + ", you worked a total of " + hoursWorked + " hours over the past 2 weeks.\n" + regular + " were regular hours, " + overtime + " were overtime hours, and " + holiday + " were holiday hours.");

//Output a breakdown of the users next paycheck as an alert.
alert(name + ", you earned $" + regularPay + " for your regular hours, $" + overtimePay + " for your overtime hours, and $" + holidayPay + " for your holiday hours. Your next paycheck will be $" + totalPay + ".");

//Calculate the rate of pay if user received their sales incentive bonus
totalPay *= 1.2;

//Output new base pay to console
console.log("The total paycheck after the bonus is $" + raise);

//Output the total pay if user were to receive their sales incentive bonus as an alert.
alert(name + ", if you were to receive your sales incentive bonus then your paycheck would be $" + totalPay + ".");