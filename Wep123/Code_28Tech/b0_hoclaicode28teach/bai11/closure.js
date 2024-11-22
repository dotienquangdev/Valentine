var c = 22;
var tinhtoan = () => {
    var c = -10;
    var tong = (a, b) => {
        return a + b + c;
    }
    var hieu = (a, b) => {
        return a - b;
    }
    var tich = (a, b) => {
        return a * b;
    }
    var thuong = (a, b) => {
        return a / b;
    }
    return {
        tong: tong,
        hieu: hieu,
        tich: tich,
        thuong: thuong
    };
}
var tt = tinhtoan();
// console.log(tt(11, 4));
console.log(tinhtoan);
console.log(tt.tong(11, 3));
console.log(tt.hieu(11, 3));
console.log(tt.tich(11, 3));
console.log(tt.thuong(11, 3));
// console.log()
var info = () => {
    let fullName = "Do Tien Quang";
    var getFullName = () => {
        return fullName;
    }
    var setFullName = (string) => {
        fullName = string;
    }
    return {
        get: getFullName,
        set: setFullName
    }
}

var infoUser = info();
console.log(infoUser);
console.log(infoUser.get());
console.log(infoUser.set("Do quang"));
console.log(infoUser.get());

