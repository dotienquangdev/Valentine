
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
})
console.log(pro)

setTimeout(() => {
    console.log("sau 1s", pro);
}, 1000);

setTimeout(() => {
    console.log("sau 2s", pro);
}, 2000);

setTimeout(() => {
    console.log("sau 3s", pro);
}, 3000);

//  ///////////////////////////
var a = 10;
// alert("hi")
var promise = new Promise((resolve, reject) => {
    if (a !== undefined && a !== null && a !== "") {
        resolve(a);// thanh cong
    } else {
        reject(a);
    }
});

// promise
//     .them((success) => {
//         console.log(success);
//         return success;
//     })
//     .them((success2) => {
//         const b = 20;
//         console.log(success2);
//         return success2 + b;
//     })
//     .them((success3) => {
//         const c = 30;
//         console.log(success3);
//         return success3 + c;
//     })
//     .catch((error) => {
//         console.log("Looi", error);
//     })
//     .finally(() => {
//         console.log("Luan vao day");
//     })

// let a = 20;
let b = 30;
let c = 40;
let d = 50;
let e = 60;
let sum1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a + b);
    }, 4000)
})
let sum2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(c + d);
    }, 6000)
})

let sum3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(d + e);
    }, 9000)
})

Promise.all([sum1, sum2, sum3])
    .then(([sum1, sum2, sum3]) => {
        let sum = sum1 + sum2 + sum3;
        console.log(sum);
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => {
        console.log("Luan vao day.")
    })