//. Event listener --> oke
//2. JSON --> ok
// -- ung dung trong thuc te cua JSON?
//3. Promise
/* 
    Syns --> oke
    Async --> ok
    Noi dau --> ok
    Ly thuyet, cach hoat dong --> oke
    Thuc hanh, vi du
    Ung dung thuc te cua Promise
4. Fetch 
    - JSON sever:API Sever (fake) / Mock API -> oke
    - Crud
        - Create: Tạo mới -> POST
        - Read: Lấy dữ liệu -> GET
        - Update: Chỉnh sửa -> PUT / PATCH
        - Delete: Xóa -> DELETE
    -Postman
5. DOM location
6. Local storage
7. Session storage
8. Coding convention
9. Best Pratices
10. Mistakes
11. Performance
1. Front-end: xay dung gai dien nguoi dung
2. Back-end: xay dung  logic xu ly:
+ co so du lieu
//API -> Application programing interface
Cổng giao tiếp giữa các PM
// Back-end ->API -> Fench -> JSON/XML
-> JSON.parse -> JavaScript types
*/
var courseApi = 'https://dummyjson.com/products/1';

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}
start();
//functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        // body: JSON.stringify(data)
    };
    fetch(courseApi + '/' + id, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock =
        document.querySelector('#list-courses');
    var htmls = courses.map(function (courses) {
        return `
                <li>
                    <h4>${courses.name}</h4>
                    <p>${courses.description}</p>    
                    <button onclick="deleteCourse(${courses.id})">Delete</button>
                </li>
                `;
    });
    listCoursesBlock.innerHTML = htmls.json('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function () {
        var name = document.querySelector('input[name ="name"]').value;
        var description = document.querySelector('input[name ="description"]').value;
        // console.log(name);
        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, function () {
            getCourses(renderCourses);
        });
    };
}
