// const {x,calculateSum} = require("./calculate/sum");
// const {calculateMultiply} = require("./calculate/multiply");/
const {calculateSum, calculateMultiply} = require("./calculate");
const data = require("./data.json");

console.log(data);
var name = "Namaste World";
var a = 10;
var b = 20;
console.log(name);
calculateSum(a, b);
calculateMultiply(a, b);
