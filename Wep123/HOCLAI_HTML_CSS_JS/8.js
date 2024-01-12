// function
// Mot so dieu ve function
// 1 Khi function dat trung ten
function showMessage() {
    console.log('Message 1');
}
function showMessage() {
    console.log('Message 2');
}
function showMessage() {
    console.log('Message 3');
}
showMessage();
// No se lay ra thong tin cua function cuoi cung

// 2 Khai bao bien trong ham
function showMessage1() {
    var fullnames = 'Quang oke';
    console.log(fullnames);
}
showMessage1();
// chu y 1 bien dinh nghia trong 1 funtion thi
// bien chi duoc su dung o trong ham do, neu lay ra thi se bi loi


// 3 Dinh nghia 1 ham trong ham
function showMessage2() {
    function showMessage2a() {
        console.log('MesSage2qa');
    }
    showMessage2a();
};
showMessage2();

// Cac loai funtion
// 1:Declaration function
function showMessage3() {

}

// 2:Expression function
// cac dang dat function
var showMessage4 = function () {

}

setTimeout(function () {

});

var myObject1 = {
    myFunction: function () {

    }
}
// vi du
function showMessage5() {
    console.log('Hi chao cau1');
}
showMessage5();

var showMessage6 = function () {
    console.log('Hi chao cau2');
}
showMessage6();

// Polyfill
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start == undefined) { start = 0; }
        return this.indexOf(search, start) !== -1;
    };
}

// var title = 'JavaScript';
'JavaScript coutse'.includes('JavaScript', 0);

// Object trong JavaScript
var myInfo1 = {
    name: 'Quang Do',
    age: 20,
    address: 'Phu Tho, VietNamese'
};
console.log(myInfo1);


var myInfo2 = {
    name: 'Quang Do',
    age: 20,
    address: 'Phu Tho, VietNamese',
    emailKey: 'QuangOke12@gmail.com',
    getName: function () {
        // return myInfo2.name;
        return this.name;
    }
};
console.log(myInfo2);
myInfo2.email = 'dotienquang1234@gmail.com';
console.log(myInfo2.name);
//neu choc vao key khong co thi se tra ve undifine
console.log(myInfo2.hichaocau);

var myKey = 'address';
console.log(myInfo2[myKey]);

// xoa 1 key trong Object
delete myInfo2.emailKey;


var myInfo3 = {
    name: 'Quang Do',
    age: 20,
    address: 'Phu Tho, VietNamese',
    emailKey: 'QuangOke12@gmail.com',
    getName: function () {
        return this.name;
    }
};
console.log(typeof myInfo3.getName);

// Goi function
console.log(myInfo3.getName);

// chay function
console.log(myInfo3.getName());

// truong hop no la 1 function --> phuong thuc :-> method
// truong hop con lai du lieu lay ra luan khong can phai goi :-> thuoc tinh : property

// Doi tuong Date
var date = new Date();
console.log(date);




