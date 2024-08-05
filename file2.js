//trim
let fn="            og          ";
console.log(fn);
let trimedName= fn.trim();
console.log(trimedName.length);

//upper case
console.log(fn.toUpperCase());
let name ="omji shukla";

//slicing
let newstr = name.slice(0,4);
console.log(newstr);

//datatype
console.log(typeof name);

//int to string
let num = 1;
console.log(typeof num);
let str = num+"";
console.log(typeof str);

//string to int
let num1="1";
console.log(typeof num1);
console.log(typeof (+num1));
console.log(Number(num1));

//concatenate strings

let fN="omji";
let lN="shukla";
console.log(fN + " "+lN);

//template string
let name22 = "omji shukla";
let age = 25;
let intro = `my name is ${name22} and I am ${age} years old`; 
console.log(intro);



