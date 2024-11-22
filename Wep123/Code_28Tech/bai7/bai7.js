// Add
const div = document.createElement("div");
div.innerHTML = "Quang cao ...";
console.log(div);
const ads = document.querySelector("#ads");
ads.appendChild(div);
setInterval(() => {
}, 5000);
// 
const div1 = document.createElement("div");
const text = document.createTextNode("Quang cao123");
div.appendChild(text);
console.log(div1);
const ads1 = document.querySelector("#ads");
ads.appendChild(div);
setInterval(() => {
}, 5000);
const button1 = document.querySelector("#button1");
const menu123 = document.querySelector("#menu123");

button1.onclick = function () {
    const firtsElement = menu123.firstElementChild;
    const newItem = document.createElement("li");
    newItem.innerHTML = "Item new";
    // menu123.appendChild(newItem);
    menu123.insertBefore(newItem, firtsElement);
    // Xoa
    // const listItem = menu123.querySelectorAll("li");
    // console.log(listItem);

    // listItem.forEach(item => {
    //     console.log(item);
    //     item.onclick = function () {
    //         menu123.removeChild(item);
    //     }
    // })

    //Thay the
    const listItem1 = menu123.querySelectorAll("li");
    listItem1.forEach(item => {
        const newItem = document.createElement("li");
        newItem.innerHTML = " Item moi";
        menu123.replaceChild(newItem, item);
    })
}

// console.log(newItem);




