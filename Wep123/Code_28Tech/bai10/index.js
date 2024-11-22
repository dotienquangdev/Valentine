import { tong } from "./helpers/tong.js";
import { kiemtra } from "./helpers/kiemtra.js";
import { kiemtrale } from "./helpers/kiemtrale.js";

let jsonArray = `
    [
        {
            "id":1,
            "name":"Do Tien Quang",
            "email":dotienquang12@gmail.com"
        },
        {
            "id":2,
            "name":"Tien Quang",
            "email":dotienquang@gmail.com"
        },
        {
            "id":3,
            "name":"Do Quang",
            "email":dotien@gmail.com"
        }
    ]
`;
let lisUser = JSON.parse(jsonArray);
let htmls = " ";
lisUser.forEach(item => {
    htmls += `
        <div class="user-item">
            <div class="inner-name>${item.name}</div>
            <div class="inner-email>${item.email}</div>
        </div>
    `;
});

// const divListUser = document.querySelector("#listUser");
// divListUser.localName(htmls);

// function ban1(callback) {
//     console.log("Ham 1");
// }

// function ban2() {
//     console.log("Hamn 3");
// }
// ban1(ban2);

// function ham1(a, b) {
//     console.log("Ham 1");
//     a();
// }

// function ham2() {
//     console.log("Ham 2");
// }
// ham1(ham2);

tong(10, -1, kiemtra);
tong(10, 2, kiemtrale);


tong(11, -1, kiemtra);
tong(-11, 2, kiemtrale);


var a = 10;
var promise = new Promise((resolve, reject) => {
    if (a !== undefined && a !== null && a !== "") {
        reject(a);//thanh cong

    } else {
        reject(a);
    }
})


