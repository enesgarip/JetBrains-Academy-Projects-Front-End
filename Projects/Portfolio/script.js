document.addEventListener("DOMContentLoaded", function(event) {
let popup = document.querySelector(".window");
let flash = document.querySelector(".open-window");
let close = document.querySelector(".close-window");

let popup1 = document.querySelector(".window1");
let flash1 = document.querySelector(".open-window1");
let close1 = document.querySelector(".close-window1");

// flash.onclick = function(){
//     popup.style.display = "block";
// };
if (flash) {


    flash.addEventListener("click", function () {
        popup.style.display = "block";
    });
}
close.onclick = function(){
    popup.style.display ="none";
};

flash1.onclick = function(){
    popup1.style.display = "block";
};

close1.onclick = function(){
    popup1.style.display ="none";
};

function myFunction() {
    var x = document.getElementById("hamburger");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
})