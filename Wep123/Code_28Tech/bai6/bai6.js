const child1 = document.querySelector("#child1");
console.log(child1);

//parentNode dùng để truy cập nút cha của nút được chỉ định trong cây DOM(Lấy re thằng cha của nó)
console.log(child1.parentNode);




// childNode truy cập tất cả các node con của 1 phần tử nhất định.Node con có thể là 1 văn bản, chú thích
console.log(child1.childNodes);

console.log(child1.querySelectorAll(".box"));

// firstElementChild trả về phần tử con node đầu tiên của thẻ tra
console.log(child1.firstElementChild);

//lastElementChild trả về phần tử con cuối cùng của thẻ cha
console.log(child1.lastElementChild);

//nextElementSibling trả về phân tử kế tiếp của thẻ con
console.log(child1.nextElementSibling);

//previousElementSibling trả về phần tử trước của thẻ,nếu nó là đầu thì sẽ là NUll
console.log(child1.previousElementSibling);

// lay ra the da dung vi du DIV , button
console.log(child1.nodeName);

const parent = document.querySelector(".parent");
console.log(parent.querySelectorAll(".box"));






