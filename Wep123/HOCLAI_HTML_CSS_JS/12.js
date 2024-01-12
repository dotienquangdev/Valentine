var array = ['a', 'b', 'c', 'a', 'b'];
console.log([...(new Set(array))]);
// 
// Xac dinh diem dung
// Logic handle => tao ra diem dung

function deQuy(num) {
    if (num > 0) {
        // Dung
        console.log(num);
        return deQuy(num - 1);
    }
    return deQuy;
}
deQuy(5);
//
function loop(start, end, callback) {
    if (start < end) {
        callback(start);
        return loop(start + 1, end, callback);
    }
}
var array1 = ['php', 'java', 'ruby'];

loop(0, array1.length, function (index) {
    console.log(array1[index]);
})
loop(0, array1.length, function (index) {
    console.log('Index: ', index);
})

//HTML DOM
// DOM co 3 thanh phan
// 1.Element (html, body, h1,h2,...,head, title, a, ...)
// 2.Atribute (href)
// 3.Text (My title, My link, my header, ...)



