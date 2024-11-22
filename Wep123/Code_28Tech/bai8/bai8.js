// 1 pham vi toan cuc
// var a = 10;
// function test() {
//     console.log(a);
//     function test2() {
//         console.log(a);
//     }
//     test2();
// }
// test();


//2 pham vi cuc bo
// function test() {
//     const a = 10;
//     console.log(a);
//     function test2() {
//         console.log(a);
//      }
//     test2();
// }
// test();


//3
let a = 10;
let b = 12;
var sum;
// let c = sum(a, b);
// sum = (x, y) => {
//     return (x + y);
// }


const bot = document.querySelector("button");
bot.addEventListener("click", function () {
    console.log(this);
})

const lis = document.querySelectorAll("menu li");
console.log(lis);


[...lis].forEach(function (item) {
    item.addEventListener("click", function () {
        console.log(this);
    });
});


// console.log(window.location.href);
// console.log(this.location.href);

let info = {
    fullname: "Do Tien Quang",
    age: 20,
    email: "dotienquang@",
    getfullname: function () {
        console.log(info.fullname);
        console.log(this.email);
    }
}

info.getfullname();
export function cong(a, b) {
    return a + b;
}

export function hieu(a, b) {
    return a - b;
}
export function tich(a, b) {
    return a * b;
}
export function thuong(a, b) {
    return a / b;
}





