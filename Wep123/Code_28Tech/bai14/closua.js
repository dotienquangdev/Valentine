var c = 10;
const tinhToan = () => {
    const c = 33;
    const tong = (a, b) => {
        return a + b + c;
    }
    const hieu = (a, b) => {
        return a - b;
    }

    const tich = (a, b) => {
        return a * b;
    }

    const thuong = (a, b) => {
        return a / b;
    }
    return {
        tong: tong,
        hieu: hieu,
        tich: tich,
        thuong: thuong
    };
}
const tt = tinhToan();
console.log(tt);
console.log(tt.tong(10, 99));
console.log(tt.hieu(33, 22));
console.log(tt.tich(22, 9));
console.log(tt.thuong(12, 2));

const infor = () => {
    let fullName = "Do quang";
    const getFullName = () => {
        return fullName;
    }
    const setFullName = (String) => {
        fullName = String;
    }
    return {
        get: getFullName,
        set: setFullName
    }
}
const inforUser = infor();
console.log(inforUser.set("Quang okw"));
console.log(inforUser.get());

var a = 10;
var b = 20;
var x = a + b;
const string = "Ket qua cua 10 va 20=";

console.log(string);
const ting = `ket qua ${a} + ${b} = ${x}`
console.log(ting);














