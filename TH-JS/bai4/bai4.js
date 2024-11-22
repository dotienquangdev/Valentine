let currentNumber = 0;
const endNumber = 200; // Số cuối cùng được định sẵn
let intervalId;

function updateNumber() {
    const jumpingNumberElement = document.getElementById('jumping-number');
    jumpingNumberElement.textContent = currentNumber;

    if (currentNumber < endNumber) {
        currentNumber += 1;
    } else {
        clearInterval(intervalId);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    intervalId = setInterval(updateNumber, 10);
});


// function sayHello() {
//     // alert("hi");
//     alert('max of (1,5,2)=' + max3(1, 5, 2));
// }
// function max2(a, b) {
//     return a > b ? a : b;
// }
// function max3(a, b, c) {
//     return (c > (max2(a, b))) ? a : (max2(a, b));
//     // return max2(max2(a, b), c);

// }


function sayHello() {
    var inputMonth = prompt("Nhập vào tháng (1-12):");
    var month = parseInt(inputMonth);

    // Nhập vào năm từ bàn phím
    var inputYear = prompt("Nhập vào năm:");
    var year = parseInt(inputYear);

    // Kiểm tra năm nhuận
    var isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Kiểm tra tháng và in ra số ngày
    var daysInMonth;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = isLeapYear ? 29 : 28;
            break;
        default:
            console.log("Tháng không hợp lệ");
            break;
    }

    // In ra kết quả
    if (daysInMonth !== undefined) {
        alert("Năm nhuận: " + (isLeapYear ? "Có" : "Không"));
        alert("Số ngày của tháng " + month + " năm " + year + " là: " + daysInMonth);
    }

}
