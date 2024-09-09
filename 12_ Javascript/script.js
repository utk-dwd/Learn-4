// JS DOM = code likhkar cheeje bananan seekhna

// Js me "var" ES5 me tha aur let ES6 me hai. 

//Basics of code execution. Line by line execution

//Console, alert, prompt :- These are parts of browser (window: collection of tools that Browser provides to use in browser)
//console.log( )
//console.warn()   Yellow colour se dikhta hai
//console.error

//alert("Hey")  alag se pop up window me dikhega
//Prompt alert ka bhai hai to prompt se ek kadam aage hai
//alert ke sath ek input bhi aajaega prompt me
//uska output bhi le skte hai like
// var name = prompt("Naam Btao")

//compilers and interpreters
//computers current flow 1 or current bypasss 0 smjha jata hai.
//JS doesnot convert to Machine level code and converts to Byte Code which compiles fast and runs slowly and for langauges like JAVA and C++ do vice versa
//google developed "JIT COMPILER" that leverages the goods of both worlds.

// Data Types:

//Types = primitive || Reference data types
// [] )() {} --reference data types
// 12, true, null, harsh -- primitive data types

var arr = [1,2,3,4,5,6];
var b = arr;

b.pop();

// In the reference dt the copy is not created the original arr will be modified in operation with b

//Spread   aise copy hoga wo reference data type
var ar = [12,13,14,15];
var ba = [...aar];
ba.pop();

//Conditionals:

//if else else-if
//jab bhi program me decision lana ho ki program me aage ky krna hai tb conditionals use krna.
// if me true ya false bs le skte hai input if(T/F) {  } .
// and kisi bhi value ko if ke andar truthy ya falsy value me convert kar skta hai.
// null, undefined, NaN, 0, " ", ' ', document.all, false  :- All of these are falsy values and else are  truthy values.
// If ke andar if bana skte hai, NESTED IF.
// Else me bracket nhi lagta hai else {}.
// Agar ek line ka code hai to if and else me {} ye bracket na bhi lagao to chal jaega.

//Loops:  (Tbtk x kro jbtk y na ho jae) (Repetiton)

// for 70%, while 5%, do-while, foreach 25%, forin, forof

// for (Start; end; Change) {

// }

// start;
// while (end) {
//     change;
// }

//for each ek normal loop nhi hai jo ki number pe chlta ho, sirf array pr chlta hai.

//Function ki help se hum kisi bhi ek code ko naam de skta hai
//And wo kaam ke liye har baar function ko call krna padega

// JS me function banane ke liye koi type nhi defina krna hota just:- function xyz() { your code }
// to run function:- xyz();

//JS me functions first class functions kehlate hai.
//JS me function ka chlna value ki trh treat kar sakte hai.

//parameters and arguments
//function xyzz( val // called parameter ) { your code}
// xyzz (kuch bhi bhej skte hai yha  // called argument);

//prep for interview

// ES5 :- 1. Function Statement 2. Function expressions, anonymuse function
//ES6 :- 1. Fat Arrow function (a) Basic Fat arrow (b) Fat arrow with one parameter (c) Fat arrow with impilicit return

//function abcd () { 
// function statement 
//  }

// var abcd = function () {
//  function expression
//  }

// function() {
// anonymous function
// }

// basicfat arrow
// var a = ( ) =>  { };

// var g = (ab) => { }
// g(12)

// impilicit return

// vr abcd = () => "harsh";
//var ans = abcd();

// Return :- return likhne ke baad function se wha return ho jaoge jis line ki wjh se wo function chala tha
// Return functions ke andar banta hai
//aisa fucntion jo kuch return nhi krta wo undefined return krta hai

// function abcd() {
//      return 12;
//  }

// var ans = abcd();   12 ko ans me save kr liye hai
// console.log(abcd());   12 ko print krwa diye hai

