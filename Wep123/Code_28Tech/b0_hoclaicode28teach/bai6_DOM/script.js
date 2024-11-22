var inputName = document.getElementById("inputName");
inputName.classList.add("red");
inputName.onblur = function () {
    inputName.value = inputName.value.toUpperCase();
    inputName.classList.add("background-color:red");
}
console.log("hi")
inputName.onkeydown = function () {
    console.log("onkeyDown");
}

// 
var menu1 = document.getElementById("menu");
var close1 = document.getElementsByClassName("close");
menu1.onclik = function () {
    menu1.classList.add("greend");
}
var show = document.getElementById("show");
show.onclick = function () {
    menu1.classList.add("show");
    // buttonMenu.classList.remove("")
}

close1.onclick = function () {
    menu1.classList.remove("show");
    menu1.classList.remove("close");
}
console.log("hi")
// 
function ham1() {
    console.log(1);
}

function ham2() {
    console.log("viec 2");
}
var button1 = document.getElementById("button1");

button1.addEventListener("click", function () {
    ham1();
})
button1.addEventListener("click", function () {
    ham2();
});
setTimeout(() => {
    button1.removeEventListener("click", ham1());
}, 5000)