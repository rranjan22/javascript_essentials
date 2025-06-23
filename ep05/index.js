//function declaration
function add(a, b) {
  //a,b are parameters
  console.log(a + b);
}
add(100, 200); //call  //100, 200 are arguments

//function expression
// when we initialize a function as a value in a variable it is called function expression

//this is named function expression because the name of the function is given and it is "add"
const sumOfTwoNumbers = function add(a, b) {
  //a,b are parameters
  console.log(a + b);
};

//this is ananymous function because the name of the function is not given
const sumation = function (a, b) {
  console.log(a + b);
};

//function call
sumation(3, 5); //8
sumOfTwoNumbers(5, 7); //12

//callback function
//it depends on some other function
//when we pass a function as parameters in some other function and receive as an argument
//js is single thread means it executes the code line by line -> js does one task at a time(no multitasking)
//js is synschronus programming language-> one after the other
//js doesnot wait for anyone, it executes the code line by line

// const doSomething = function(callback) {
//   console.log("samose ban rahe hai..");
//   setTimeout(() => {
//     callback();
//   }, 3000);
//   console.log("almost ready hai")
// }

// const ready = function(){
//   console.log("samose ready hai");
// }

// doSomething(ready);

//Higher order function
const radius = [1, 2, 3, 4];

const areas = function (radiusArray) {
  const result = [];
  for (let i = 0; i < radiusArray.length; i++) {
    const calculate = Math.PI * radiusArray[i] * radiusArray[i];
    result.push(calculate);
  }
  return result;
};

const ansArea = areas(radius);
console.log(ansArea);

const circumferences = function (radiusArray) {
  const result = [];
  for (let i = 0; i < radiusArray.length; i++) {
    const calculate = 2 * Math.PI * radiusArray[i];
    result.push(calculate);
  }
  return result;
};

const ansCircumference = circumferences(radius);
console.log(ansCircumference);

//to avoid the above repeating things, because here the only differnce is in formula -> we use higheer order function

const circumFormula = function (radii) {
  return 2 * Math.PI * radii;
};

const areaFormula = function (radii) {
  return Math.PI * radii * radii;
};

const calculate = function (radius, Formula) {
  let a = [];
  for (let i = 0; i < radius.length; i++) {
    a.push(Formula(radius[i]));
  }
  return a;
};

console.log(calculate(radius, areaFormula));
console.log(calculate(radius, circumFormula));

//Arrow Function
const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log(multiply(2, 3));
