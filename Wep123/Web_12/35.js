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

1. Front-end: xay dung gai dien nguoi dung

2. Back-end: xay dung  logic xu ly:
+ co so du lieu


//API -> Application programing interface


Cổng giao tiếp giữa các PM

// Back-end ->API -> Fench -> JSON/XML
-> JSON.parse -> JavaScript types
*/

var postApi =
    'https://dummyjson.com/products/1';

//stream
fetch(postApi)
    .then(function (response) {
        return response.json();

        //JSON.parse: JSON ->JavaScipt
    })
    .then(function (posts) {
        // console.log(posts);
        var htmls = posts.map(function (post) {
            return `<li>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`;
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function (err) {
        console.log(err);
    })

