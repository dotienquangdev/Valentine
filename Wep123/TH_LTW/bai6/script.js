function xem() {
    var ngaysinh = document.getElementById('ngaysinh');
    var ngaysinhValue = ngaysinh.value;
    if (ngaysinhValue.trim() == "") {
        alert('Hãy nhập ngày tháng');
        ngaysinh.focus();
    }
    var ngaySinh = ngaysinhValue.split("/");
    var ngay = parseInt(ngaySinh[2]);
    var thang = parseInt(ngaySinh[1]);

    var cung = "";
    if ((thang === 3 && ngay >= 21) || (thang === 4 && ngay <= 19)) {
        cung = "Bạch Dương";
    } else if ((thang === 4 && ngay >= 21) || (thang === 5 && ngay <= 20)) {
        cung = "Kim Ngưu";
    } else if ((thang === 5 && ngay >= 21) || (thang === 6 && ngay <= 21)) {
        cung = "Song Tử";
    } else if ((thang === 6 && ngay >= 22) || (thang === 7 && ngay <= 22)) {
        cung = "Cự Giải";
    } else if ((thang === 7 && ngay >= 23) || (thang === 8 && ngay <= 22)) {
        cung = "Sư Tử";
    } else if ((thang === 8 && ngay >= 23) || (thang === 9 && ngay <= 22)) {
        cung = "Xử Nữ";
    } else if ((thang === 9 && ngay >= 23) || (thang === 10 && ngay <= 23)) {
        cung = "Thiên Bình";
    } else if ((thang === 10 && ngay >= 24) || (thang === 11 && ngay <= 22)) {
        cung = "Bọ Cạp";
    } else if ((thang === 11 && ngay >= 23) || (thang === 12 && ngay <= 21)) {
        cung = "Nhân Mã";
    } else if ((thang === 12 && ngay >= 22) || (thang === 1 && ngay <= 19)) {
        cung = "Ma Kết";
    } else if ((thang === 1 && ngay >= 20) || (thang === 2 && ngay <= 18)) {
        cung = "Bảo Bình";
    } else if ((thang === 2 && ngay >= 19) || (thang === 3 && ngay <= 20)) {
        cung = "Song Ngư";
    } else {
        alert('Nhap sai ngay thang');
        // ngaySinh.focus();
    }

    // Hiển thị cung trong txtCung
    var hiencung = document.getElementById("cung");
    hiencung.value = cung;
}
function xoa() {
    document.getElementById('ngaysinh').value = "";
    document.getElementById('cung').value = "";
}