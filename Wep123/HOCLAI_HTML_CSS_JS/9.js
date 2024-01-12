// For loop
var myArray = [
    'JavaScript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python',
    'Avatar'
];
var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(i);
}

// For/in loop su dung khi lay ra key cua doi tuong
var myInfor = {
    names: 'Quang Do',
    age: 20,
    address: 'Cam Khe Phu Tho'
};
for (var key in myInfor) {
    // code
    console.log(key);
    console.log(myInfor[key]);
    console.log(typeof key);
}
var lanGuaage = [
    'JavaScript',
    'PHP',
    'Ruby',
    'Avatar'
];
for (var key in lanGuaage) {
    console.log(key)
}

var myString = 'DoTienQuang';
for (var key in myString) {
    console.log(myString[key]);
}

// For/ of loop
// lay ra phan tu cua 1 mang , object cua 1 chuoi
var lanGuaage1 = [
    'java',
    'php',
    'ninja'
];
for (var value of lanGuaage1) {
    console.log(value);
}

var lanGuaage2 = {

    namea: 'quang ',
    age: 230
};
console.log(Object.values(lanGuaage2));
for (var value of Object.values(lanGuaage2)) {
    console.log(value);
}

//Vong lap While
var i = 0;
while (i < 10) {
    i++;
    console.log(i);
}
// vong lap do while

var i = 0;
var isSuccess = false;
do {
    i++;
    console.log(i);

    //thanh cong
    if (true) {

    }
} while (i < 10)

// 
for (var i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);
}
// vong lap long nhau

var myArray1 = [
    [1, 2],
    [2, 3],
    [3, 4]
];
for (var i = 0; i < myArray1.length; i++) {
    for (var j = 0; j < myArray1[i]; j++) {
        console.log(myArray1[i][j]);
    }
}


// Mang phan 2
var couserts = [
    {
        id: 1,
        names: 'JavaScript',
        coin: 300
    },
    {
        id: 2,
        names: 'PHP',
        coin: 0
    },
    {
        id: 3,
        names: 'C++',
        coin: 0
    },
    {
        id: 4,
        names: 'Avatar',
        coin: 100
    },
    {
        id: 5,
        names: 'Java',
        coin: 300
    }
];
couserts.forEach(function (cousert, index) {
    console.log(index, cousert);
})

// every kiem tra cac phan tu trong mang thoa man 1 dieu kien nao do


var cousert1s = [
    {
        id: 1,
        names: 'JavaScript',
        coin: 300
    },
    {
        id: 2,
        names: 'PHP',
        coin: 0
    },
    {
        id: 3,
        names: 'C++',
        coin: 0
    },
    {
        id: 4,
        names: 'Avatar',
        coin: 100
    },
    {
        id: 5,
        names: 'Java',
        coin: 300
    }
];
var isFree = cousert1s.every(function (cousert1, index) {
    return cousert1.coin >= 0;
})
console.log(isFree);
// map()

var courses = [
    {
        id: 1,
        names: 'JavaScript',
        coin: 300
    },
    {
        id: 2,
        names: 'PHP',
        coin: 0
    },
    {
        id: 3,
        names: 'C++',
        coin: 0
    },
    {
        id: 4,
        names: 'Avatar',
        coin: 100
    },
    {
        id: 5,
        names: 'Java',
        coin: 300
    }
];

function coursesHandler(courses, index) {
    // return 1231;
    return {
        id: courses.id,
        names: `Khoa hoc: ${courses.names}`,
        cin: courses.coin,
        coinText: `Gia:${courses.coin}`,
        index: index,
        originArray: courses,
    };
}

var newCourses1 = courses.map(coursesHandler);

console.log(newCourses1);
// Lay ra ten cua cac khoa hoc
/*
function coursesHandler(courses, index) {
    // return 1231;
    return courses.names;
}
*/
var newCourses = courses.map(function () {

});

//Tinh tong tien cua cac khoa hoc
//Bien luu tru
var totalCoin = 0;
for (var courses of courses) {

    //Thuc hien viec luu tru
    totalCoin += courses.coin;
}
// console.log(totalCoin);
//
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    // i++;
    // console.table({
    //     'Luot chay: ': i,
    //     'Bien tich tru: ': accumulator
    // });
    return accumulator + currentValue;
}
var totalCoin1 = courses.reduce(coinHandler, 0);

console.log(totalCoin1);

var courses3 = [
    {
        id: 1,
        names: 'JavaScript',
        coin: 300
    },
    {
        id: 2,
        names: 'PHP',
        coin: 0
    },
    {
        id: 3,
        names: 'C++',
        coin: 0
    },
    {
        id: 4,
        names: 'Avatar',
        coin: 100
    },
    {
        id: 5,
        names: 'Java',
        coin: 300
    }
];
var i = 0;
var totalCoin2 = courses3.reduce(function (total, courses3) {
    return total + courses3;
}, 0);
console.log(totalCoin2);

var number = [100, 200, 300, 400, 500];
var totalCoin4 = number.reduce(function (total, number) {
    return total + number;
})
console.log(totalCoin4);
