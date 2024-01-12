//callback
// la ham function duoc truyen qua doi so
// khi goi ham khac

//1 La ham
//2 Duoc truyen qua doi so

function myFunction(param) {
    console.log(param)
}
myFunction('Learn ptogramming.');
myFunction(123);

function myCallback() {

}
myFunction(myCallback);
//

function myFunction1(param) {
    param('hoc lap trinh');
}

function myCallback1(value) {
    console.log('Value: ', value);
}
myFunction1(myCallback1);

var courses = [
    'Javaa',
    'pgp',
    'ruby'
];

var htmls = courses.map(function (courses) {
    return `<h2>${courses}</h2>`;
});
console.log(htmls.join(''));


Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.has0wnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) {
                output.push(this[index]);
            }
        }
    }
}

var courses = [
    {
        names: 'Java',
        coin: 400
    },
    {
        names: 'Java1',
        coin: 100
    },
    {
        names: 'Java2',
        coin: 0
    }
];

var filterCourses = courses.filter(function (courses, index, array) {
    // console.log(courses, index, array);
    return courses.coin > 200;
});
console.log(filterCourses);
/*
    Tim hieu them
    value type and reference type in javascript
*/


// Some nếu có ít nhất 1 cái đúng thì nó sẽ trả về đúng
var courses1 = [
    {
        names: 'Java',
        coin: 400,
        isFinish: true,
    },
    {
        names: 'Java1',
        coin: 100,
        isFinish: false,
    },
    {
        names: 'Java2',
        coin: 0,
        isFinish: false,
    }
];
var result = courses1.some(function (course, index, array) {
    return course.isFinish;
})
console.log(result);
// 
//Some2
Array.prototype.some2 = function (callback) {
    var output = false;
    for (var index in this) {
        if (this.has0wnProperty(index)) {
            if (callback(this[index], index, this)) {
                output = true;
                break;
                // return true;
            };

        }
    }
    return output;
}
var courses12 = [
    {
        names: 'Java',
        coin: 400,
        isFinish: true,
    },
    {
        names: 'Java1',
        coin: 100,
        isFinish: false,
    },
    {
        names: 'Java2',
        coin: 0,
        isFinish: false,
    }
];
var result12 = courses12.some2(function (course, index, array) {
    return course.isFinish;
})
console.log(result12);



