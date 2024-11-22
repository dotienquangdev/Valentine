function myFunction() {
    var options = ['Intel', 'AD', 'Hihi'];
    var select = document.getElementById("ddlDanhsachhangsx");

    options.forEach(function (op) {
        op = op.trim();
        if (op != "") {
            var option = document.createElement("option");
            option.text = op;
            select.add(option);
        }
    }, this);
}

function them() {
    document.getElementById('txtHang').removeAttribute("class");
    document.getElementById('lblHang').removeAttribute("class");
    document.getElementById('btnLuu').removeAttribute("class");
    document.getElementById('btnThem').setAttribute("class", "hidden");
}

function luu() {
    var hangsanxuat = document.getElementById('txtHang').value;
    document.getElementById('txtHang').value = null;
    if (hangsanxuat.trim() != "") {
        var option = document.createElement("option");
        option.text = hangsanxuat;
        var select = document.getElementById("ddlDanhsachhangsx").add(option);
        document.getElementById('txtHang').setAttribute("class", "hidden");
        document.getElementById('lblHang').setAttribute("class", "hidden");
        document.getElementById('btnLuu').setAttribute("class", "hidden");
        document.getElementById('btnThem').removeAttribute("class");
    } else {
        alert("Tên hãng không được để trống !");
        document.getElementById("txtHang").focus();
    }
}

function huy() {
    document.getElementById('txtHang').setAttribute("class", "hidden");
    document.getElementById('lblHang').setAttribute("class", "hidden");
    document.getElementById('btnLuu').setAttribute("class", "hidden");
    document.getElementById('btnThem').removeAttribute("class");
    document.getElementById("box1").style.display = "none";
    document.getElementById("btnThem").style.display = "block";
}
function huy1() {
    // document.getElementById('txtHang').setAttribute("class", "hidden");
    // document.getElementById('lblHang').setAttribute("class", "hidden");
    // document.getElementById('btnLuu').setAttribute("class", "hidden");
    // document.getElementById('btnThem').removeAttribute("class");
    document.getElementById("box1").style.display = "none";
    document.getElementById("btnThem").style.display = "block";
    document.getElementById("btnHuy").style.display = "block";
    document.getElementById("hang1").style.display = "none";
}
//
function them() {
    document.getElementById("box1").style.display = "block";
    document.getElementById("btnThem").style.display = "none";
    document.getElementById("btnHuy").style.display = "none";
    document.getElementById("hang1").style.display = "block";
}








































































































































































































































































// //
// // Mảng lưu trữ danh sách hãng CPU
// var danhSachHangSX = [
//     "Intel",
//     "AMD",
//     "NVIDIA",
//     "Apple",
//     // Thêm các hãng khác nếu cần
// ];

// // Hàm để hiển thị danh sách hãng CPU
// function hienThiDanhSach() {
//     var cpuListElement = document.getElementById("cpuList");

//     // Xóa các phần tử cũ trong danh sách
//     cpuListElement.innerHTML = "";

//     // Hiển thị từng hãng trong mảng
//     danhSachHangSX.forEach(function (hangSX) {
//         var listItem = document.createElement("li");
//         listItem.className = "cpuItem";
//         listItem.textContent = hangSX;
//         cpuListElement.appendChild(listItem);
//     });
// }

// // Hàm để hiển thị các điều khiển khi nhấn nút "Thêm"
// function hienThiThem() {
//     var addControls = document.getElementById("addControls");
//     addControls.style.display = "block";
//     document.getElementById("btnThem").style.display = "none";
// }

// // Hàm để lưu hãng mới vào danh sách
// function luuHang() {
//     var txtHang = document.getElementById("txtHang").value;

//     // Kiểm tra nếu nội dung trong txtHang không trống
//     if (txtHang.trim() !== "") {
//         danhSachHangSX.push(txtHang);
//         hienThiDanhSach();
//         huyThem();
//     } else {
//         alert("Vui lòng nhập tên hãng.");
//     }
// }

// // Hàm để ẩn các điều khiển và hiển thị lại nút "Thêm"
// function huyThem() {
//     var addControls = document.getElementById("addControls");
//     addControls.style.display = "none";
//     document.getElementById("btnThem").style.display = "block";
//     document.getElementById("txtHang").value = ""; // Xóa nội dung trong input
// }

// // Gọi hàm để hiển thị danh sách khi trang web được tải
// hienThiDanhSach();