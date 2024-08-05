// null and object , its a bug but they cant fix bcz all frameworks are designed with this bug only
let hey = null;
console.log(typeof hey);
console.log(typeof null)

//Bigint

let mynum = BigInt(27464826482649836429384639839);
console.log(mynum);
console.log(typeof mynum);
console.log(Number.MAX_SAFE_INTEGER);

//boolean and comparison operator
let num1 = "7";
let num2 = 7;
console.log(num1>num2);

//== vs ===
console.log(num1 ==num2);
console.log(num1===num2);

//!= vs !==
console.log(num1!=num2);
console.log(num1!==num2);

//if else in js

let age =17;
if(age>18){
    console.log("user can play ddlc");
}

else{
    console.log("user can play mario");
}

//falsy and truthy
//false, "", null,undefined,0 other all are truthy


let age1 =-1;
if(age1){
    console.log("user can play ddlc");
}

else{
    console.log("user can play mario");
}





