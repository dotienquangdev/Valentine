// Mang
// Cach tao Array 
// Co 2 cach

// Cach 1:
var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
    'Dart',
    null,
    undefined,
    function () {

    },
    {}
];
console.log(languages)

// Cach 2:
var languages1 = new Array(
    'JavaScript',
    'PHP',
    'Ruby',
    'Dart',
    null,
    undefined,
    function () {
    },
    {}
);
console.log(languages1);
console.log(typeof {});
console.log(Array.isArray(languages));
console.log(Array.isArray({}));

// Lam viec voi mang

var languages2 = [
    'JavaScript',
    'PHP',
    'Ruby'
];
console.log(languages2.toString());
console.log(languages2.join());
console.log(languages2.join('-'));
console.log(languages2.join('   '));
// Pop xoa phan tu cuoi mang va tra ve phan tu da xoa
console.log(languages2.pop());
console.log(languages2);

// Push them 1 hoac nhieu phan tu vao cuoi mang va tra lai mang do
console.log(languages2.push('Dart', 'Avata'));
console.log(languages2);

// Shift xoa 1 phan tu o dau mang va tra lai mang da xoa
console.log(languages2.shift());
console.log(languages2);

//unshift them 1 phan tu moi vao dau mang va tra lai mang moi
console.log(languages2.unshift('Hi chao cau'));
console.log(languages2);

//splice Xoa di cac phan tu trong mang khi biet index
languages2.splice(1, 2, 'hi', 'Helo');
// vi tri bat dau xoa la 1, so phan tu xoa la 2
// tham so thu 3, 4 la element muon truyen vao
console.log(languages2);

// Ghep 2 mang lai voi nhau
var languages3 = [
    '1',
    '2',
    'Ba'
];
var languages4 = [
    'Mot',
    'Hati',
    '3'
];
console.log(languages3.concat(languages4));

// Ham
// ham la 1 khối mã: có 2 loại
// + Built-in
// + Tự định nghĩa
// Tính chất : Không thực thi khi định nghĩa
// Sẽ thực thi khi được gọi
// Có thể nhận tham số
// Có thể nhận về 1 giá trị
// Tạo hàm đầu tiên
// Chứa ký tự đầu tiên là chữ cái a -> z 
//  chữ cái đầu tiên không được bắt đầu bằng số
//  chữ cái tiếp theo có thể bằng chữ cái và các ký tự đặc biệt

// ham ko duoc thuc thi
function shorDialog() {
    alert('Hi xin chao cac ban!');
}
console.log(shorDialog); //=> khong hien thi duoc tren man hinh
// cach goi
shorDialog();


// Tham so
function writeLog(mesage) {
    console.log(mesage);
}
writeLog('day la 1 dong log');
writeLog(123);
writeLog('day la 1', 'test2');
console.log(1, 2, 3, 4);
function writeLog1() {
    console.log(arguments);
}
writeLog1('Log1', 'Log2', 'Log3', '');
function writeLog2() {
    for (var param of arguments) {
        console.log(param);
    }
}
writeLog2('L1', 'l2', 'l3', 'l4');
function writeLog3() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}
writeLog3('L1', 'l2', 'l3', 'l4');


// Return trong ham - JavaScript co ban
var isConfirm = confirm('message');
console.log(isConfirm);

function cong(a, b) {
    return a + b;
}
var result1 = cong(2, 8);
console.log(result1);