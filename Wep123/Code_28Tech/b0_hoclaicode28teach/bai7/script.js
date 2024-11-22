var a = 10;

function test() {
    console.log(a);
    function test1() {
        console.log(a);
    }
    test1();
}
test();
let b;
console.log(b);
b = 11;
console.log(b);

//  
// 
b = 30;
console.log(b);
console.log(
    window.location.href
);
console.log(
    this.location.href
);

// function test123(){

//     "use strict";
//     c= 111;
//     console.log(c);
// }
// test123();

// This

var listItem = document.querySelectorAll("#menu li");
//    console.log(listItem);
[...listItem].forEach(function (item) {
    item.addEventListener("click", function () {
        console.log(this);
        console.log(listItem);
    });
});
//This trong Arrow function không hộ trợ từ khóa this
[...listItem].forEach(function (item) {
    item.addEventListener("click", () => {
        console.log(this);
        console.log(listItem);
    });
});