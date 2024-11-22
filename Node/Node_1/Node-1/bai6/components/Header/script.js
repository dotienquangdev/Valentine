// function Header() {
var image1 = document.getElementById("header-image1");
var image2 = document.getElementById("header-image2");
function fadeInImage1() {
    image1.style.opacity = '1';
    image2.style.opacity = '0';
    setTimeout(fadeInImage2, 2500); // 4 giây
}

function fadeInImage2() {
    image1.style.opacity = '0';
    image2.style.opacity = '1';
    setTimeout(fadeInImage1, 2500); // 4 giây
} fadeInImage1();
//     return (
//         <>
//         </>
//     )
// }
// export default Header;