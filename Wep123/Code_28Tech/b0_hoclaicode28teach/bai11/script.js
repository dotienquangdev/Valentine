var input = document.querySelector("input");
var button = document.querySelector("button");
// 
var result = document.querySelector(".result");
var clear1 = document.querySelector("#clear");
var add1 = document.querySelector("#add");
var clearAll = document.querySelector("#clearAll");

button.addEventListener("click", () => {
    var name = input.name;
    var dem = 0;
    var value = input.value;
    // value = [];
    // console.log(name, value);
    if (value) {
        localStorage.setItem(name, value);
        var email = localStorage.getItem("email");
        result.innerHTML = email;
        dem++;
    }
})

clear1.addEventListener("click", () => {
    localStorage.removeItem("email");
    result.innerHTML = "";
})

let cout = 0;
add1.addEventListener("click", () => {
    localStorage.setItem(`key${cout}`, `value${cout}`);
    cout++;
})
clearAll.addEventListener("click", () => {
    localStorage.clear();
})

for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
}