// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const resultDiv = document.querySelector("#result");
// const buttonSend = document.querySelector("#send");
// const buttonClear = document.querySelector("#clear");
// const buttonUp = document.querySelector("#up");
// const buttonClearAll = document.querySelector("#clearAll");
// button.addEventListener("click", () => {
//     const name = input.name;
//     const value = input.value;
//     // console.log(value);

//     if (value) {
//         localStorage.setItem(name, value);

//         const email = localStorage.getItem("email");
//         resultDiv.innerHTML = email;
//     }
// })

// buttonClear.addEventListener("click", () => {
//     localStorage.removeItem("email");
//     resultDiv.innerHTML = "";
// })

// let count = 0;
// buttonUp.addEventListener("click", () => {
//     localStorage.setItem(`key${count}`, `value${count}`);
//     count++;
// })

// buttonClearAll.addEventListener("click", () => {
//     localStorage.clear();
// })

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     console.log(key, value);
//     // console.log(localStorage.key[i]);
// }



// const contact = document.querySelector("contact refer");

// const observer = new IntersectionObserver(function (entries) {
//     entries.forEach(entry => {
//         console.log(entry.isIntersecting);
//         if (entry.isIntersecting) {
//             contact.style.animation = `Fadein linear 3s`
//         }
//     })
// })
// // observer.observe(contact)
// sessionStorage.setItem("token", "kdjfkhsdkvhskdh");

var input = document.querySelector("input");
var button = document.querySelector("button");
var resultDiv = document.querySelector("#result");
var buttonSend = document.querySelector("#send");
var buttonClear = document.querySelector("#clear");
var buttonUp = document.querySelector("#up");
var buttonclearAll = document.querySelector("#clearAll");

button.addEventListener("click", () => {
    var name = input.name;
    var value = input.value;
    if (value) {
        localStorage.setItem(name, value);
        console.log(name, value);
        const email = localStorage.getItem("email");
        resultDiv.innerHTML = email;
        //set la them vao
        // get la lay ra
    }
})

buttonSend.addEventListener("click", () => {
    var name = input.name;
    var value = input.value;
    if (value) {
        localStorage.setItem(name, value);
        console.log(name, value);
        const email = localStorage.getItem("email");
        resultDiv.innerHTML = email;
        //set la them vao
        // get la lay ra
    }
});
buttonClear.addEventListener("click", () => {
    localStorage.removeItem("email");
    resultDiv.innerHTML = "";
})

let count = 0;
buttonUp.addEventListener("click", () => {
    localStorage.setItem(`key${count}`, `value${count}`);
    count++;
})
buttonclearAll.addEventListener("click", () => {
    localStorage.clear();
})

for (let i = 0; i < localStorage.length; i++) {
    // console.log(i);
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(key, value)
}
// localStorage luu gia tri vinh vien
// sessionStorage luu gia tri co thoi han

// sessionStorage.setItem("token", "hichaiscodbndljca");
// localStorage
// localStorage.key()











