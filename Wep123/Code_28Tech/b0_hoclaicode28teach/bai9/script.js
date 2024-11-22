
// JSON co gia tri bang 1 object

// dang Object
var inforUser = {
    fullName: "Do Tien Quang",
    email: "dotienquang@gmail.com",
    age: 18
};

// chuyen sang dang String
// Sau nay di lam phai chuyen sang dang String
var inforUserJson =
    `
        {
            "fullName":"Do Tien Quang",
            "email":"dotienquang@gmail.com",
            "age":18
        }
    `;
console.log(inforUser);
console.log(inforUserJson);

var inforUserJsontoJS = JSON.parse(inforUserJson);
console.log(inforUserJsontoJS.fullName);
console.log(inforUserJsontoJS.email);
console.log(inforUserJsontoJS.age);
console.log(inforUserJsontoJS);
console.log(1);
var inforUserJson1 = JSON.stringify(inforUser);
console.log(inforUserJson1);

// JSON co dang 1 number(so)
var inforNumber = '5';
console.log(inforNumber);
console.log(JSON.parse(inforNumber));
var jsonString =
    `
        "Hello"
    `;

//JSON Bollean true false
var jsonBoolean = `true`;
console.log(jsonBoolean);
console.log(JSON.parse(jsonBoolean));

var jsonArray =
    `
        [
            {
                "id":1,
                "name":"Le Van A",
                "email":"dotienquang11@gamil.com"
            },
            {
                "id":2,
                "name":"Le Van B",
                "email":"dotienquang22@gamil.com"
            },
            {
                "id":3,
                "name":"Le Van C",
                "email":"dotienquang33@gamil.com"
            }
        ]
    `;

console.log("Dang String");
console.log(jsonArray);
console.log("Dang mang");
console.log(JSON.parse(jsonArray));


var htmls = "";
var listUser = JSON.parse(jsonArray);
listUser.forEach(item => {
    htmls +=
        `
        <div class="userIteam">
            <div class = "innerName">${item.name}</div>
            <div class = "innerName">${item.email}</div>
        </div>
    `
    console.log(item);
})
console.log(htmls);

const divUserList = document.querySelector(".userList");
divUserList.innerHTML = htmls;
console.log(htmls);



