//spread operator is applicable for object/array, yoo much use in function

// ...
//duplicate karta hai

//make a duplicate array
const arr = [1, 2, 3];
const duplicateArray = [...arr, 4, 5, 6, "Apple"]; //returning a new array
console.log(duplicateArray);

//Q. Merge two array
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

const mergedArray = [...num1, ...num2];
console.log(mergedArray);

//object
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: "Hello",
  d: "Developers",
};

const newObj = {...obj1,...obj2};
console.log(newObj);


//function
// function sum(a,b,c,d,e){
//     return a+b+c+d+e;
// }
// console.log(sum(1,2,3,4,5));

function sum(...numbers){
    //when you use spread operator here, it convert them into array
    console.log(numbers);
    
    let result = 0;
    for(let i = 0; i<numbers.length; i++){
        result+=numbers[i];
    }
    return result;
}
console.log(sum(1,2,3,4,5));