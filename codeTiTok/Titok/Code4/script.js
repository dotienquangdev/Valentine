window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    document.querySelector('.parallax').style.backgroundPositionY = offset * 0.7 + 'px';
});