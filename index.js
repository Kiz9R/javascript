//print
console.log("hello world");


//variable
var a='rit',b='69';
console.log(a+b);
let firstName='kiz9r';
console.log(firstName);
console.log( typeof firstName);
const rit='kiz9r';
//rit='blank';
console.log(rit);
var h=null;
console.log(typeof h);


//object
let aboutMe={
    firstName:"kiz9r",
    lastName:'blank',
    age:20
};
console.log(aboutMe);
aboutMe.age=21;
console.log(aboutMe);
aboutMe['age']=22;
console.log(aboutMe);
let select='age';
aboutMe[select]=11;
console.log(aboutMe);


//array is dynamic not static in javascript
let arr=['red','blue','green','yellow'];
console.log(arr);
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}  


//functions
function hello(name) {
    console.log('hello '+name);
    //alert("hello this is function");
    //hello('jhonny'); <-- this will make infinity loop
}

hello('jhon');

// array
const numbers=[1,2,3];
console.log(numbers);

// const moreNumbers=new Array(5);
// console.log(moreNumbers);

const yetMoreNumbers=Array.of(3);
console.log(yetMoreNumbers);

const moreNumbers=Array.from(`hi!`);
console.log(moreNumbers);


const list=document.querySelectorAll("li");
const unlist=Array.from(list);
console.log(unlist);