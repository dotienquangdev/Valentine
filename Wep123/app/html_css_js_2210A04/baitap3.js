

// Mảng 
// Tạo mảng
var city = [
    'Hà nội',
    'Hải Phòng',
    'HCM',
    'cần thơ'
];
console.log(city);
// mang co the chua duoc tat ca cacs loai du lieu

var city1 = [
    'Hà nội',
    'Hải Phòng',
    'HCM',
    'cần thơ',
    function () { },
    null,
    undefined
];
console.log(city1);

// dem so phan tu trong mang
console.log(length.city1);
console.log(typeof city1);

// lam viec voi mang
// chuyn tu mang sang chuoi
var city2 = [
    'ha Noi',
    'Thanh Hoa'
];
console.log(city2.toString());


//chuyen tu chuoi sang mang
var city4 = 'Honda , Huyndai, Vinfast';
console.log(city4.split(' , '))
//
var city5 = 'Honda1 , Huyndai2, Vinfast';
// console.log(city5.join('h'))

// su khac biet giua split va join
// split chi ngan cach ddc = dau ','
// join dung ddc cac ky tu khac


// pop xoa 1 phan tu cuoi mang
var city6 = [
    'ha Noi',
    'Thanh Hoa',
    'Thanh Hoa2',
    'Thanh Hoa3'
];
console.log(city6.pop());
console.log(city6);

//ppush them 1 phan tu vao cuoi mang
var city7 = [
    'ha Noi1',
    'Thanh Hoa2',
    'Thanh Hoa23',
    'Thanh Hoa34'
];
console.log(city7.push('Phu tho', 'Huong lung'));
console.log(city7);


//shift xoa phan tu o dau mang
var city8 = [
    'ha Noi15',
    'Thanh Hoa25',
    'Thanh Hoa235',
    'Thanh Hoa345'
];
console.log(city8.shift('Phu tho', 'Huong lung'));
console.log(city8);

// xoa het thi tra vew undefine

//unshift them 1 phan tu moi vao dau mang

var city9 = [
    'ha Noi15',
    'Thanh Hoa25',
    'Thanh Hoa235',
    'Thanh Hoa345'
];
console.log(city9.unshift('Phu tho23', 'Huong lung2355'));
console.log(city9);

//splice dung de xoa chen phan tu moi vao mang
var city10 = [
    'ha Noi15',
    'Thanh Hoa25',
    'Thanh Hoa235',
    'Thanh Hoa345'
];
//console.log(city10.splice(1, 2));
// 1 thu tu phan tu bawt dau xoa , 2 xoa so phan tu sau thu tu
console.log(city10.splice(1, 2, 'Quang oke'));
console.log(city10);


//concat ham noi 2 mang
var city11 = [
    'ha Noi15',
    'Thanh Hoa25',
    'Thanh Hoa235',
    'Thanh Hoa345'
];

var city12 = [
    'ha5',
    'THoa25',
    'Than',
    'Th345'
];
console.log(city11.concat(city12));


//slice dung de copy mang
var city13 = [
    'ha5',
    'THoa25',
    'Than',
    'Th345'
];

console.log(city13.slice(1, 2));

var city13AfterCut = city13.slice(1, 3);
console.log(city13AfterCut);

//
var city14 = [
    'ha5',
    'THoa25',
    'Than',
    'Th345'
];
var city15 = city14;
city15.pop();
console.log(city14);