//undefined is value   #treated as garbage value
// null is a vaue
// no defined is an error  #it is resolved like :- Not Found

//Array

//array mtlb ek y aek se jyada value ek sath store krna ho
// var users = ["harsh", "Harshika", "Hersh", 4, 10, [new array], ( ) => { }]
// users[0 to 6]   #Index of array start from 0 to n-1


// Loop With Array
var arry = [1,2,3,4,5];
//add all members of array
// How to loop an array
//How to loop and do something with each element

arry.forEach(function(val  //isse value access kr skte hai, array ke index ki value
    ) {
    //har ek ke liye ye function ek baar chlega.
    console.log("hey!")
})

// Objects
// Objects ek tareeka hai jisse hum ek identity ki details ko ek sath rakh sakte hai.

var obj = {
    name: "harsh",
    email: "hai kuch",
    contact: 7921489239
};
var obj2 = new Object();

// obj.for  # to access it

// Synchronous and Asynchronous Tasks 
// synch code me code hamesha line by line chlta hai
// async code line by line nhi chlta nd jo phle complete ho jaye uska ans de diya jata hai.
// async code jiska answer aa chuka hai side stack me wo main stack me nhi aaega jbtk ki main stack khali nhi hota

// KeyWords  :- THIS
// this ki value baar baar badal skti hai. thrf saari condition me this ki value ky ky hoti hai seekhna padega
//global - window
//function -window
//method - object

var obj3 = {
    name: function(){  //this is called method :- function inside object
        console.log(this);
    },
    age: 25,
    number: 749273573
}
obj.name();

// fnc inside method (es5) - window
// fnc inside method (es6) - object

var obj4 = {
    sayName: function(){
        const child = () => {
        console.log(this);  // this is object too
        }
    }
}
obj4.sayName();

//constructor fnc mein this ki value - new blank object
function add() { 
    console.log (this);
}
const ans = new add();
//event listner mein this ki value - that element jspar event is. laga

document.querySelector("button")
.addEventListener("click", function(){
    console.log(this);
})

// CALL APPLY BIND
//by default this ki value window hoti hai wo window na ho aur kuch ho wo hum call apply bind ke sath decide kar skte hai.
// ye teen tareeke hai function ko call krne ke kisi object ko this maan kr

//CALL se hum ye define kr skte hai ki this ki value ko kya rakhna hai function ko call krte waqt
const obj5 = {name: " harsh call "}
function abcd(){
    console.log(this);
}

abcd.call(obj6);

// APPLY 
const obj6 = {name: " harsh apply"}
function abcd(a,b,c){
    console.log(this, a, b, c,d);
}

abcd.apply(obj6, [1,2,3]);  // is array ke andar parameters ki value pass kar skte hai

// BIND 

const obj7 = {name: " harsh bind"}
function abcd(){
    console.log(this);
}

const BaadMeChalaneKeLiyeFunction = abcd.bind(obj7);
BaadMeChalaneKeLiyeFunction();

// Prototypal Inheritance :-

// hum objects create karte hai ek parent constructor function ke prototype mein kuch add kr dete hai and jb bhi add hota
//hai to wo parent se banne wale children instance ko wo jo parent ko di thi wo milti hai saugaat me.

// ek function jo this ka use kr rha ho aur new ki help se naye naye Objects bana ke deta ho aise function ko constructor function kehte hai

//aisa koi bhi function jisme THIS ka use kre aur us function ko call krte waqt NEW ka use kre tb new ka mtlb wha par ek blank object hojata hai.
function makeHuman (name, age){
    this.name = name;  // {}.name = name;  this ki jgh blank object ban jaegi
    this.age = age;
}
makeHuman.prototype.printMyName = function() {
    console.log(this.name);
}
const human1 = new makeHuman("Harsh", 20);

// Closures
// aisa koi bhi function jo ek aur function ko return krde aur use kre parent function ka koi variable

function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

var fnc = counter();
fnc();
fnc();