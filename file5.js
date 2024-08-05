//copying array into one another without dependency

let arr1=[1,2,3,4];
let arr2=arr1.slice(0);
let arr3=[].concat(arr1);

//spread operator
let arr4=[...arr1];
let arr5=[...arr1, ...arr2]
arr1.push(0.9);
console.log(arr1);
console.log(arr2);
console.log(arr5);