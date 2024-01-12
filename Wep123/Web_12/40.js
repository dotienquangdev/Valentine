Array.prototype.reduce2 = function (callback, result) {
    if (arguments.length < 2) {

    }
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i], i.this)
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce((total, number) => {
    return total + number;
}, 10)


//const result = numbers.reduce(callback, initiaValue)
// callback: ham duoc goi lai , la gia tri bat buoc 
// initialue khong phai la gia tri bat buoc

console.log(result);