// vd1
// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum);
// console.log(sum(19, 20));


// vd2
// const sum1 = (a, b) => {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }
// console.log(sum1);
// console.log(sum1(19, 20));


// //vd3
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [...array1, ...array2]
// console.log(...array1);
// console.log(array1);
// console.log(...array2);
// console.log(...array3);


// //vd4
// let inforUser = {
//     fulName: "Do Tien Quang",
//     email: "dotienquang@gmail.com"
// };
// let inforUpdate = {
//     phone: "0987654321",
//     age: 18
// }
// let inforFinal = {
//     ...inforUser,
//     ...inforUpdate
// }

// console.log(inforFinal);



// vd5
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [
//     {
//         id: "1",
//         name: "do quang"
//     },
//     {
//         id: "2",
//         name: "do tien quang"
//     }, {
//         id: "3",
//         name: "quang 123"
//     }
// ]

// const array4 = [...array1, ...array2, ...array3];
// console.log(array1);
// console.log(array2);
// console.log(array3);
// console.log(array4);


// vd6
// const sum = (...number) => {
//     console.log(number);
//     const result = number.reduce((total, item) => {
//         return total + item;
//     }, 0);
//     return result;
// }

// console.log(sum(9, 10, 23, 23, 12, 54, 34, 24))


//vd7
let inforUser = {
    fullName: "do quang3",
    email: "doquang123456"
} || {};
// console.log(inforUser);

const { fullName, email } = inforUser;
console.log(fullName);
console.log(email);

/*
    forEach() la 1 phuong thuc cua array , de duyet qua 1 phan tu cua mang va thuc hien 1 hanh dong naof do
    forEach khong tao mang moi, ma chir co ther sua mangr hien taij

    map() se duyet qua cac phan tu cua mang, tao ra mang mois, so luong bang so luong phan tu cu
    
*/

