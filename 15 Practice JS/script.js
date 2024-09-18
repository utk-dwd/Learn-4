// Create a button in html that when clicked changes the content of the paragraph

var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("click", function(){
    p.textContent = "You just clicked the button";
})