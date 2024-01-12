
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
var i = 0;
var totalCoin = courses.reduce(function (total, courses) {
    i++;
    console.log(i, total, courses);
    return total + courses.coin;
}, 0);
console.log(totalCoin);

var numbers = [10, 100, 200, 100, 400];
var totalCoin1 = numbers.reduce(function (total, numbers) {
    return total + numbers;
});
console.log(totalCoin1);

//Lam phang mang
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

var topics = [
    {

        topic: "Font-end",
        courses: [
            {
                id: 1,
                title: "HTML,CSS"
            },
            {
                id: 2,
                title: "Java"
            }
        ]
    },
    {

        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "HTML0,CSS0"
            },
            {
                id: 2,
                title: "Java0"
            }
        ]
    }
];
//Lay ra khoa hoc va dua vao 1 mang moi
var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses);
}, []);
console.log(newCourses)

var htmls = newCourses.map(function (courses) {
    return `
            <div>
                <h2>${courses.title}</h2>
                <p>ID: ${courses.title}</p>
            </div>
        `;
})
console.log(htmls);
// include Number
var title = 'Reponsive web design';

console.log(title.includes('web design'));
//include method
var title = ['Reponsive', 'php', 'dart'];
console.log(courses.includes('php'));
