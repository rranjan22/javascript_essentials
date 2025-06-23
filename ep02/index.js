// we can destructuring in object and array


//array destructuring
const arr = [1,2,3,4,5];
console.log(arr[1]);
console.log(arr[2]);

const [a,b,c,d,e] = arr; 
console.log(e);

//object destructuring

const person = {
    name:"Patel",
    age:21,
    gender:"male",
    address:"Punjab"
};

//access value

//1 dot notation
console.log(person.gender);

//bracket notation
console.log(person["gender"]);
console.log(person["age"]);

//destructuring
const {gender, address, name, age} = person;
console.log(gender);
console.log(address);
console.log(name);
console.log(age);