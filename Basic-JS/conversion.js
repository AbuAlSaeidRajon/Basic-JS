// if we put '' mark on number then it won't be numeric variables anymore, it will become string variables. Here is an example..................
var price1 = '40';
var price2 = '30';
var totalPrice = price1 + price2;
console.log(totalPrice);
// another example........
var price1 = 40;
var price2 = '30';
var totalPrice = price1 + price2;
console.log(totalPrice);

// convert string to number.............
var price1 = '35';
var price1Number = parseInt(price1);
// parseInt this only apply when the number is intizer number or purnoshongkha........
console.log(price1Number);

var cgpa = '3.31';
var cgpaNumber = parseInt(cgpa);
console.log(cgpaNumber);
// if we do like this then the output will show as 3 not 3.31 cause INT show only intizer number or purnoshongkha. 

// purnoshongkha ba doshomik like 3.45, 4.55 etc hole...........
var cgpa = '3.31';
var cgpaNumber = parseFloat(cgpa);
console.log(cgpaNumber);