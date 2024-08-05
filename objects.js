const person={
    name:"omji",
    age:"24",
    hobbies:['poetry','movies','music']
}

console.log(person);

person.gender="male";
const key ="email";
person[key] = "omshukla245@gmail.com";
console.log(person);
console.log(person["age"]);

//for loop in objects
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}


//computed properties
console.log("-----------------");

const key1="obj1";
const key2="obj2";

const val1="value 1";
const val2="value 2";

const cp={
    [key1]:"val1",
    [key2]:"val2"
}

console.log(cp);