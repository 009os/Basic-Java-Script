let fruits = ["apple","banana","grapes"];
console.log(fruits);

let nums=[1,2,3,4,5];
console.log(nums);

let mixed=[1,2,4.5,"apple",6.8899];
console.log(mixed);

console.log(mixed[3]);

console.log(typeof fruits);
console.log(typeof nums);
console.log(typeof mixed);

console.log(Array.isArray(nums));

mixed[2]=89.08;
console.log(mixed);

//push
fruits.push(9);
console.log(fruits);

//pop
mixed.pop();
console.log(mixed);

//unshift
fruits.unshift("1.2");
console.log(fruits);

//shift

fruits.shift();
console.log(fruits);

//push and pop are faster than shift and unshift

//primitive VS reference
//primitive
let n1 =1;
let n2=n1;
//before change
console.log(n1);
console.log(n2);

n1++;
//after change
console.log(n1);
console.log(n2);

//reference

let arr1=[1,2,3];
let arr2=arr1;

//before change
console.log(arr1);
console.log(arr2);

arr1.push(7.8);

//after change
console.log(arr1);
console.log(arr2);


