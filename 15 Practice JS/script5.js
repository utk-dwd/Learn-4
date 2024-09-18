var home = document.querySelector("#home");
var about = document.querySelector("#about");
var help = document.querySelector("#help");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var helptext = document.querySelector("#helptext");

hometext.style.display = "block";
hometext.style.width = "50%";

home.addEventListener("click", function(){
    saaretexthatao();
    hometext.style.display = "block";
    hometext.style.width = "50%";
})

about.addEventListener("click", function(){
    saaretexthatao();
    abouttext.style.display = "block";
    abouttext.style.width = "50%";
})

help.addEventListener("click", function(){
    saaretexthatao();
    helptext.style.display = "block";
    helptext.style.width = "50%";
})

function saaretexthatao(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}