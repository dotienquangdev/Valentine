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
4. fetch 
5. DOM location
6. Local storage
7. Session storage
8. Coding convention
9. Best Pratices
10. Mistakes
11. Performance
*/
var users = [
    {
        id: 1,
        name: 'Quang oke',
    },
    {
        id: 2,
        name: 'Oke boy',
    },
    {
        id: 3,
        name: 'Hi hi',
    },
    //....
];// luu tru noi dung binh luan
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Quang chua ra video:(',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi:('
    }
];
//1. Lay coments
//2. Tu coment lay ra usert_id
//3. Tu usert_id lay ra user tuong ung

//Fake API
function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id);
        });
        setTimeout(function () {
            resolve(result);
        }, 1000);
    }, 1000);
}
/*
getComments()

    .then(function (comments) {
        console.log(comments);
    })
// */
// getComments()

//     .then(function (comments) {
//         var userIds = comments.map(function (comment) {
//             return comment.user_id;
//         });
//         console.log(userIds);
//     });

getUsersByIds([1])
    .then(function (users) {
        console.log(users);
    });