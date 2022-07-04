var num = prompt("Enter A Positive integer: ");
console.log("Number: "+ num);
console.log("Round Off Value: " +Math.round(num));
console.log("Floor: "+Math.floor(num));
console.log("Ceil: "+ Math.ceil(num));



var num = prompt("Enter A negative integer: ");
console.log("Number: "+ num);
console.log("Round Off Value: " +Math.round(num));
console.log("Floor: "+Math.floor(num));
console.log("Ceil: "+ Math.ceil(num));

var num = prompt("Enter A Number: ");
console.log("Absolute value of "+num+" is "+Math.abs(num));

console.log("Random Value Of Dice is: "+Math.floor((Math.random()*6)+1));

var num =Math.floor((Math.random()*2)+1)

if (num===2){
    var res = "Head"
}
else{
    var res = "Tails"
}
console.log("Random Coin Value is "+res);

console.log("Random Number Between 1 and 100 is: "+Math.floor((Math.random()*100)+1));

var num = prompt("Enter Your Weight In KiloGrams: ");
var res = parseFloat(num);
console.log("The Weight Of User is "+res+" Kilograms")

var secretNumber = "7";
var num = prompt("Enter Any Number Between 1 to 10: ");
if (num===secretNumber){
    alert("Congratulations");
}
else{
    alert("Try Again")
}