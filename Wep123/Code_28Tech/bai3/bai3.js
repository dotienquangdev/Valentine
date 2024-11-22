

const monhoc = [
    { ten: "Toan", diem: 9 },
    { ten: "Ly", diem: 8 },
    { ten: "Hoa", diem: 8.5 },
    { ten: "Sinh", diem: 9.2 },
    { ten: "Anh", diem: 98 },
];


let mangs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let hetqua = mangs.map((item, index, array) => {
    return item;
});
console.log(hetqua);

let diem = monhoc.map(item => {
    return item;
})
console.log(diem);

console.log(window.innerHeight);
console.log(window.innerWidth);