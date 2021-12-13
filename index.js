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


// const list=document.querySelectorAll("li");
// const unlist=Array.from(list);
// console.log(unlist);

const hobbies=[`sport`,`cooking`]
hobbies.push(`reading`);
console.log(hobbies);
hobbies.unshift(`coding`);
console.log(hobbies);
const popValue=hobbies.pop();
console.log(hobbies,popValue);
hobbies.shift();
console.log(hobbies);
console.log(`hello ${hobbies}`);

hobbies.splice(0,1);
console.log(hobbies);
hobbies.splice(0,0,"good food");
console.log(hobbies);
hobbies.splice(-1,1);
console.log(hobbies);

console.log(hobbies.indexOf('cooking'));

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);
const found1 = array1.findIndex(element => element > 10);

console.log(`${found} and ${found1}`);

// for each loop and for loop respectively

const array2 = [];
for(const i of array1) {
    array2.push(i);
}
console.log(array2.length);

// array1.forEach((array2,idx,array1) => {
//     array2.push(array1[idx]);
// })
// console.log(array2);

for(let i=0; i<array2.length; i++) {
    console.log(array2[i]);
}

// MAP
const prices=[50,20,10,90,30];
const tax=0.19;

const price=prices.map((price,idx,prices) => {
    const priceobj={ index:idx, price:price*(1+tax) };
    return priceobj;
})

console.log(price);

//sorting and reverse
const sortedPrices= prices.sort((a,b)=>{
    if(a>b){
        return 1;
    }else if(a===b){
        return 0;
    }else{
        return -1;
    }
})

console.log(sortedPrices);

console.log(sortedPrices.reverse());
