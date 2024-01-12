const byBTns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalclose = document.querySelector('.js-modal-close');
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



