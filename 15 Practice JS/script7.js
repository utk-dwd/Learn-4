var input = document.querySelector("input");
var data = [
    {name:"Amitesh", src:""},
    {name:"Ayushman", src:""},
    {name:"ite", src:""},
    {name:"tesh", src:""},
    {name:"esh", src:""},
    {name:"sh", src:""},
    {name:"ush", src:""},
    {name:"rsh", src:""},
]

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
                <div class="img"></div>
                <h4>${elem.name}</h4>
            </div>`;
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    var newusers = "";
    matching.forEach(function(elem){
        newusers += `<div class="person">
                    <div class="img"></div>
                    <h4>${elem.name}</h4>
                </div>`;
    })  
    
    document.querySelector(".people").innerHTML = newusers;
})