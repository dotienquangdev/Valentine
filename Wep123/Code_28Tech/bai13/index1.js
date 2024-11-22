var a = 10;
var promise = new Promise((resolve, reject) => {
    if (a != undefined && a !== null && a !== "") {

        resolve(a); //thanh cong
    } else {
        reject(a);
    }
});

promise
    .then((success) => {
        console.log(success);
        return success;
    })
    .catch((error) => {
        console.log("loi", error);
        const b = 20;
        console.log(success2 + b)
        return success2 + b;
    })
    .finally((success3) => {
        const c = 34;
        console.log("Luu vao day");
        return success3;
        console.log(success3 + c);

    })