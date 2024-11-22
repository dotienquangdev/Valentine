export function tong(a, b, callback) {
    let ketqua = a + b;
    console.log(ketqua);
    callback(ketqua);
    kiemtrasoduong(ketqua);
    kiemtrasoChanLe(ketqua);
}