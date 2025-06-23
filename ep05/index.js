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
const sumation = function (a,b) {
    console.log(a+b);
};


//function call
sumation(3,5);  //8
sumOfTwoNumbers(5,7); //12


//callback function
//it depends on some other function

