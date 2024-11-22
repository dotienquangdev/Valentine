var stringUser =
    `
        [
            {
                "id":"a01",
                "name":"Nguyen Van A",
                "age":18
            },
            {
                "id":"a02",
                "name":"Nguyen Van B",
                "age":10
            },
            {
                "id" :"a03",
                "name":"Nguyen Van C",
                "age":10
            }
        ]
    `;


console.log(stringUser);
// console.log("\n");
console.log(JSON.parse(stringUser));

var showCode = "";
var nextCode = JSON.parse(stringUser);

nextCode.forEach(a => {
    showCode +=
        `
            <div class="nodeJS">
                <div class="innerText">${a.id}</div>
                <div class="innerText">${a.name}</div>
                <div class="innerText">${a.age}</div>
            </div>
        `
});
console.log(showCode);

var textList = document.querySelector(".textList");
textList.innerHTML = showCode;
