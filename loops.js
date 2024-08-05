const fruits = ["apple","banana","oranges","grapes","mango","papaya"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log("--------");

const fruits1=[];

for(let fruit of fruits){
fruits1.push(fruit.toUpperCase());
}

console.log(fruits1);
console.log("--------");


for(let fruit of fruits){
    console.log(fruit);
    }
console.log("--------");
//array destructing
let [myvar1,myvar2]=fruits;
console.log(myvar1);
console.log(myvar2);
console.log("--------");
let [myvar3,,myvar4,...mynewArray]=fruits;

console.log(myvar3);
console.log(myvar4);
console.log(mynewArray);