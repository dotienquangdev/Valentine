/* 
Gioi thieu 1 so ham built-in | built : duoc xay dung

    1. Alter
    2.Console
    3.Confirm
    4.Prompt
    5.Set timeout
    6.Set interval
*/


// 1.Alter in ra thong bao
var motivation = 'Dong luc';
alert(motivation);

// 2.Console
console.log(123);
console.log('hello my name is Quang');
console.warn('hello my name is Quang');
console.error('hello my name is Quang');

// 3.Confirm
confirm('Identify your age => Xac nhan ban du tuoi');

// 4.Prompt
prompt('Identify your age => Xac nhan ban du tuoi');

// 5.setTimeout
//Chay code sau 1 khoang thoi gian va chay 1 lan
setTimeout(function () {
    alert('Information => thong bao');
}, 3000);

// 6.setInterval
//Chay code sau 1 khoang thoi gian va chay nhieu lan
setInterval(function () {
    console.log('Have you had dinner yet? => ban da an com chua');
}, 5000);

setInterval(function () {
    console.log('Have you had dinner yet? => ban da an com chua' + Math.random);
}, 5000);