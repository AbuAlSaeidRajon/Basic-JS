// type of variables is refers to what kind of value is...........

var price = 100;
console.log(typeof price);

var price = '100';
console.log(typeof price);

var isHappy = true;
console.log(typeof isHappy);

var romantic;
console.log(typeof romantic);
// I didn't put any value for the romantic that's why the output is showing undefined cause I didn't defined the value of romantic............


// some advance level javascript............
// this only apply for the 0.1 and 0.2 sum.........
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
// if we do this then the output will show as 0.30000000000004. this is a problem of javascript for only the sum of 0.1 and 0.2. we can fixed it by telling them how many digit we should take. here is an example.......
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1); 
// here (1) is for the total digit......
console.log(sum);
// so now if we do it like this then the output will show as string not number. but we can also fixed it. here how can we can do that.......
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum); 
console.log(sum);