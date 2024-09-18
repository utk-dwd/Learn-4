// dom = document object model

// dom actually hota hai html tag and uska pura control JS mein
// kyu:- kabhi hum chahte hai ek button ko cick krke div gayab krde ab html me ye feature nhi hai, ab isko hum JS se krte hai
// aisi JS jo webpage par cheejo ko badal skae us JS ko hum perfoam kar skte hai DOM ke sath

// Aisa JS ka code jo webpage pr kuch change kre wo DOM kehlaega
// DOM manupulation :- body me kuch bhi manipulate krna DOM manupulation kehlata hai.

// usse            x kardo         y hone par
// selection       change          event

// Accesssing Elements:-
// ek webpage banao, kuch element banao
// script.js file banao
// link karo body tag me  --> <script src=" .js file name">  </script>  this is how we link


// selection

//id
var btn = document.querySelector('#abcd');

//class
var classabcd = document.querySelector('.abcd');

//tag
document.querySelector("h3");

//agar apke paas bht saare h3 hai to wo sirf 1st wala h3 select krega
//ek se jyada select krna chahte ho to querysectorall use krna padega

// TEXT CONTENT and INNER HTML
btn.textContent = "Starting now...";  //chenges the text

classabcd.textContent += "Ji" ; // this will add content after the previous
 h3.innerHTML = '<i>hello</i>'; // treated as tag
// h3.textcontent = '<i>hello</i>'; treated as text only

// for css Manipulating Styles and Classes


// h1.classList.add('makeitred');
// h1.classList.remoce('makeitred');

//Creating and deleting elements


// var h1 = document.createElement('h1');   created an html element
// h1.textContent = ('hey')                 
// h1.classList.add("makeitred")               we also added class in it


//html ko kaha pr rakhoge  append
// document.querySelector("body").appendChild(h1);

//REMOVE CHILD

// document.querySelector("body").removeChild();

//Event Handling 

//jab bhi aap kis element pr koi action krte ho tb wha pr event by default automatically raise hota hai
// eventlistener on that event --> then event will not be ignored like ass always and will be actioned as per the event listner

// var btn = document.querySelector("button");
// btn.addEventListener('click / mourseover / mouseleave', function(){
//     alert();
//     btn.textContent = "starting...";
//     btn.style.backgroundColor = "red";
// })

// EVENT OBJECT

// document.querySelector("body")
// .addEventListener("mousemove", function(dets){
//     console.log("moving...")
//      console.log(dets);          this will give the details about mouse coordinates
// })