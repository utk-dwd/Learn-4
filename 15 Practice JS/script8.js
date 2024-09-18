var text = document.querySelector("textarea");
var counter = document.querySelector("#counter");

text.addEventListener("input", function(){
    counter.textContent = text.value.length;
})