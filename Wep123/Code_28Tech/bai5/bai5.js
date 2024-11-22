/*
DOM document: có nhiệm vụ lưu trữ toàn bộ các thành phần trong tài liệ website
DOM element: có nhiệm vụ truy xuất tới thẻ HTML nào đó thông qua các thuộc tính như
    tên class,id name của thẻ HTML
DOM HTML: có nhiệm vụ thay đổi giá trị nội dung và giá trị thuộc tính của các thẻ HTML
DOM CSS:có nhiệm vụ thay đổi các định dạng CSS của thẻ HTML
DOM event: có nhiệm vụ gán các sự kiện như(onclick, onload(), vào các thẻ HTML)
DOM listenner: có nhiệm vụ lắng nghe các sự kiện tác động lên thẻ HTML đó
DOM Navigation: dùng để quản lý, thao tác với các thẻ HTML, thể hiện mối quan hệ cha - con của các thẻ HTML
DOM Nodes: có nhiệm vụ thao tác với HTML thôgn qua đối tượng Object
*/
const box = document.getElementById("box");
box.classList.add("dart");
console.log(box);
const menu = document.getElementById("menu");
console.log(menu);
const hi = document.getElementsByTagName("h2");
console.log(hi);

const tg3 = document.getElementsByClassName("tg3");
console.log(tg3);

[...tg3].forEach(item => {
    item.classList.add("tg2");
    item.classList.remove("tg3");
});

const element1 = document.querySelector(".box1 .box2 .link");
element1.classList.add("active");
console.log(element1);

const kk = document.querySelector(".test");
kk.classList.add("testkk");
console.log(kk);



const prodact = document.querySelectorAll(".prodactitem");
console.log(prodact);

let cart = [];


[...prodact].forEach(item => {
    const dataId = item.getAttribute("data-id");
    cart.push(dataId);
    console.log(dataId);
});
console.log(cart);

function hamMot() {
    console.log("Viec 1");
}

function hamHai() {
    console.log("Viec 2");
}
const button = document.querySelector("#button");
button.onclick = function () {
    hamMot();
    hamHai();
}

const inputName = document.querySelector("#inputName");
inputName.onblur = function () {
    inputName.value = inputName.value.toUpperCase();
    // console.log(inputName.value);
    inputName.classList.remove("focus")
}


inputName.onfocus = function () {
    inputName.classList.add("focus");
}



const buttonmenu1 = document.querySelector("#buttonMenu");
const inputclose1 = document.querySelector("#innerclose");
const menu1 = document.querySelector("#menu1");

buttonmenu1.onclick = function () {
    menu1.classList.add("show");
}
inputclose1.onclick = function () {
    menu1.classList.remove("show");
}

