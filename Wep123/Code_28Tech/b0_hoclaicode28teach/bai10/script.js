// Callbacks la 1 ham duoc truyen duoi dang doi so cua 1 ham khac
function ham1(callback) {
    console.log("ham1");
    console.log(callback);
    callback();
}
function ham2() {
    console.log("ham2")
}
// ham2();
ham1(ham2);

// VD2


function ktsoDuong(so) {
    if (so >= 0) {
        console.log(so + "=la so duong");
    } else {
        console.log(so + "=So am");
    }
}
function ktsochan(so) {
    if (so % 2 == 0) {
        console.log(so + "=la so chan");
    } else {
        console.log(so + "=so le");
    }
}

function tong(a, b) {
    let q = a + b;
    console.log(q);
    ktsoDuong(q);
    ktsochan(q);
}
tong(10, 23);