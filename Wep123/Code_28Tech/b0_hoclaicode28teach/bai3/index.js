// Kiểu dữ liệu
// Có 2 kiểu dữ liệu đó là:
//
//Kiểu dữ liệu nguyên thủy Number, String Boolean, Undefined, Null, Symbol
// JavaScript có 2 kiể số là:
// Số nguyên
// Số thực

// var a = Infinityl;
// console.log(a);

var a1 = 10, a2 = "quang";
var a1 = a2;
console.log(a1);
var a = 10, b = "test", c = 'testt', d = `test 3`;
console.log(a, b, c, d);

// Du lieu phuc tap
function sum(a3, b3) {
    console.log('Tong a+b=', a3 + b3)
}
sum(10, 11);

// Object 
var obJect = {
    name: 'Quang oke',
    age: 20,
    email: 'dotienquang',
    phone: '01292343',

    sum: function (a, b) {
        console.log('tong=', a + b);
    }
}

obJect.sum(10, 33);
console.log(obJect.name);
console.log(obJect.age);
console.log(obJect.email);
console.log(obJect.phone);
console.log(obJect);


var listUser = [
    'Do',
    'tien',
    'quang'
]
console.log(listUser)
console.log("cac cai tren nos se in ra 0..., 1..., 2...=> do la index => muon in ra thi");
console.log(listUser[0], '_', listUser[1], '_', listUser[2], '=>', listUser[3], 'Neu khong co no se cho ra Undefine');

//gan them du lieu cho mang


var listUser1 = [
    'Do',
    'tien',
    'quang'
]

listUser1.old = 30;

console.log(listUser1)

// Quang trong
var result = prompt('Nhap ten');
console.log(result);

var index = confirm("Ban da du 18 tuoi chua");
if (index == true) {
    console.warn('tren 18');
} else {
    console.error('Duoi 19')
    console.info('oke')
    console.debug('jijiji')
}


setTimeout(function () {
    console.warn('Ban vua nhap')
}, 3000);


