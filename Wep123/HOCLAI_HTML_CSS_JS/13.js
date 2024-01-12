//HTML DOM
// 1. Element
// 2. Attribute
// 3. Text\

// document la the lon nhat bao trum toan bo web
console.log(document);

// write no se them 1 phần tử p và cuối cùng
document.write('Hi chao cau');

// lay ra h1 dung getElementById('Truyen ten the vao:id, class')
var headingNode = document.getElementById('heading');
console.log(headingNode);
console.log({
    Element: headingNode
})
var headingNode1 = document.getElementsByClassName('heading1');
console.log(headingNode1);
// TagName lay ra theo ten the vidu h1, span, p....
var headingNode2 = document.getElementsByTagName('h1');
console.log(headingNode2);

var headingNode3 = document.getElementsByTagName('p');
console.log(headingNode3);

var listNode = document.querySelector('.box-1');
console.log(listNode.querySelectorAll('li'));

var headingElement = document.querySelector('.heading1');
headingElement.getAttribute('id', 'heading123');

