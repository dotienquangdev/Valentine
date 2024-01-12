/*
    Gioi thieu ve toan tu trong JaVaScript
    1. Toan tu so hoc - Arithmetic
    2. Toan tu gan - Assignment
    3. Toan tu so sanh - Comparison
    4. Toan tu logic - Logical
*/

// 1. Toan tu so hoc
var a = 1 + 2;
var b = 1 * 2;

/*
    Cộng +
    Trừ -
    Nhân *
    Chia /
    Chia lấy dư %
    Tăng số lên 1 giá trị ++
    Giảm số đi 1 giá trị --
*/



// 2. toan tu gan
var motivation = 'Dong luc';
var electricFan = 'Quạt điện';

console.log(motivation);
console.log(electricFan);
// 3. Toan tu so sanh
var c = 1;
var d = 2;
if (c <= d) {
    console.log('Win');
} else {
    console.log('loss');
}
// 4. Toán tử logic
var e = 1;
var f = 2;
if (a > 0 && b > 0) {
    console.log('A va b lon hơn 0');
} else {
    console.log('Sai');
}

// 5. Kiểu dữ liệu Boolean
var f = 1;
var g = 2;
var isSucces = f > g;

console.log(isSucces);
// 6. Object types
var myObject = {
    name: 'Quang oke',
    age: 20,
    address: 'Phu Tho',
    myFunction: function () {

    }
};
console.log('myObject', myObject);
// Array khac Object o cho khong can dinh nghia Kys, Ky dau tien bang 0 vca tang dan len

var myArray = [
    'JavaScript',
    'PHP',
    'Rubny'
];
console.log(myArray);