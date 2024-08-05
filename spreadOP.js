const str = "hello";
const arr = [...str];
console.log(arr);

console.log("----------------------");

const obj1 ={
    key1:"obj1",
    key2:"obj2",
};

const obj2 ={
    key3:"obj3",
    key4:"obj4",
};
const obj3={...obj1, ...obj2};
console.log(obj3);


const new1 = [{key1:1,name1:"omji",sub1:"AIML"},
    {key2:2,name2:"rahul",sub2:"AIML"},
    {key3:3,name3:"piyush",sub3:"devops"},
]

for(let keys of new1 ){
    console.log(keys);
}