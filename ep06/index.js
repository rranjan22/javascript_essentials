//Array methods (forEch,map. filer, reduce)
//forEch, map and filter are mostly used

const arr = [10, 20, 30, "Apple", false, "Banana"];
console.log(arr);
arr.push("Orange"); //adds at the end
console.log(arr);
arr.unshift("Start"); //adds at the first
console.log(arr);

console.log(arr.length);

//map
//it traverse all the element and give a new array
const nums = [10, 20, 30, 40, 50];
const newArray = nums.map((element) => {
  return element * 2;
});
console.log(newArray);

const product = [
  {
    price: 1200,
    name: "Iphone",
  },
  {
    price: 1400,
    name: "Bag",
  },
  {
    price: 900,
    name: "Shoes",
  },
];

product.map((item) => {
  console.log(`${item.name}'s price is ${item.price}`);
});

const a = product.filter((item) => item.price > 1000);
console.log(a);


//reduce

