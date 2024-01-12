const root_function = document.querySelector('.menu');
const icont_close = document.querySelector('.menu-icon');
const root_self = document.querySelector('.home');
icont_close.onclick = function () {
    root_function.classList.toggle('hide');
    root_self.classList.toggle('expand');
}


// icont_close.onclick = function () {
// icont_close.classList.toggle('hide');
// icont_close.classList.toggle('hido');
// }





let str1 = "Student"
let str2 = "Front-end Developer"
let str3 = "Student at HaNoi Open University"
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



