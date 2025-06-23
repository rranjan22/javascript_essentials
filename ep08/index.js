// const myError = new Error("This is my error");
// console.log(myError);

// throw new Error("Something went wrong..");

try{
    let a = 10;
    console.log(a);
    throw new Error("Something Error!!");
}
catch(error){
    console.error(error);
}