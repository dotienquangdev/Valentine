const root_function = document.querySelector('.menu');
const icont_close = document.querySelector('.menu-icon');
const root_self = document.querySelector('.home');
icont_close.onclick = function () {
    root_function.classList.toggle('hide');
    root_self.classList.toggle('expand');
}


let str1 = "My name is Quang"
let str2 = "I am a programming student"
let str3 = "I am a student at Hanoi Open University"
const inner = document.querySelector("#input")
const typeText = (str, callback) => {
    let idx = 0
    const interval = setInterval(() => {
        if (idx < str.length) {
            inner.innerHTML += str[idx]
            idx++
        } else {
            clearInterval(interval)
            setTimeout(() => deleteText(str, callback), 2000)
        }
    }, 50)
}
const deleteText = (str, callback) => {
    let idx = str.length
    const interval = setInterval(() => {
        if (idx >= 0) {
            inner.innerHTML = str.substring(0, idx)
            idx--
        } else {
            clearInterval(interval)
            callback()
        }
    }, 50)
}
const startAnimation = () => {
    typeText(str1, () => {
        typeText(str2, () => {
            typeText(str3, startAnimation)
        })
    })
}
startAnimation();


const icon = document.getElementById('image-in-icont');
let isUp = true;

function jump() {
    const currentTransform = window.getComputedStyle(icon).getPropertyValue('transform');
    const translateY = isUp ? -35 : -10;
    icon.style.transform = `translateY(${translateY}px)`;
    isUp = !isUp;
}

// Set interval to make the icon jump periodically
setInterval(jump, 500);




const byBTns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.refer-know-modal');
const modalclose = document.querySelector('.refer-know-modal-close');
function showBytikets() {
    modal.classList.add('open');
}
function hideBytikets() {
    modal.classList.remove('open');
}
for (const byBTn of byBTns) {
    byBTn.addEventListener('click', showBytikets)
}
modalclose.addEventListener('click', hideBytikets)



// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');