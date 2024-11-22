
let str1 = "Hi welcome to my profile"
let str2 = "I'm student at TDMU"
let str3 = "My major is accounting..."
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
// /////////////////////

const icon = document.getElementById('self-icont');
let isUp = true;

function jump() {
    const currentTransform = window.getComputedStyle(icon).getPropertyValue('transform');
    const translateY = isUp ? -35 : -10;
    icon.style.transform = `translateY(${translateY}px)`;
    isUp = !isUp;
}

// Set interval to make the icon jump periodically
setInterval(jump, 500);
const byBTns = document.querySelectorAll('.innertext');
const modal = document.querySelector('.box4');
const modalclose = document.querySelector('.fa-xmark');
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