console.log(window.location);
// function reloadTab() {

// window.location.reload();


// alert('hi');
// setTimeout(function,milliseconds); sau 1 khoang thoi gian thi se thuc hien
// setInterval(function,milliseconds); sau 1 khoang thoi gian thi se thuc hien va lap di lap lai


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays + 24 * 60 * 60 * 1000));
    var exprires = "exprires" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + exprires;
}

function setCookie(cname, cvalue, exdays) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            if (c.indexOf(nmae)
                == 0) {
                return c.substring(nmae.length, c.length);
            }
        }
    }
    return "";
}
function login() {
    if (true) {
        setCookie("token", "QUANg", 1);
        setCookie("email", "do quang", 1);
        setCookie("fullName", "quang do", 1);
    }
}
let allCookie = document.cookie;
console.log(allCookie);
let email = getCookie("email");
let token = getCookie("token");
console.log(email);
console.log(token);
function updateInfo() {
    document.cookie = 'Email=test@gmail.com';
}
function deleteInfo() {
    document.cookie = "token=; expires = thu, 01 jan 1999 00:00:00 UTC";
    document.cookie = "email=; expires = thu, 01 jan 1999 00:00:00 UTC";
}





